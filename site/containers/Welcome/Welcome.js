import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import CSSModules from 'react-css-modules';
import $ from 'jQuery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import autoBind from 'react-autobind';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import api from '../../utils/api';
import auth from '../../utils/auth';
import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Section from '../../components/Section/Section';
import actions from '../../actions';
import styles from './styles.css';
import types from '../../utils/types';
import Form from '../../components/Form/Form';
import FormRow from '../../components/FormRow/FormRow';
import FormWrap from '../../components/FormWrap/FormWrap';
import Input from '../../components/Input/Input';
import ClaimLoading from '../../reflected/components/ClaimLoading';
import Address from '../../components/Address/Address';
import ClaimError from '../../reflected/components/ClaimError';

const sections = [
  'Let\'s Get Started',
  'A Bit About You',
  'The Real You',
  'Rapid Fire',
];
const parts = [
  [
    {
      title: 'WDS Starts Here',
      button: 'Let\'s Go!',
      className: 'focused',
      content: (
        <div>
          <p>
            This quick walkthrough will help you get your WDS account
            setup to so you can begin connecting with your fellow
            attendees and to help us serve you best!
          </p>
          <p>
            Ready?
          </p>
        </div>
      ),
    },
  ],
  [
    {
      title: 'The Basics',
      content: (
        <div>
          <div styleName="sublabel">
            <p>Let&apos;s start things off easy!</p>
            <p>
              Please double check that we have your real name
              (we&apos;ll compare it with your photo ID to check you into WDS)
              and e-mail address accurate!
            </p>
          </div>
        </div>
      ),
      form: (
        <FormWrap>
          <FormRow autosize="true">
            <label>Your Name</label>
            <Input id="first_name" placeholder="First Name" required="You didn't enter your first name!" />
            <Input id="last_name" placeholder="Last Name" required="You didn't enter your last name!" />
          </FormRow>
          <FormRow autosize="true">
            <label>Your Email Address</label>
            <Input id="email" placeholder="Your Email Address" required="You didn't enter your email!" />
          </FormRow>
        </FormWrap>
      ),
    },
    {
      title: 'Text You Maybe?',
      content: (
        <div>
          <div>
            <p>
              We may need to contact you during WDS, so please provide your
              mobile phone number.
            </p>
            <p>
              Of course, we will only contact you if necessary and will never
              share your number with any 3rd parties.
            </p>
          </div>
        </div>
      ),
      form: (
        <FormWrap>
          <FormRow autosize="true">
            <label>Your Phone Number</label>
            <Input id="phone" placeholder="Your Phone Number" required="You didn't enter your phone number!" />
          </FormRow>
        </FormWrap>
      ),
    },
    {
      title: 'We like to send things!',
      content: (
        <div>
          <div>
            <p>
              Please provide us with your best mailing address so we can send
              you the ocassional surprise. :)
            </p>
          </div>
        </div>
      ),
      form: (
        <Address />
      ),
    },
    {
      title: 'Where can we find you on the web?',
      content: (
        <div>
          <div>
            <p>
              Help other WDS Attendees connect with you by
              adding your social media accounts and website.
            </p>
            <p>
              We'll share these on your WDS profile and in the WDS App during the event.
            </p>
          </div>
        </div>
      ),
      form: (
        <FormWrap>
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
      ),
    },
  ],
  [
  ],
  [
  ],
];

class Welcome extends Component {

  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
      step: 3,
      section: 1,
    };
  }
  componentWillMount() {
    if (!this.props.auth.me && this.props.routeParams.id !== undefined) {
      auth.loginWithHash(this.props.routeParams.id);
    }
  }
  componentDidMount() {
    const $e = $('.fillScreen');
    if ($e.length) {
      $e.css('height', `${$(window).outerHeight() - $e.offset().top}px`);
    }
  }
  componentWillReceiveProps(nextProps) {
    this.fillScreen();
  }
  componentDidUpdate(nextProps) {
    this.fillScreen();
  }
  fillScreen() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    const scroll = Math.max( body.scrollHeight, html.clientHeight);
    let bonus = 0;
    if (scroll > html.clientHeight) {
      bonus = 120;
    }
    const $e = $('.fillScreen');
    if ($e.length) {
      $e.css('min-height', `${height - $e.offset().top + bonus}px`);
    }
  }
  completed() {
    let count = 0;
    let on = 0;
    sections.forEach((s, sinx) => {
      parts[sinx].forEach((p, pinx) => {
        if (this.state.section === sinx && this.state.step === pinx) {
          on = count;
        }
        count += 1;
      });
    });
    return ((on / count) * 100) + 10;
  }
  next() {
    console.log(">> NEXT");
    const currSection = this.state.section;
    const currPart = this.state.step;
    let useSection = currSection;
    let usePart = currPart + 1;

    if (parts[useSection][usePart] === undefined) {
      useSection += 1;
      usePart = 0;
    }
    if (parts[useSection] === undefined) {
      this.state.finished = true;
    }
    if (this.form !== undefined) {
      this.form.reset();
    }
    this.setState({
      step: usePart,
      section: useSection,
    });
  }
  setForm(form) {
    if (form !== null) {
      this.form = form;
    }
  }
  save() {
    return new Promise((resolve, reject) => {
      const post = _.clone(this.form.state.form);
      post.user_id = this.props.auth.me.user_id;
      api('patch user', post)
      .then((rsp) => {
        resolve(rsp);
      })
      .catch(reject);
    });
  }
  renderHeader() {
    const w = 671 - ((671 - 13) * (this.completed() / 100));
    return (
      <div>
        <div styleName="progress">
          <div styleName="progress-frame" />
          <div styleName="progress-fill" />
          <div styleName="progress-bar" style={{ width: `${w}px` }} />
        </div>
        <ReactCSSTransitionGroup
          transitionName="welcomeHeader"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <h2 styleName="section-head" key={`k-${this.state.section}`}>{sections[this.state.section]}</h2>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  renderPart() {
    const part = parts[this.state.section][this.state.step];
    const button = part.button !== undefined ? part.button : 'Save & Continue';
    const values = _.pick(this.props.auth.me, [
      'first_name', 'last_name', 'email', 'phone', 'address', 'address2', 'city',
      'country', 'region', 'zip', 'instagram', 'facebook', 'site'
    ]);
    return (
      <ReactCSSTransitionGroup
        transitionName="welcomeContent"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div styleName="part-shell" className={part.className} key={`k-${this.state.section}-${this.state.step}`}>
            <div styleName="content-shell">
              <h3>{part.title}</h3>
              {part.content}
            </div>
          {part.form !== undefined ? (
              <div styleName="form-shell">
                <Form
                  ref={this.setForm}
                  values={values}
                  key={`kf-${this.state.section}-${this.state.step}`}
                  buttonStart={button}
                  buttonStyle="orange"
                  onSubmit={this.save}
                  onSuccess={this.next}
                  buttonProgress="Saving..."
                  buttonSuccess="Saved!"
                >
                  {part.form}
                </Form>
              </div>
          ) : ''}
          {part.form === undefined ? (<Button onClick={this.next}>{button}</Button>) : ''}
          <div className="clear" />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
  renderWalkthrough() {
    const section = sections[this.state.sections];
    const part = parts[this.state.section][this.state.step];
    return (
      <Section color="blue" styleName="shell" className="fillScreen">
        <Image
          src="pattern/dot-cover.png"
          width="1860px"
          height="90%"
          css={{ position: 'absolute', top: '40px', left: '-280px', zIndex: '-1' }}
        />
        <Block align="center" textAlign="center">
          <Image src="logo.png" width="123" height="26" fit="contain" margin="-104px auto 80px" />
        </Block>
        {this.renderHeader()}
        {this.renderPart()}
      </Section>
    );
  }
  render() {
    if (!this.props.auth.me && !this.props.auth.error) {
      return <ClaimLoading />;
    } else if (this.props.auth.me) {
      return this.renderWalkthrough();
    }
    return <ClaimError />;
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

Welcome.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Welcome, styles));
