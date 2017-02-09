import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import $ from 'jquery';
import Block from '../../components/Block/Block';
import Image from '../../components/Image/Image';
import Section from '../../components/Section/Section';
import auth from '../../utils/auth';
import actions from '../../actions';
import styles from './styles.css';
import types from '../../utils/types';
import AskIfAttended from '../AskIfAttended/AskIfAttended';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import ResetPass from '../../components/ResetPass/ResetPass';
import Cart from '../Cart/Cart';


export class Purchase extends Component {

  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      page: 'ask',
    };
    this.gotCard = false;
    this.animated = '';
    this.pageData = {
      ask: [(<AskIfAttended goTo={this.goTo} />), 'Let\'s Get Started!', 'green'],
      login: [(
        <Login
          title={false}
          onSuccess={() => this.goTo('cart')}
          onForgot={() => this.goTo('reset')}
          onBack={() => this.goTo('ask')}
        />), 'Login to Your Account', 'green'],
      reset: [(<ResetPass title={false} onBack={() => this.goTo('login')} />), 'Reset Your Password', 'green'],
      signup: [(
        <SignUp
          onSuccess={() => this.goTo('cart')}
          onBack={() => this.goTo('ask')}
        />), 'Step 1: Create Your Account', 'green'],
      cart: [false, 'Let\'s Do This!', 'green'],
    };
  }
  componentDidMount() {
    this.fillScreen();
    this.appropriateStart();
    this.getCard(this.props);
  }
  componentWillReceiveProps(props) {
    if (window.location.hash !== undefined) {
      let hash = window.location.hash.replace('#', '');
      hash = hash.length ? hash : 'ask';
      if (hash !== this.state.hash) {
        this.goTo(hash);
      }
    }
    this.fillScreen();
    this.appropriateStart();
    this.getCard(props);
  }
  componentDidUpdate() {
    this.fillScreen();
    this.appropriateStart();
    this.getCard(this.props);
  }
  getCard(props) {
    if (props.auth.me !== undefined && props.auth.me && !this.gotCard) {
      this.gotCard = true;
      auth.getCard();
    }
  }
  appropriateStart() {
    if (
      this.state.page === 'ask' &&
      this.props.auth.me !== undefined &&
      this.props.auth.me
    ) {
      this.setState({ page: 'cart' });
    }
  }
  purchaseSuccess() {
    auth.getMe()
    .then(() => {
      this.goTo('claim');
    });
  }
  fillScreen() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const $e = $('.fillScreen');
    $e.css('min-height', '');
    const scroll = Math.max(body.scrollHeight, html.clientHeight);
    let bonus = 0;
    if (scroll > html.clientHeight) {
      bonus = 120;
    }
    if ($e.length) {
      $e.css('min-height', `${(height - $e.offset().top) + bonus}px`);
    }
    $e.addClass('animated');
  }
  goTo(page) {
    if (page === 'claim') {
      browserHistory.replace('/claim');
    } else {
      if (page !== 'ask') {
        window.location.hash = page;
      }
      this.setState({ page });
    }
  }
  renderContent(content) {
    if (content) {
      return content;
    }
    return '';
  }
  render() {
    const page = this.pageData[this.state.page];
    if (this.props.auth.checked) {
      setTimeout(() => { this.animated = 'animated'; }, 200);
      return (
        <ReactCSSTransitionGroup
          transitionName="tweet"
          transitionAppear
          transitionEnter
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Section key="purchsection" color={page[2]} styleName="shell" className={`fillScreen ${this.animated}`}>
            <Image
              src="pattern/dot-cover.png"
              width="100%"
              height="90%"
              css={{ position: 'absolute', top: '40px', left: '-280px', zIndex: '-1' }}
              mobile={{ phone: { display: 'none' } }}
            />
            <Block align="center" textAlign="center">
              <Image src="logo.png" width="123" height="26" fit="contain" margin="-104px auto 80px" />
            </Block>
            <Block>
              <h1>{page[1]}</h1>
              {this.renderContent(page[0])}
              <Cart
                hidden={page[0]}
                key="cart-129"
                onSuccess={this.purchaseSuccess}
              />
              <div className="clear" />
            </Block>
          </Section>
        </ReactCSSTransitionGroup>
      );
    }
    return (
      <Section color="white" styleName="shell" className="fillScreen">
        <Block align="center" textAlign="center">
          <Image src="logo.png" width="123" height="26" fit="contain" margin="-104px auto 80px" />
        </Block>
      </Section>
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

Purchase.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Purchase, styles));
