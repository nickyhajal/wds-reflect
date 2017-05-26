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
    this.state = {
      selected: [],
    };
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

  add = id => {
    if (this.props.format === 'user') {
      this.props.act.addInterest(id);
      this.props.onChange(this.props.auth.me.interests);
    } else {
      this.setState({ selected: [...this.state.selected, id] });
      this.props.onChange(this.state.selected);
    }
  };
  remove = id => {
    if (this.props.format === 'user') {
      this.props.act.removeInterest(id);
      if (this.props.onChange !== undefined) {
        this.props.onChange(this.props.auth.me.interests);
      }
    } else {
      this.setState({ selected: _.difference(this.state.selected, [id]) });
      this.props.onChange(this.state.selected);
    }
  };
  renderInterests(ints, title, styleName, onClick) {
    if (ints !== undefined && ints.length) {
      return (
        <div styleName={styleName}>
          <h3>{title}</h3>
          {ints.map((v, i) => {
            const int = this.interests[v];
            return (
              <button
                key={`interestpicker-${styleName}-${i}`}
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  onClick(v);
                }}
              >
                {int.interest}
              </button>
            );
          })}
          <div className="clear" />
        </div>
      );
    }
    return '';
  }
  render() {
    if (this.processInterests()) {
      let selected = this.state.selected;
      let selectedTitle = 'Selected Interests';
      if (this.props.format === 'user') {
        selected = this.props.auth.me.interests;
        selectedTitle = 'Your Interests';
      }
      const all = this.props.app.assets.interests;
      const filtered = [];
      all.forEach((v, i) => {
        if (selected.indexOf(v.interest_id) === -1) {
          filtered.push(v.interest_id);
        }
      });
      return (
        <div styleName="interests" className={this.props.className}>
          {this.props.name !== undefined
            ? <input
                type="hidden"
                value={selected.join(',')}
                name={this.props.name}
              />
            : ''}
          {this.renderInterests(filtered, 'All Interests', 'all', this.add)}
          {this.renderInterests(selected, selectedTitle, 'mine', this.remove)}
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
  format: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};
InterestPicker.defaultProps = {
  format: 'user',
  className: '',
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

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(InterestPicker, styles)
);
