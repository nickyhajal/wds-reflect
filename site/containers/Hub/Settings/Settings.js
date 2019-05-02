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
import Button from '../../../components/Button/Button';
import Cart from '../../Cart/Cart';
import UpdateCard from '../../UpdateCard/UpdateCard';

// import Auth from '~/containers/Auth';
// import Dashboard from '~/containers/Dashboard';

class Settings extends Component {
  static scrollTo() {}
  static subNav = [
    ['The Hub', 'hub'],
    ['Communities', 'communities'],
    ['Updates', 'updates'],
    ['Your Schedule', 'your-schedule'],
    ['Events', 'events'],
  ];
  constructor(props) {
    super(props);
    this.qupdates = [];
    this.preloads = [];
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      dispatch: {},
      qupdates: [],
      answerSaveStatus: 'ready',
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
          .then(rsp => {
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
  updateQuestion(q) {
    let found = false;
    const qupdates = this.qupdates.reduce((out, curr) => {
      if (q.answer_id === curr.answer_id) {
        curr.answer = q.answer;
        found = true;
      }
      out.push(curr);
      return out;
    }, [])
    if (!found) qupdates.push(q);
    this.qupdates = qupdates;
  }
  async saveQuestions(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.state.answerSaveStatus === 'ready') {
      this.setState({ answerSaveStatus: 'saving' });
      await Promise.all(this.qupdates.map((answer) => this.saveAnAnswer(answer)));
      this.qupdates = [];
      setTimeout(() => {
        this.setState({ answerSaveStatus: 'ready' });
      }, 1000);
    }
  }
  async saveAnAnswer(answer) {
    await api('patch user', {
      user_id: this.props.auth.me.user_id,
      answers: JSON.stringify([answer]),
    });
  }
  pick() {
    return _.pick(this.props.auth.me, [
      'user_id',
      'first_name',
      'last_name',
      'user_name',
      'email',
      'phone',
      'address',
      'address2',
      'city',
      'country',
      'region',
      'zip',
      'instagram',
      'facebook',
      'site',
      'calling_code',
      'size',
    ]);
  }
  render() {
    const { answerSaveStatus } = this.state;
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
        <Section
          headerSize="thin"
          headerClip="br:0%,-10%;"
          headerImage="hero/green.jpg"
          color="canvas"
        >
          <Block cols="8" background="transparent" styleName="contentShell">
            <h2 style={headcss}>Your Settings</h2>
            <Block width="100%" background="white" type="padded">
              <Tabs
                width="1000"
                contentWidth="1000"
                css={{ margin: '-18px -50px 50px' }}
                color="white"
                style="simple"
                tabCss={{ padding: '20px 0' }}
              >
                <Tab
                  title="The Basics"
                  clip=""
                  layout="imageLeft"
                >
                  <Form {...formProps}>
                    <FormRow autosize="true">
                      <label>Your Name</label>
                      <Input
                        id="first_name"
                        placeholder="First Name"
                        required="You didn't enter your first name!"
                      />
                      <Input
                        id="last_name"
                        placeholder="Last Name"
                        required="You didn't enter your last name!"
                      />
                    </FormRow>
                    <FormRow autosize="true">
                      <label>Your Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email Address"
                        required="You didn't enter your email!"
                      />
                    </FormRow>
                    <FormWrap>
                      <ShirtSize />
                    </FormWrap>
                    <FormWrap>
                      <Phone />
                    </FormWrap>
                  </Form>
                </Tab>
                <Tab title="Location" layout="imageLeft" clip="">
                  <Block cols="4">
                    <Form {...formProps}>
                      <Address />
                    </Form>
                  </Block>
                </Tab>
                <Tab title="Connect" layout="imageLeft" clip="">
                  <Form {...formProps}>
                    <FormWrap>
                      <FormRow autosize="true">
                        <label>Twitter Account</label>
                        <TwitterConnect />
                      </FormRow>
                      <FormRow autosize="true">
                        <label>Facebook Username</label>
                        <Input
                          id="facebook"
                          placeholder="Your Facebook Username"
                          pretext="fb.com/"
                        />
                      </FormRow>
                      <FormRow autosize="true">
                        <label>Instagram Username</label>
                        <Input
                          id="instagram"
                          placeholder="Your Instagram Username"
                          pretext="ig.com/"
                        />
                      </FormRow>
                      <FormRow autosize="true">
                        <label>Your Website</label>
                        <label styleName="sublabel">
                          Just one site that represents your web presence best,
                          please
                        </label>
                        <Input
                          id="site"
                          placeholder="Your Website"
                          pretext="http://"
                        />
                      </FormRow>
                    </FormWrap>
                  </Form>
                </Tab>
                <Tab title="Avatar"  clip="">
                  <h4>Update Your Avatar Below!</h4>
                  <PhotoUpload />
                </Tab>
                <Tab title="Interests"  clip="">
                  <InterestPicker />
                </Tab>
                <Tab
                  title="About You"
                  layout="imageLeft"
                  clip=""
                >
                  <form style={{ width: '100%' }} onSubmit={this.saveQuestions}>
                    <div styleName="answerShell">
                      <Answer
                        type="multi"
                        question_id="2"
                        label="What are you excited about?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Answer
                        type="multi"
                        question_id="3"
                        label="What's your superpower?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Answer
                        type="multi"
                        question_id="4"
                        label="What is your goal for WDS 2019?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Answer
                        type="multi"
                        question_id="10"
                        label="What is something you'd love help with from the WDS Community?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Answer
                        type="multi"
                        question_id="11"
                        label="What is something you can offer to another WDS Attendee?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Answer
                        type="multi"
                        question_id="14"
                        label="What's one project or goal you're working on now?"
                        showButton={false}
                        onChange={this.updateQuestion}
                      />
                      <Button style={{ width: '240px', margin: '0 auto' }}>
                        {answerSaveStatus === 'ready' ? 'Save Answers' : answerSaveStatus === 'success' ? 'Saved!' : 'Saving...'}
                      </Button>
                    </div>
                  </form>
                </Tab>
                <Tab title="Q&A"  layout="imageLeft" clip="">
                  <form style={{ width: '100%' }} onSubmit={this.saveQuestions}>
                    <div styleName="answerShell">
                      <Answer
                        type="text"
                        question_id="8"
                        label="What's your favorite quote?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Answer
                        type="text"
                        question_id="16"
                        label="What's your favorite song to get pumped up?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Answer
                        type="text"
                        question_id="17"
                        label="What's your favorite treat to celebrate a job well-done?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Answer
                        type="text"
                        question_id="18"
                        label="What's your favorite beverage to kick back and relax?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Answer
                        type="text"
                        question_id="15"
                        label="What book has had the biggest impact on your life?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Answer
                        type="text"
                        question_id="19"
                        label="What's your favorite way to contribute to your community?"
                        showButton={false}
                        onChange={this.updateQuestion}
                        format="singleline"
                      />
                      <Button style={{ width: '240px', margin: '0 auto' }}>
                        {answerSaveStatus === 'ready' ? 'Save Answers' : answerSaveStatus === 'success' ? 'Saved!' : 'Saving...'}
                      </Button>
                    </div>
                  </form>
                </Tab>
                <Tab title="Billing"  layout="imageLeft" clip="">
                  <UpdateCard />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Settings, styles));
