import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import styles from './DispatchPost.css';


const DispatchPost = ({
  value, onChange, status, onFocus, onBlur, onSubmit, placeholder,
  buttonStart, buttonProgress, buttonSuccess,
}) => {
  const editing = (status === 'editing' || status === 'posting');
  let btnText = buttonStart;
  if (status === 'posting') {
    btnText = buttonProgress;
  } else if (status === 'posted') {
    btnText = buttonSuccess;
  }
  return (
    <form onSubmit={onSubmit} action="#" method="post">
      <textarea
        key="postinp"
        onFocus={onFocus}
        className={status}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        styleName="inp"
        value={value}
      />
      {editing ? (<button styleName="btn">{btnText}</button>) : ''}
      <div className="clear" />
    </form>
  );
};

DispatchPost.defaultProps = {
  placeholder: 'Share a message with your fellow WDS attendees',
  buttonStart: 'Post',
  buttonProgress: 'Posting...',
  buttonSuccess: 'Posted!',
};
DispatchPost.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  buttonStart: PropTypes.string,
  buttonProgress: PropTypes.string,
  buttonSuccess: PropTypes.string,
  status: PropTypes.string,
};

export default CSSModules(DispatchPost, styles);
