import moment from 'moment';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import Link from '../Link/Link';
import Avatar from '../Avatar/Avatar';
import nicetime from '../../utils/nicetime';
import styles from './DispatchComment.css';

class DispatchComment extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      userComment: '',
      commentsOpen: false,
      commentStatus: 'editing',
    };
    this.listener = false;
  }
  render() {
    const {
      comment,
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      user_id: userId,
      created_at,
    } = this.props;
    return (
      <div styleName="item">
        <div styleName="avatar">
          <Avatar user={userId} />
        </div>
        <div styleName="contentShell">
          <Link to={`/~${userName}`} styleName="author">
            {firstName} {lastName}
          </Link>
          <div styleName="posted">
            {nicetime(moment.utc(created_at))}
          </div>
          <div styleName="content">
            {comment}
          </div>
        </div>
      </div>
    );
  }
}

DispatchComment.propTypes = {
  comment: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  user_name: PropTypes.string,
  user_id: PropTypes.string,
  created_at: PropTypes.string,
};

export default CSSModules(DispatchComment, styles);
