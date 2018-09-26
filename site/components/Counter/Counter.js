import React, { PropTypes } from 'react';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import styles from './Counter.css';
import Image from '../Image/Image';

class Counter extends React.Component {
  static niceZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }
  componentDidMount() {
    this.update();
  }
  update() {
    if (parseInt(this.props.interval, 10)) {
      this.forceUpdate();
      setTimeout(() => {
        this.update();
      }, parseInt(this.props.interval, 10) * 1000);
    }
  }
  render() {
    const { format, to } = this.props;
    const now = moment().format('X');
    let countTo = moment();
    if (to === 'ticket-sale') {
      countTo = moment('2018-10-08 23:00:00');
    } else if (to === 'ticket-end') {
      countTo = moment('2018-11-21 23:00:00');
    } else if (to !== undefined) {
      countTo = moment(to);
    }
    const diff = countTo.format('X') - now;
    const dval = Math.floor(diff / 86400);
    const hval = Math.floor((diff % 86400) / 3600);
    const mval = Math.floor(((diff % 86400) % 3600) / 60);
    const sval = Math.floor(((diff % 86400) % 3600) % 60);
    const days = dval === 1 ? 'Day!' : 'Days';
    const niceZero = Counter.niceZero;
    if (format === 'calendar') {
      return (
        <div className="countdown-calendar" styleName="cal-shell">
          <Image src="art/calendar.png" width="223px" height="227px" />
          <div styleName="content">
            <div styleName="number">
              {dval}
            </div>
            <div styleName="label">
              {days}
            </div>
          </div>
        </div>
      );
    }
    if (format === 'text') {
      return (<span className="countdown-text" styleName="formatText">
        <span styleName="content">
          {niceZero(hval)}:{niceZero(mval)}:{niceZero(sval)}
        </span>
      </span>);
    }
    return '';
  }
}

Counter.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  format: PropTypes.string,
  interval: PropTypes.string,
};

export default CSSModules(Counter, styles);
