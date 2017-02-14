import React, { PropTypes } from 'react';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import styles from './Counter.css';
import Image from '../Image/Image';

const Counter = ({ format, to }) => {
  const now = moment().format('X');
  let countTo = moment();
  if (to === 'ticket-sale') {
    countTo = moment('2017-02-15 23:00:00');
  } else if (to !== undefined) {
    countTo = moment(to);
  }
  const diff = countTo.format('X') - now;
  if (format === 'calendar') {
    const value = Math.floor(diff / 86400);
    const days = value === 1 ? 'Day!' : 'Days';
    return (
      <div className="countdown-calendar" styleName="cal-shell">
        <Image src="art/calendar.png" width="223px" height="227px" />
        <div styleName="content">
          <div styleName="number">
            {value}
          </div>
          <div styleName="label">
            {days}
          </div>
        </div>
      </div>
    );
  }
};

Counter.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  format: PropTypes.string,
};

export default CSSModules(Counter, styles);
