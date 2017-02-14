import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './InterestPicker.css';
import types from '../../utils/types';
import actions from '../../actions';


class InterestPicker extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }

  processInterests() {
    this.interests = {};
    if (
      this.props.app.assets !== undefined &&
      this.props.app.assets.interests !== undefined
    ) {
      const ints = this.props.app.assets.interests;
      if (ints !== undefined && ints.length) {
        ints.forEach((v, i) => {
          this.interests[v.interest_id] = v;
        });
      }
      return true;
    } else {
      return false;
    }
  }

  add(id) {
    this.props.act.addInterest(id);
  }
  remove(id) {
    this.props.act.removeInterest(id);
  }
  renderInterests(ints, title, styleName, onClick) {
    if (ints !== undefined && ints.length) {
      return (
        <div styleName={styleName}>
          <h3>{title}</h3>
          {
            ints.map((v, i) => {
              const int = this.interests[v];
              return (
                <button key={`interestpicker-${styleName}-${i}`} onClick={() => onClick(v)}>{int.interest}</button>
              );
            })
          }
          <div className="clear" />
        </div>
      );
    }
    return '';
  }
  render() {
    if (this.processInterests()) {
      const mine = this.props.auth.me.interests;
      const all = this.props.app.assets.interests;
      const filtered = [];
      all.forEach((v, i) => {
        if (mine.indexOf(v.interest_id) === -1) {
          filtered.push(v.interest_id);
        }
      });
      return (
        <div styleName="interests">
          {this.renderInterests(filtered, 'Interests', 'all', this.add)}
          {this.renderInterests(mine, 'Your Interests', 'mine', this.remove)}
        </div>
      );
    } else {
      return '';
    }
  }
}

InterestPicker.propTypes = {
  auth: types.auth,
  app: types.app,
};

InterestPicker.displayName = 'InterestPicker';

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(InterestPicker, styles));
