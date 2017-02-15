/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import actions from '../../actions';
import Section from '../../components/Section/Section';
import Block from '../../components/Block/Block';
import styles from './styles.css';
import Button from '../../components/Button/Button';
import auth from '../../utils/auth';

class ResetPage extends React.Component {

  constructor() {
    super();
    this.state = {
      password: '',
    };
    autoBind(Object.getPrototypeOf(this));
  }
  componentDidMount() {
    document.title = "Reset Your Password";
  }

  reset(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    const hash = this.props.routeParams.id;
    auth.reset(null, this.state.password, hash);
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  render() {
    let btnStr = 'Update Password';
    if (this.props.auth.status === 'sending') {
      btnStr = 'Updating...';
    } else if (this.props.auth.error) {
      btnStr = this.props.auth.error;
    } else if (this.props.auth.status === 'success') {
      btnStr = 'Updated! You can now login.';
    }
    return (
      <Section
        color="sea"
        css={{ marginBottom: '-2px' }}
      >
        <Block width="768px" bleed={true} type="padded" background="white" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
          <h2>Let's Reset Your Password!</h2>
          <p>Enter your new password below. Pick something you'll remember!</p>
          <form onSubmit={this.reset}>
            <div className="form-row">
              <div className="form-box">
                <label>Password</label>
                <input
                  type="password"
                  name="password" onChange={this.change}
                  placeholder="Your new password"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-box">
                <Button styleName="button">{btnStr}</Button>
              </div>
            </div>
            <div className="clear"></div>
          </form>
        </Block>
      </Section>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(ResetPage, styles));
