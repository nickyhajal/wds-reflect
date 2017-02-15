import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './TicketCounter.css';
import types from '../../utils/types';
import actions from '../../actions';
import Progress from '../Progress/Progress';


class TicketCounter extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }
  isLive(item) {
    console.log(this.sale.show);
    return this.sale.show[item] !== undefined && this.sale.show[item];
  }
  renderProgress() {
    const pcnt = (this.sale.sold / this.sale.max) * 100;
    return (
      <Progress completed={pcnt} minimum="17" format="short" />
    );
  }
  renderCountUp() {
    const nums = (''+this.sale.sold).split('');
    const elms = nums.map((num, i) => (
      <div key={`countupnum-${i}`}>{num}</div>
    ));
    return (
      <div styleName="countup">
        <div styleName="numbers">
          {elms}
        </div>
        <h3>incredible people already attending WDS 2017</h3>
        <h4>Will you be one of them?</h4>
      </div>
    );
  }
  renderTimer() {
    return '';
  }
  renderMessages() {
    const messages = [];
    if (this.isLive('numbers')) {
      messages.push((
        <div styleName="remaining" key="remaining">
          <span>{(this.sale.max - this.sale.sold)}</span>
          <div>Tickets Remaining</div>
        </div>
      ));
    } else if (this.isLive('messages')) {
      Object.keys(this.sale.messages).forEach((key) => {
        const msg = this.sale.messages[key];
        messages.push(
          <div styleName="genericMsg" className={`msg-${key}`} key={key}>
            {msg}
          </div>
        );
      });
    }
    return (
      <div styleName="message">
        {_.shuffle(messages)[0]}
      </div>
    );
  }
  render() {
    if (this.props.app.settings !== undefined &&
        this.props.app.settings[this.props.sale] !== undefined
    ) {
      this.sale = this.props.app.settings[this.props.sale];
      return (
        <div>
          {this.isLive('countup') ? this.renderCountUp() : ''}
          {this.isLive('progress') ? this.renderProgress() : ''}
          {this.isLive('timer') ? this.renderTimer() : ''}
          {this.isLive('messages') || this.isLive('numbers') ? this.renderMessages() : ''}
        </div>
      );
    }
    return '';
  }
}

TicketCounter.propTypes = {
  app: types.app,
  sale: PropTypes.string,
};

TicketCounter.displayName = 'TicketCounter';

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(TicketCounter, styles));
