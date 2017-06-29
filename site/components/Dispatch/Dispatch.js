import React, { PropTypes } from 'react';
import autosize from 'autosize';
import autoBind from 'react-autobind';
import $ from 'jquery';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './Dispatch.css';
import { firedb } from '../../store/fire';
import types from '../../utils/types';
import actions from '../../actions';
import angler from '../../utils/angler';
import Block from '../Block/Block';
import DispatchItem from './DispatchItem';
import DispatchPost from './DispatchPost';
import api from '../../utils/api';

class Dispatch extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
      question: false,
      post: '',
      postStatus: 'ready',
      items: [],
      posts: [],
      since: 0,
    };
    this.endEditTimo = 0;
    this.listener = false;
    this.scrollLoadTimo = 0;
    this.editingComments = {};
    this.loadingViaScroll = false;
  }
  componentDidMount() {
    const d = this.props;
    const path = `feeds/${d.channelType}_${d.channelId}`;
    this.listener = firedb.child(path).on('value', () => {
      this.fetch({ action: 'prepend' });
    });
    this.fetch({ action: 'replace' });
    this.autosize();
    if (this.props.inifiniteScroll) {
      $(window).scroll(this.onScroll);
    }
  }
  componentWillUnmount() {
    const d = this.props;
    const path = `feeds/${d.channelType}_${d.channelId}`;
    this.listener = firedb.child(path).off();
    $(window).unbind('scroll', this.onScroll);
  }
  onScroll(e) {
    const sH = document.documentElement.scrollHeight;
    const cH = document.documentElement.clientHeight;
    const scrollHeight = sH - cH;
    const scrollPercent = window.scrollY / scrollHeight * 100;
    if (scrollPercent > 80 && !this.loadingViaScroll) {
      this.loadingViaScroll = true;
      const before = _.last(this.state.items).feed_id;
      this.fetch({ action: 'append', before }).then(() => {
        setTimeout(() => {
          this.loadingViaScroll = false;
        }, 1000);
      });
    }
  }
  autosize() {
    setTimeout(() => {
      autosize($('textarea', $(this.shell)));
    }, 400);
  }
  fetch({ action, before }) {
    const params = {
      channel_id: this.props.channelId,
      channel_type: this.props.channelType,
      include_author: false,
      since: this.state.since,
      before,
    };
    return api('get feed', params).then(rsp => {
      this.load(rsp.data.feed_contents, action);
    });
  }
  load(postsToLoad, action) {
    // this.setState({ posts: [], items: [] });
    if (postsToLoad[0] !== undefined) {
      let items = [];
      let posts = [];
      items = postsToLoad;
      if (action === 'prepend') {
        const existing = this.state.items;
        items = items.concat(existing);
      }
      if (action === 'append') {
        const existing = this.state.items;
        console.log(existing);
        items = existing.concat(items);
      }
      console.log(items.length);
      posts = items.map(passedItem => {
        const item = passedItem;
        item.num_likes = item.num_likes.toString();
        item.num_comments = item.num_comments.toString();
        item.feed_id = item.feed_id.toString();
        item.channel_id = item.channel_id.toString();
        item.user_id = item.user_id.toString();
        return (
          <DispatchItem
            key={`dispatchitem-${item.feed_id}`}
            {...item}
            auth={this.props.auth}
            action={this.action}
          />
        );
      });
      items = items.map(item => {
        const i = item;
        if (i.commentPost === undefined) {
          i.commentPost = '';
        }
        return i;
      });
      this.since = items[0].feed_id;
      this.setState({ posts, items });
      this.autosize();
    }
  }
  action(act, feedId, opts) {
    if (act === 'like') {
      this.like(feedId);
    } else if (act === 'postComment') {
      this.postComment(feedId, opts.content);
    } else if (act === 'toggleComments') {
      this.updateItem(feedId, { showComments: !opts.current });
    } else if (act === 'editComment') {
      this.updateItem(feedId, { commentPost: opts.content });
    }
  }
  like(feedId) {
    api('post feed/like', { feed_id: feedId }).then(rsp => {
      if (rsp.data.num_likes) {
        const likes = this.props.auth.me.feed_likes;
        likes.push(feedId);
        this.props.act.updateMe('feed_likes', likes);
        this.updateItem(feedId, { num_likes: rsp.data.num_likes });
        this.forceUpdate();
      }
    });
  }
  updateItem(feedId, updates) {
    const newItems = [];
    this.state.items.forEach(item => {
      if (item.feed_id === feedId) {
        const newItem = _.assign({}, item, updates);
        newItems.push(newItem);
      } else {
        newItems.push(item);
      }
    });
    this.load(newItems, 'replace');
  }
  change(e) {
    this.setState({ post: e.target.value });
  }
  focus() {
    clearTimeout(this.endEditTimo);
    this.setState({ postStatus: 'editing' });
  }
  blur() {
    this.endEditTimo = setTimeout(() => {
      this.setState({ postStatus: 'ready' });
    }, 200);
  }
  post(e) {
    e.preventDefault();
    e.stopPropagation();
    const post = this.state.post;
    const status = this.state.postStatus;
    if (post.length > 0 && status !== 'posting') {
      this.setState({ postStatus: 'posting' });
      api('post feed', {
        channel_id: this.props.channelId,
        channel_type: this.props.channelType,
        content: this.state.post,
      }).then(() => {
        this.setState({ postStatus: 'posted', post: '' });
        setTimeout(() => {
          this.setState({ postStatus: 'ready' });
        }, 2000);
      });
    }
  }
  setShell(shell) {
    if (shell) {
      this.shell = shell;
    }
  }
  render() {
    const headcss = {};
    const clip = angler('tr:0,18%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    return (
      <div styleName="shell" ref={this.setShell}>
        <DispatchPost
          key="postarea"
          onChange={this.change}
          onFocus={this.focus}
          onBlur={this.blur}
          value={this.state.post}
          placeholder={this.props.placeholder}
          status={this.state.postStatus}
          onSubmit={this.post}
        />
        {this.state.posts.length
          ? this.state.posts
          : <Block
              background="orange"
              width="250px"
              clip="br:0,-10%"
              css={{ marginTop: '64px' }}
            >
              <h4>Loading...</h4>
            </Block>}
      </div>
    );
  }
}

Dispatch.defaultProps = {
  type: 'text',
  channelId: '0',
  channelType: 'global',
  inifiniteScroll: true,
};
Dispatch.propTypes = {
  channelId: PropTypes.string,
  channelType: PropTypes.string,
  userId: PropTypes.string,
  inifiniteScroll: PropTypes.bool,
  placeholder: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

Dispatch.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(Dispatch, styles),
);
