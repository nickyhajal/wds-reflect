import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import actions from '../../../actions';
import types from '../../../utils/types';
import styles from './Settings.css';
import angler from '../../../utils/angler';
import Tabs from '../../../components/Tabs/Tabs';
import Tab from '../../../components/Tab/Tab';
import Form from '../../../components/Form/Form';
import Phone from '../../../components/Phone/Phone';
import ShirtSize from '../../../components/ShirtSize/ShirtSize';
import PhotoUpload from '../../../components/PhotoUpload/PhotoUpload';
import Section from '../../../components/Section/Section';
import api from '../../../utils/api';
import TwitterConnect from '../../../components/TwitterConnect/TwitterConnect';
import FormRow from '../../../components/FormRow/FormRow';
import FormWrap from '../../../components/FormWrap/FormWrap';
import Input from '../../../components/Input/Input';
import Address from '../../../components/Address/Address';
import Answer from '../../../components/Answer/Answer';
import Block from '../../../components/Block/Block';
import InterestPicker from '../../../components/InterestPicker/InterestPicker';
// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

class Settings extends Component {

  static scrollTo() {
  }
  static subNav = [
    ['The Hub', 'hub'],
    ['Communities', 'communities'],
    ['Updates', 'updates'],
    ['Your Schedule', 'your-schedule'],
    ['Events', 'events'],
  ];
  constructor(props) {
    super(props);
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      dispatch: {},
    };
  }
  save(form) {
    const post = form.getValues();
    post.user_id = this.props.auth.me.user_id;
    return new Promise((resolve, reject) => {
      if (this.props.auth.usernameStatus === 'not-available') {
        reject('That URL is taken');
      } else {
        api('patch user', post)
        .then((rsp) => {
          resolve(rsp);
        })
        .catch(reject);
      }
    });
  }
  success(rsp, form) {
    setTimeout(() => {
      form.reset();
    }, 3000);
  }
  pick() {
    return _.pick(this.props.auth.me, [
      'user_id', 'first_name', 'last_name', 'user_name', 'email', 'phone', 'address', 'address2', 'city',
      'country', 'region', 'zip', 'instagram', 'facebook', 'site', 'calling_code', 'size',
    ]);
  }
  render() {
    const headcss = {};
    const clip = angler('tr:0,18%');
    const formProps = {
      values: this.pick(),
      buttonStart: 'Update',
      buttonProgress: 'Updating...',
      onSubmit: this.save,
      buttonSuccess: 'Updated!',
    };
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    return (
      <div styleName="shell">
        <Section headerSize="thin" headerClip="br:0%,-10%;" headerImage="hero/green.jpg" color="canvas">
          <Block cols="8" background="transparent" styleName="contentShell">
            <h2 style={headcss} >Your Settings</h2>
            <Block width="100%" background="white" type="padded">
            <Tabs width="1000" contentWidth="1000" css={{ margin: '-50px' }} color="white" tabCss={{ padding: '16px 0' }}>
              <Tab title="The Basics" color="orange" layout="imageLeft" clip="">
                  <Form {...formProps} >
                    <FormRow autosize="true">
                      <label>Your Name</label>
                      <Input id="first_name" placeholder="First Name" required="You didn't enter your first name!" />
                      <Input id="last_name" placeholder="Last Name" required="You didn't enter your last name!" />
                    </FormRow>
                    <FormRow autosize="true">
                      <label>Your Email Address</label>
                      <Input id="email" type="email" placeholder="Your Email Address" required="You didn't enter your email!" />
                    </FormRow>
                    <FormWrap>
                      <ShirtSize />
                    </FormWrap>
                    <FormWrap>
                      <Phone />
                    </FormWrap>
                  </Form>
              </Tab>
              <Tab title="Location" color="green" layout="imageLeft" clip="">
                <Block cols="4">
                  <Form {...formProps} >
                     <Address />
                  </Form>
                </Block>
              </Tab>
              <Tab title="Connect" color="sea" layout="imageLeft" clip="">
                <Form {...formProps} >
                  <FormWrap>
                    <FormRow autosize="true">
                      <label>Twitter Account</label>
                      <TwitterConnect />
                    </FormRow>
                    <FormRow autosize="true">
                      <label>Facebook Username</label>
                      <Input id="facebook" placeholder="Your Facebook Username" pretext="fb.com/" />
                    </FormRow>
                    <FormRow autosize="true">
                      <label>Instagram Username</label>
                      <Input id="instagram" placeholder="Your Instagram Username" pretext="ig.com/" />
                    </FormRow>
                    <FormRow autosize="true">
                      <label>Your Website</label>
                      <label styleName="sublabel">Just one site that represents your web presence best, please</label>
                      <Input id="site" placeholder="Your Website" pretext="http://" />
                    </FormRow>
                  </FormWrap>
                </Form>
              </Tab>
              <Tab title="Avatar" color="green" clip="">
                <h4>Update Your Avatar Below!</h4>
                <PhotoUpload />
              </Tab>
              <Tab title="Interests" color="sea" clip="">
                <InterestPicker />
              </Tab>
              <Tab title="The Real You" color="orange" layout="imageLeft" clip="">
                <Answer type="multi" question_id="2" label="What are you excited about?" showButton={false} />
              </Tab>
            </Tabs>
            </Block>
          </Block>
        </Section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

Settings.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Settings, styles));
