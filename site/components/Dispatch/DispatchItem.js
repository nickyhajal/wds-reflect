import _ from 'lodash';
import moment from 'moment';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from '../Link/Link';
import { firedb } from '../../store/fire';
import api from '../../utils/api';
import Avatar from '../Avatar/Avatar';
import nicetime from '../../utils/nicetime';
import styles from './DispatchItem.css';
import DispatchPost from './DispatchPost';
import DispatchComment from './DispatchComment';
import types from '../../utils/types';

class DispatchItem extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      userComment: '',
      commentsOpen: false,
      commentStatus: 'editing',
      comments: [],
    };
    this.listener = false;
  }
  editComment(e) {
    this.setState({ userComment: e.target.value });
  }
  toggleComments() {
    const state = !this.state.commentsOpen;
    const path = `feeds/comments_${this.props.feed_id}`;
    if (state) {
      firedb.child(path).on('value', () => {
        this.fetchComments();
      });
    } else {
      firedb.child(path).off();
    }
    this.setState({ commentsOpen: state });
  }
  fetchComments() {
    api('get feed/comments', { feed_id: this.props.feed_id }).then(rsp => {
      if (rsp.data.comments !== undefined && rsp.data.comments.length) {
        this.setState({ comments: rsp.data.comments });
      }
    });
  }
  submitComment(e) {
    e.preventDefault();
    e.stopPropagation();
    const params = {
      feed_id: this.props.feed_id,
      comment: this.state.userComment,
    };
    this.setState({ commentStatus: 'posting' });
    api('post feed/comment', params).then(rsp => {
      this.setState({ commentStatus: 'posted' });
      setTimeout(() => {
        this.setState({ commentStatus: 'editing' });
      }, 900);
    });
  }
  getLabel() {
    const type = this.props.channel_type;
    if (type === 'global') {
      return 'global';
    }
    if (type === 'twitter') {
      return 'twitter';
    }
    if (type === 'interest') {
      const assets = this.props.app.assets;
      if (assets.interests !== undefined) {
        const ints = assets.interests;
        let interest = 'interest';
        ints.forEach(int => {
          if (int.interest_id === this.props.channel_id) {
            interest = int.interest.toLowerCase();
          }
        });
        return interest;
      }
    }
    return '';
  }
  renderComments() {
    const { auth, feed_id: feedId } = this.props;
    return (
      <div styleName="commentShell">
        <div styleName="comments">
          {this.state.comments.map(c =>
            <DispatchComment key={`cmnt-${c.feed_comment_id}`} {...c} />,
          )}
          <div className="clear" />
        </div>
        <div styleName="commentPostShell">
          <Avatar user={auth.me.user_id.toString()} />
          <DispatchPost
            onSubmit={this.submitComment}
            onChange={this.editComment}
            status={this.state.commentStatus}
            value={this.state.userComment}
            placeholder="Leave a comment"
            key={`cmnt-form-${feedId}`}
          />
        </div>
        <div className="clear" />
      </div>
    );
  }
  render() {
    const {
      content,
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      user_id: userId,
      channel_type,
      channel_id,
      auth,
      created_at,
      num_comments: numComments,
      num_likes: numLikes,
      feed_id: feedId,
      action,
    } = this.props;
    const me = auth.me !== undefined ? auth.me : {};
    const likes = me.feed_likes;
    let likeActionStr = 'Like';
    let likeStr = '';
    let commentStr = 'Add a Comment';
    if (likes !== undefined && likes.indexOf(feedId) > -1) {
      likeActionStr = 'Liked!';
    }
    if (numLikes === 1) {
      likeStr = <span>1 Like</span>;
    } else if (numLikes > 1) {
      likeStr = <span>{`${numLikes} Likes`}</span>;
    }
    if (numComments === 1) {
      commentStr = '1 Comment';
    } else if (numComments > 1) {
      commentStr = `${numComments} Comments`;
    }
    return (
      <div styleName="item">
        <div styleName="avatar">
          <Avatar user={userId.toString()} />
        </div>
        <div styleName="contentShell">
          <Link to={`/~${userName}`} styleName="author">
            {firstName} {lastName}
          </Link>
          <div styleName="posted">
            {nicetime(moment.utc(created_at))}
          </div>
          <div styleName="content">
            {content}
          </div>
          <div styleName="controls">
            <div styleName="label">/{this.getLabel()}</div>
            <button
              styleName="likes"
              onClick={() => {
                action('like', feedId);
              }}
            >
              {likeStr}
              <div>{likeActionStr}</div>
            </button>
            <button
              onClick={this.toggleComments}
              onMouseOver={this.fetchComments}
            >
              {commentStr}
            </button>
          </div>
        </div>
        <div className="clear" />
        {this.state.commentsOpen ? this.renderComments() : ''}
        <div className="clear" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

DispatchItem.defaultProps = {
  comments: [],
  showComments: false,
};

DispatchItem.propTypes = {
  content: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  auth: types.auth,
  user_id: PropTypes.string,
  channel_type: PropTypes.string,
  channel_id: PropTypes.string,
  feed_id: PropTypes.string,
  user_name: PropTypes.string,
  created_at: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func,
  num_comments: PropTypes.string,
  num_likes: PropTypes.string,
};

export default connect(mapStateToProps)(CSSModules(DispatchItem, styles));
