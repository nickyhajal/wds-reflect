import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import scrollTo from 'jquery.scrollto';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import autoBind from 'react-autobind';
import _ from 'lodash';
import api from '../../utils/api';
import auth from '../../utils/auth';
import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import is from '../../utils/is';
import Image from '../../components/Image/Image';
import Section from '../../components/Section/Section';
import Tweet from '../../components/Tweet/Tweet';
import actions from '../../actions';
import ShirtSize from '../../components/ShirtSize/ShirtSize';
import styles from './styles.css';
import types from '../../utils/types';
import Form from '../../components/Form/Form';
import FormRow from '../../components/FormRow/FormRow';
import FormWrap from '../../components/FormWrap/FormWrap';
import Answer from '../../components/Answer/Answer';
import Input from '../../components/Input/Input';
import ClaimLoading from '../../reflected/components/ClaimLoading';
import Address from '../../components/Address/Address';
import ClaimError from '../../reflected/components/ClaimError';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import InterestPicker from '../../components/InterestPicker/InterestPicker';
import Phone from '../../components/Phone/Phone';
import Username from '../../components/Username/Username';
import TwitterConnect from '../../components/TwitterConnect/TwitterConnect';
import Progress from '../../components/Progress/Progress';
import FourThings from '../../components/FourThings';

const sections = [
  'Let\'s Get Started',
  'A Bit About You',
  'The Real You',
  'Rapid Fire Q&A',
  'Aww Yeah, You Did It!',
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
            Whether this is your 1st or 10th time attending WDS, this quick walkthrough helps us plan for your arrival and provides you with a way to connect with fellow attendees.
          </p>
          <p>Important: If you’re a returning attendee, please note the questions have been updated for this year’s gathering.</p>
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
          <div>
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
            <Input id="email" type="email" placeholder="Your Email Address" required="You didn't enter your email!" />
          </FormRow>
        </FormWrap>
      ),
    },
    {
      title: 'What\'s your t-shirt size?',
      content: (
        <div>
          <div>
            <p>
              Let&apos;s make sure you look good in your WDS tee!
            </p>
          </div>
        </div>
      ),
      validate: function() {
        const { size } = this.form.state.form;
        if (size === undefined || !size || !size.length) {
          return 'Select a size!';
        }
        return 'valid';
      },
      form: (
        <FormWrap>
          <ShirtSize />
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
              share your number with any third parties.
            </p>
          </div>
        </div>
      ),
      form: (
        <FormWrap>
          <Phone />
        </FormWrap>
      ),
    },
    {
      title: 'Where do you live on planet earth?',
      format: 'col1 col2-form',
      content: (
        <div>
          <div>
            <p>
              Please provide us with your best mailing address — especially for February through October 2020.
            </p>
          </div>
        </div>
      ),
      form: (
        <Address />
      ),
    },
    {
      title: 'Where can we find you online?',
      content: (
        <div>
          <div>
            <p>
              Help other WDS Attendees connect with you by
              adding your social media accounts and website.
            </p>
            <p>
              We&apos;ll share these on your WDS profile and in the WDS App during the event.
            </p>
          </div>
        </div>
      ),
      form: (
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
      ),
    },
    {
      title: 'A Smile is Worth a Thousand Words',
      content: (
        <div>
          <div>
            <p>
              Help us brighten up the site by adding a picture of yourself
              to your WDS Profile.
            </p>
            <p>
              Oh, and it&apos;ll also help you connect with your fellow attendees.
            </p>
          </div>
        </div>
      ),
      form: (
        <div>
          <PhotoUpload />
        </div>
      ),
    },
    {
      title: 'Even an Explorer Needs a Home(page)',
      content: (
        <div>
          <div>
            <p>
              Once we&apos;re done here, you&apos;ll have
              your very own WDS Profile. What should the link be?
            </p>
          </div>
        </div>
      ),
      validate: function() {
        const { user_name } = this.form.state.form;
        if (user_name === undefined || !user_name || !user_name.length) {
          return 'Enter a Username!';
        }
        return 'valid';
      },
      form: (
        <FormWrap>
          <label>Your Profile URL</label>
          <Username />
        </FormWrap>
      ),
    },
  ],
  [
    {
      title: 'What are 4 things that could enhance or support your WDS experience?',
      content: (
        <div>
          <div>
            <p>
              We&apos;d love to know a few specific things that bring you joy or are meaningful to you (or both).
            </p>
            <p>
              Please only add things that you&apos;re comfortable sharing with others.
            </p>
          </div>
        </div>
      ),
      customForm: (
        <FourThings question_id="20" />
      ),
    },
    {
      title: 'What are you excited about these days?',
      content: (
        <div>
          <div>
            <p>
              WDS is all about sharing passions and interests!
            </p>
            <p>
              What&apos;s lighting you up lately?
            </p>
          </div>
        </div>
      ),
      customForm: (
        <Answer type="multi" question_id="2" label="What are you excited about?" />
      ),
    },
    {
      title: 'What\'s something you\'d love help with from the WDS community?',
      content: (
        <div>
          <p>
            The WDS community is full of incredibly skilled people that frequently
            support each other in business and life.
          </p>
          <p>
          What’s one thing the community can help you with?
          </p>
        </div>
      ),
      customForm: (
        <Answer type="multi" question_id="10" label="How can the community help?" />
      ),
    },
    {
      title: 'What\'s your super-power?',
      content: (
        <div>
          <p>
            We all have different abilities and strengths that allow us to
            contribute to our communities and the World in different ways.
          </p>
          <p>
            What&apos;s yours?
          </p>
        </div>
      ),
      customForm: (
        <Answer type="multi" question_id="3" label="What's your super-power?" />
      ),
    },
    {
      title: 'What is something you can offer to another WDS attendee?',
      content: (
        <div>
          <p>
            Receiving is great, but giving is better! How can you use your
            strengths to help other members of the WDS community?
          </p>
        </div>
      ),
      customForm: (
        <Answer type="multi" question_id="11" label="How can you help?" />
      ),
    },
    {
      title: 'What\'s your goal for WDS 2020?',
      content: (
        <div>
          <p>
            The first step to getting the most out of
            WDS is having a clear intention.
          </p>
          <p>
            What&apos;s your goal for our time together?
          </p>
        </div>
      ),
      customForm: (
        <Answer type="multi" question_id="4" label="What's your goal?" />
      ),
    },
    {
      title: 'Which of these are you passionate about?',
      format: 'col1',
      button: 'Continue',
      postButton: true,
      buttonStyles: { width: '300px', margin: '50px auto 20px' },
      content: (
        <div>
          <p>
            We love to know about our attendees&apos; interests to help you
            get to know other attendees you may connect with!
          </p>
        </div>
      ),
      customForm: (
        <InterestPicker />
      ),
    },
  ],
  [
    {
      title: 'What book has had the biggest impact on your life?',
      format: 'col1',
      content: (
        <div />
      ),
      customForm: (
        <Answer question_id="15" label="Your Favorite Book" />
      ),
    },
    {
      title: 'What\'s your favorite song to get pumped up?',
      format: 'col1',
      content: (
        <div />
      ),
      customForm: (
        <Answer question_id="16" label="What's your jam?" />
      ),
    },
    {
      title: 'What\'s your favorite quote?',
      format: 'col1',
      content: (
        <div />
      ),
      customForm: (
        <Answer type="multi" question_id="8" label="What quote inspires you?" />
      ),
    },
  ],
  [
    {
      title: 'Let the world you know you\'re going!',
      button: 'none',
      className: 'focused focused-tablet-center',
      content: (
        <div>
          <Tweet />
          <h2>More announcements and event information will be heading your way so keep checking your inbox. See you soon!</h2>
          <div style={{ marginBottom: '20px' }} />
          <Button to="/hub" styleName="hubButton">Take Me to the WDS Hub</Button>
          <div style={{ marginBottom: '60px' }} />
        </div>
      ),
    },
  ],
];

class Welcome extends Component {

  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
    };
    this.started = false;
  }
  componentWillMount() {
    if (!this.props.auth.me && this.props.routeParams.id !== undefined) {
      auth.loginWithHash(this.props.routeParams.id)
      .then(() => {
        this.start();
      });
    } else {
      this.start();
    }
  }
  componentDidMount() {
    this.fillScreen();
    setTimeout(() => {
      $('body').removeClass('start-transition').addClass('do-transition');
      setTimeout(() => {
        $('body').removeClass('transition-orange-to-blue');
      }, 40);
    }, 100);
  }
  componentWillReceiveProps(nextProps) {
    this.fillScreen();
  }
  componentDidUpdate() {
    this.fillScreen();
  }
  setForm(form) {
    if (form !== null) {
      this.form = form;
    }
  }
  back() {
    const currSection = this.state.section;
    const currPart = this.state.step;
    let useSection = currSection;
    let usePart = currPart - 1;

    if (usePart < 0) {
      useSection -= 1;
      usePart = parts[useSection].length - 1;
    }
    this.setState({
      step: usePart,
      section: useSection,
    });
    $('body').scrollTo(0, 200);
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
    return ((on / count) * 100) + 12;
  }
  fillScreen() {
    const body = document.body;
    const html = document.documentElement;
    const $e = $('.fillScreen');
    $e.css('min-height', '');
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const $p = $('.partShell', '.fillScreen');
    const scroll = Math.max(body.scrollHeight, html.clientHeight);
    let bonus = 200;
    if (scroll > html.clientHeight) {
      bonus = 320;
    }
    if ($e.length) {
      let useHeight = $p.offset().top + $p.height() + bonus;
      if (useHeight < height) {
        useHeight = height + bonus;
      }
      $e.css('min-height', `${height}px`);
    }
  }
  next() {
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
    $('body').scrollTo(0, 200);
    const step = `${useSection},${usePart}`;
    this.props.act.updateMe('intro', step);
    api('patch user', { intro: step, user_id: this.props.auth.me.user_id });
  }
  start() {
    if (!this.started) {
      if (this.props.auth.me.intro !== undefined && this.props.auth.me.intro.indexOf(',') > -1) {
        const bits = this.props.auth.me.intro.split(',');
        this.started = true;
        this.setState({ section: +bits[0], step: +bits[1] });
      } else if (this.props.auth.me.email) {
        this.started = true;
        this.setState({ section: 0, step: 0 });
      }
    }
  }
  save() {
    let post = this.form.getValues();
    post.user_id = this.props.auth.me.user_id;
    const current = parts[this.state.section][this.state.step];
    return new Promise((resolve, reject) => {
      if (current.validate !== undefined) {
        const validMsg = current.validate.call(this);
        if (validMsg !== 'valid') {
          reject(validMsg);
        }
      }
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
  pick() {
    return _.pick(this.props.auth.me, [
      'user_id', 'first_name', 'last_name', 'user_name', 'email', 'phone', 'address', 'address2', 'city',
      'country', 'region', 'zip', 'instagram', 'facebook', 'site', 'calling_code', 'size',
    ]);
  }
  renderHeader() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="welcomeHeader"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Progress completed={this.completed()} />
          <h2 styleName="section-head" key={`k-${this.state.section}`}>{sections[this.state.section]}</h2>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  renderPart(format) {
    const part = parts[this.state.section][this.state.step];
    const button = part.button !== undefined ? part.button : 'Save & Continue';
    const buttonStyles = part.buttonStyles !== undefined ? part.buttonStyles : {};
    const current = (this.form !== undefined && this.form.state.form !== undefined) ? this.form.state.form : {};
    const values = _.defaults(current, this.pick());
    const className = part.className !== undefined ? part.className : '';
    return (
      <ReactCSSTransitionGroup
        transitionName="welcomeContent"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div styleName="part-shell" className={`partShell ${className} ${format}`} key={`k-${this.state.section}-${this.state.step}`}>
          <div styleName="content-shell">
            <h3>{part.title}</h3>
            {part.content}
            {
              (!is.mobile() && format.indexOf('col1') < 0 && (this.state.section !== 0 || this.state.step !== 0) ? (
                <Link styleName="back" onClick={this.back} >◂ Back</Link>
              ) : '')
            }
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
          {part.customForm !== undefined ? (
            <div styleName="form-shell">
              {React.cloneElement(part.customForm, { onFinish: this.next })}
            </div>
          ) : ''}
          { part.postButton ||
            (part.form === undefined &&
            part.button !== 'none' &&
            part.customForm === undefined) ?
              (<Button style={buttonStyles} onClick={this.next}>{button}</Button>) : ''
          }
          <div className="clear" />
          {
            ((format.indexOf('col1') > -1 && (this.state.section !== 0 || this.state.step !== 0) || is.mobile()) ? (
              <Link styleName="back" onClick={this.back} >◂ Back</Link>
            ) : '')
          }
        </div>
      </ReactCSSTransitionGroup>
    );
  }
  renderWalkthrough() {
    const part = parts[this.state.section][this.state.step];
    const format = part.format !== undefined ? part.format : '2col';
    let className = 'fillScreen not-started';
    if (this.started) {
      className = 'fillScreen started';
    }
    return (
      <Section color="blue" styleName="shell" className={className}>
        <Image
          src="pattern/dot-cover.png"
          styleName="dots"
          width="100%"
          height="620px"
          css={{ position: 'absolute', top: '40px', left: '-280px', zIndex: '-1' }}
        />
        <Block align="center" textAlign="center">
          <Image src="logo2020.png" width="123" height="26" fit="contain" margin="-104px auto 80px" />
        </Block>
        {this.renderHeader(format)}
        {this.renderPart(format)}
      </Section>
    );
  }
  render() {
    if (!this.props.auth.me && !this.props.auth.error) {
      return <ClaimLoading />;
    } else if (this.props.auth.me) {
      if (this.started) {
        return this.renderWalkthrough();
      }
      return <ClaimLoading />;
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
