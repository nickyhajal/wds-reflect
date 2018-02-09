import React, { PropTypes } from 'react';
import { get, isNaN } from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Block from '../components/Block/Block';
import types from '../utils/types';
import actions from '../actions';

class BlockWithLiveLabel extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }
  render() {
    let label = '';
    const max = get(this.props.app.settings, `${this.props.path}_max`);
    const count = get(this.props.app.settings, `${this.props.path}_sales`);
    const left = max - count;
    if (!isNaN(left)) {
      label = left === 0 ? 'Sold out!' : `${left} left!`;
    }
    return (
      <Block label={label} {...this.props}>{this.props.children}</Block>
    );
  }
}

BlockWithLiveLabel.defaultProps = {
  sale: false,
};
BlockWithLiveLabel.propTypes = {
  app: types.app,
  path: PropTypes.string,
  children: types.children,
};

BlockWithLiveLabel.displayName = 'BlockWithLiveLabel';

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockWithLiveLabel);
