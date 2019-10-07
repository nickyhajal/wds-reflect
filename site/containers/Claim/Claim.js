import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import _ from 'lodash';
import $ from 'jquery';
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
import Input from '../../components/Input/Input';
import ClaimLoading from '../../reflected/components/ClaimLoading';
import ClaimError from '../../reflected/components/ClaimError';

export class App extends Component {
  static scrollTo() {}
  constructor(props) {
    super(props);
    this.tickets = { claimed: [], unclaimed: [], countStr: '', count: 0 };
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
      claimCount: 0,
      wantsTicket: true,
      justClaimedMe: false,
    };
  }
  componentWillMount() {
    if (!this.props.auth.me && this.props.routeParams.id !== undefined) {
      auth.loginWithHash(this.props.routeParams.id);
    }
  }
  componentDidMount() {
    this.fillScreen();
    setTimeout(() => {
      $('body').removeClass('start-transition').addClass('do-transition');
      setTimeout(() => {
        $('body').removeClass('transition-green-to-orange');
      }, 5);
    }, 5);
  }
  componentWillReceiveProps() {
    this.fillScreen();
  }
  componentDidUpdate() {
    this.fillScreen();
  }
  fillScreen() {
    const body = document.body;
    const html = document.documentElement;
    const $e = $('.fillScreen');
    $e.css('min-height', '');
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const scroll = Math.max(body.scrollHeight, html.clientHeight);
    let bonus = 0;
    if (scroll > html.clientHeight) {
      bonus = 120;
    }
    if ($e.length) {
      $e.css('min-height', `${height - $e.offset().top + bonus}px`);
    }
  }
  showGiveTicket() {
    this.setState({ wantsTicket: false });
  }
  invite() {
    this.props.act.openModal('tellAFriend');
  }
  claimTree() {
    const c = {};
    const tickets = this.tickets;
    const total = tickets.claimed.length + tickets.unclaimed.length;
    if (tickets.claimed.length || tickets.unclaimed.length) {
      if (tickets.unclaimed.length) {
        // Claiming additional tickets
        if (this.meClaimed()) {
          let justClaimedMe = '';
          if (this.state.justClaimedMe) {
            justClaimedMe = 'we connected that ticket to your account! Now, ';
          }
          let h2 = `Great, ${justClaimedMe}let's assign your other ticket!`;
          if (tickets.unclaimed.length > 1) {
            c.title = 'Who else should get these tickets?';
            h2 = `Great, ${justClaimedMe}let's assign your other tickets!`;
          } else {
            c.title = 'Who else should get this ticket?';
          }
          c.action = (
            <div styleName="action" style={{ marginTop: '-40px' }}>
              <h2>
                {h2}
              </h2>
              {this.renderTicketSetup()}
            </div>
          );
        } else if (!this.state.wantsTicket) {
          let h2 = "Let's assign your ticket!";
          if (tickets.unclaimed.length > 1) {
            c.title = 'Who should get these tickets?';
            h2 = "Let's assign your tickets!";
          } else {
            c.title = 'Who should get this ticket?';
          }
          c.action = (
            <div styleName="action" style={{ marginTop: '-40px' }}>
              <h2>
                {h2}
              </h2>
              {this.renderTicketSetup()}
            </div>
          );

          // Claim your ticket
        } else {
          // If you only have one ticket
          if (tickets.unclaimed.length === 1) {
            const meClaimMsg =
              this.state.status === 'ready'
                ? "Yep! That ticket's for me!"
                : 'Claiming your ticket...';
            c.action = (
              <Block styleName="action" background="spice">
                <h2>Will you be at WDS?</h2>
                <Button onClick={this.claimForMe}>
                  {meClaimMsg}
                </Button>
                <Button onClick={this.showGiveTicket}>
                  Nope, I want to give this ticket to someone else.
                </Button>
              </Block>
            );
            // If you have more than one ticket
          } else {
            const meClaimMsg =
              this.state.status === 'ready'
                ? 'Yep! Claim one for me!'
                : 'Claiming your ticket...';
            const all = total === 2 ? 'both' : 'all';
            c.action = (
              <Block styleName="action" background="spice">
                {/* <h2>We're so glad you'll be back next year!</h2>
                <p>You should receive an email with more details shortly.</p> */}
                <h2>Will you be joining us there?</h2>
                <p>Is one of your tickets for you?</p>
                <Button onClick={this.claimForMe}>
                  {meClaimMsg}
                </Button>
                <Button onClick={this.showGiveTicket}>
                  {`Nope, they're ${all} for other people.`}
                </Button>
              </Block>
            );
          }
        }
      // } else if (tickets.claimed.length) {
      //   if (tickets.claimed.length > 1) {
      //     c.title = "Nice work, you've claimed all your tickets!";
      //     c.action = (
      //       <Block
      //         styleName="action"
      //         css={{ textAlign: 'center' }}
      //         background="spice"
      //       >
      //         ## Woohoo! See you in 2020!
      //       </Block>
      //     );
      //   } else {
      //     c.title = 'Woohoo, your ticket is claimed!';
      //     c.action = (
      //       <Block
      //         styleName="action"
      //         css={{ textAlign: 'center' }}
      //         background="spice"
      //       >
      //         ## Aw yeah! See you in 2020!
      //       </Block>
      //     );
      //   }
      // }
      } else if (tickets.claimed.length) {
        if (this.meClaimed()) {
          if (tickets.claimed.length > 1) {
            c.title = 'Nice work, you\'ve claimed all your tickets!';
            c.action = (
              <Block styleName="action" css={{ textAlign: 'center' }} background="spice">
                ## Impressive! Now let&apos;s setup your account.
                <Button styling="dark" to="/welcome" styleName="finishBtn">Continue</Button>
              </Block>
            );
          } else {
            c.title = 'Woohoo, your ticket is claimed!';
            c.action = (
              <Block styleName="action" css={{ textAlign: 'center' }} background="spice">
                ## Great job! Now let&apos;s setup your account!
                <Button styling="dark" to="/welcome" styleName="finishBtn">Continue</Button>
              </Block>
            );
          }
        } else {
          c.title = 'Great, you\'re all done!';
          c.action = (
            <Block styleName="action" css={{ textAlign: 'center' }} background="spice">
              ## Thanks for sharing WDS with the people you care about!
            </Block>
          );
        }
      }
    } else {
      c.title = "Hmm, looks like you don't have a ticket to WDS";
    }
    return c;
  }
  prepareTickets() {
    this.props.auth.me.tickets.forEach((t) => console.log(t.year === '2020'));
    const tickets = this.props.auth.me.tickets.filter(({ year }) => (console.log(year), year === '2020'));
    this.tickets = { claimed: [], unclaimed: [], countStr: '', count: 0, connectCount: 0 };
    if (tickets !== undefined && _.isArray(tickets) && tickets.length) {
      tickets.forEach(ticket => {
        if (ticket.status === 'unclaimed') {
          this.tickets.unclaimed.push(ticket);
        } else {
          this.tickets.claimed.push(ticket);
        }
        if (ticket.type === '360') {
          this.tickets.count += 1;
        } else {
          this.tickets.connectCount += 1;
        }
      });
      if (this.tickets.count > 0 && this.tickets.count < 2) {
        this.tickets.countStr = 'a ticket';
      } else if (this.tickets.count > 1) {
        this.tickets.countStr = `${this.tickets.count} tickets`;
      }
      if (this.tickets.connectCount > 0) {
        if (this.tickets.count) {
          this.tickets.countStr += ' and ';
        }
        if (this.tickets.connectCount === 1) {
          this.tickets.countStr += ' a connect ticket';
        } else {
          this.tickets.countStr += `${this.tickets.connectCount} connect tickets`;
        }
      }
    }
  }
  claimForMe(e) {
    e.preventDefault();
    this.setState({ status: 'claiming-me' });
    api('post me/claim-ticket', {}).then(rsp => {
      this.setState({
        justClaimedMe: true,
        status: 'claimed-me',
        claimCount: this.state.claimCount + 1,
      });
      this.props.act.updateMe('tickets', rsp.data.tickets);
      this.props.act.updateMe('attending20', '1');
    });
  }
  meClaimed() {
    let claimed = false;
    this.tickets.claimed.forEach(v => {
      if (v.user_id === this.props.auth.me.user_id) {
        claimed = true;
      }
    });
    return claimed;
  }
  giveTicket(form) {
    return new Promise((resolve, reject) => {
      api('post me/give-ticket', form.state.form).then(rsp =>
        resolve(rsp.data)
      );
    });
  }
  ticketedSuccess(rsp) {
    this.setState({
      justClaimedMe: false,
      status: 'assigned-ticket',
      claimCount: this.state.claimCount + 1,
    });
    setTimeout(() => {
      this.form.clear();
      setTimeout(() => {
        this.form.reset();
      }, 1200);
      this.props.act.updateMe('tickets', rsp.tickets);
    }, 50);
  }
  ticketedError(rsp) {
    if (rsp.err) {
      this.setState({ status: 'assign-error', error: rsp.errors[0] });
    }
    setTimeout(() => {
      this.setState({ error: '' });
    }, 8000);
  }
  setForm(form) {
    if (form !== null) {
      this.form = form;
    }
  }
  renderError() {
    if (this.state.error !== undefined && this.state.error.length) {
      return (
        <div styleName="error">
          {this.state.error}
        </div>
      );
    }
    return '';
  }
  renderTicketSetup() {
    this.prepareTickets();
    const progress = _.shuffle([
      'Dominating the World...',
      'Crunching Numbers...',
      'Beaming Electrons...',
    ])[0];
    const ts = this.tickets;
    const on = ts.claimed.length + 1;
    const total = ts.claimed.length + ts.unclaimed.length;
    return (
      <Block
        width="500"
        background="spice"
        css={{ padding: '50px 50px 35px 50px' }}
        mobile={{ phone: { padding: '42px 24px', marginTop: '20px' } }}
        styleName="assigner"
      >
        <h3>{`Ticket ${on} of ${total}`}</h3>
        {this.renderError()}
        <Form
          ref={this.setForm}
          onSubmit={this.giveTicket}
          onSuccess={this.ticketedSuccess}
          onError={this.ticketedError}
          buttonStart="Give Ticket"
          buttonProgress={progress}
        >
          <FormRow>
            <Input id="first_name" placeholder="Attendee&apos;s First Name" />
          </FormRow>
          <FormRow>
            <Input id="last_name" placeholder="Attendee&apos;s Last Name" />
          </FormRow>
          <FormRow>
            <Input id="email" placeholder="Attendee&apos;s E-Mail Address" />
          </FormRow>
        </Form>
      </Block>
    );
  }
  renderClaim() {
    this.prepareTickets();
    const content = this.claimTree();
    const title =
      content.title !== undefined
        ? content.title
        : `Woohoo! You have ${this.tickets.countStr} to WDS 2020!`;
    return (
      <Section color="orange" styleName="shell" className="fillScreen">
        <Image
          src="pattern/dot-cover.png"
          width="100%"
          height="90%"
          css={{
            position: 'absolute',
            top: '40px',
            left: '-280px',
            zIndex: '-1',
          }}
          mobile={{ phone: { display: 'none' } }}
        />
        <Block align="center" textAlign="center">
          <Image
            src="v2/logo2020.png"
            width="123"
            height="26"
            fit="contain"
            margin="-104px auto 80px"
          />
        </Block>
        <Block>
          <h1>
            {title}
          </h1>
        </Block>
        <Block>
          {content.action}
        </Block>
      </Section>
    );
  }
  render() {
    if (!this.props.auth.me && !this.props.auth.error) {
      return <ClaimLoading />;
    } else if (this.props.auth.me) {
      return this.renderClaim();
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

App.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(App, styles)
);
