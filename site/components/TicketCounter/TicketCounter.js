import React, { PropTypes } from 'react';
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
    return this.sale.show[item] !== undefined && this.sale.show[item];
  }
  renderProgress() {
    const pcnt = (this.sale.sales / this.sale.max) * 100;
    return (
      <Progress completed={pcnt} minimum="17" format="short" />
    );
  }
  renderTimer() {
    return '';
  }
  renderMessages() {
    return '';
  }
  render() {
    if (this.props.app.settings !== undefined &&
        this.props.app.settings[this.props.sale] !== undefined
    ) {
      this.sale = this.props.app.settings[this.props.sale];
      return (
        <div>
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
