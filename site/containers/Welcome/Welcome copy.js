import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
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
import Input from '../../components/Input/Input';
import ClaimLoading from '../../reflected/components/ClaimLoading';
import ClaimError from '../../reflected/components/ClaimError';


export class Welcome extends Component {

  static scrollTo() {
  }
  constructor(props) {
    super(props);
    this.tickets = { claimed: [], unclaimed: [], countStr: '', count: 0 };
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
      claimCount: 0,
    };
  }
  componentWillMount() {
    if (!this.props.auth.me && this.props.routeParams.id !== undefined) {
      auth.loginWithHash(this.props.routeParams.id);
    }
  }
  claimTree() {
    const c = {};
    const tickets = this.tickets;
    c.title = 'Hmm, problem.';
    c.subtitle = 'Hm...';
    if (tickets.claimed.length || tickets.unclaimed.length) {
      if (tickets.unclaimed.length) {

        // Claiming additional tickets
        if (this.meClaimed()) {
          c.title = 'Who else should have your tickets?';
          c.action = (
            <div styleName="action">
              <h2>Great, let&apos;s assign your other tickets!</h2>
              {this.renderTicketSetup()}
            </div>
          );

        // Claim your ticket
        } else {
          // If you only have one ticket
          if (tickets.unclaimed.length === 1) {
            c.action = (
              <div styleName="action">
                <h2>Will you be at WDS?</h2>
                <Button onClick={this.claimForMe}>Yep! That ticket&apos;s for me!</Button>
                <Button onClick={this.showGiveTicket}>
                  Nope, I want to give this ticket to someone else.
                </Button>
              </div>
            );
          // If you have more than one ticket
          } else {
            const meClaimMsg = this.state.status === 'ready' ? 'Yep! Claim one for me!' : 'Claiming your ticket...';
            c.action = (
              <div styleName="action">
                <h2>Will you be joining us there?</h2>
                <p>Is one of your tickets for you?</p>
                <Button onClick={this.claimForMe}>{meClaimMsg}</Button>
                <Button onClick={this.showGiveTicket}>
                  Nope, they&apos;re all for other people.
                </Button>
              </div>
            );
          }
        }
      } else if (tickets.claimed.length) {
        if (tickets.claimed.length > 1) {
          c.title = 'Nice work, you\'ve claimed all your tickets!';
          c.action = (
            <Block styleName="action" css={{ textAlign: 'center' }}>
              ## Impressive! Now let&apos;s setup your account.
            </Block>
          );
        } else {
          c.title = 'Woohoo, your ticket is claimed!';
          c.action = (
            <Block styleName="action" css={{ textAlign: 'center' }}>
              ## Now let&apos;s setup your account!
            </Block>
          );
        }
      }
    } else {
      c.title = 'Hmm, looks like you don\'t have a ticket to WDS';
    }
    return c;
  }
  prepareTickets() {
    const tickets = this.props.auth.me.tickets;
    this.tickets = { claimed: [], unclaimed: [], countStr: '', count: 0 };
    if (tickets !== undefined && _.isArray(tickets) && tickets.length) {
      tickets.forEach((ticket) => {
        if (ticket.status === 'unclaimed') {
          this.tickets.unclaimed.push(ticket);
        } else {
          this.tickets.claimed.push(ticket);
        }
        this.tickets.count += 1;
      });
      if (this.tickets.count > 0 && this.tickets.count < 2) {
        this.tickets.countStr = 'a ticket';
      } else if (this.tickets.count > 1) {
        this.tickets.countStr = `${this.tickets.count} tickets`;
      }
    }
  }
  claimForMe(e) {
    e.preventDefault();
    this.setState({ status: 'claiming-me' });
    api('post me/claim-ticket', {})
    .then((rsp) => {
      this.setState({ status: 'claimed-me', claimCount: (this.state.claimCount + 1) });
      this.props.act.updateMe('tickets', rsp.data.tickets);
    });
  }
  meClaimed() {
    let claimed = false;
    this.tickets.claimed.forEach((v) => {
      if (v.user_id === this.props.auth.me.user_id) {
        claimed = true;
      }
    });
    return claimed;
  }
  giveTicket(form) {
    return new Promise((resolve, reject) => {
      api('post me/give-ticket', form)
      .then(rsp => resolve(rsp.data));
    });
  }
  ticketedSuccess(rsp) {
    this.setState({ status: 'assigned-ticket', claimCount: (this.state.claimCount + 1) });
    setTimeout(() => this.props.act.updateMe('tickets', rsp.tickets), 50);
  }
  ticketedError(rsp) {
    if (rsp.err) {
      this.setState({ status: 'assign-error', error: rsp.errors[0] });
    }
    setTimeout(() => {
      this.setState({ error: '' });
    }, 8000);
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
    const progress = _.shuffle([
      'Dominating the World...', 'Crunching Numbers...', 'Beaming Electrons...',
    ])[0];
    const ts = this.tickets;
    const on = ts.claimed.length + 1;
    const total = ts.claimed.length + ts.unclaimed.length;
    return (
      <Block width="500" background="spice" css={{ padding: '50px 50px 35px 50px' }} styleName="assigner">
        <h3>{`Ticket ${on} of ${total}`}</h3>
        {this.renderError()}
        <Form onSubmit={this.giveTicket} onSuccess={this.ticketedSuccess} onError={this.ticketedError} buttonStart="Give Ticket" buttonProgress={progress}>
          <FormRow>
            <Input id="name" placeholder="Attendee&apos;s Name" />
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
    const title = content.title !== undefined ? content.title : `Woohoo! You have ${this.tickets.countStr} to WDS 2017!`;
    return (
      <div styleName="shell">
        <Section color="white">
          <Block align="center" textAlign="center">
            <Image src="logo2020.png" width="123" height="26" fit="contain" margin="-80px auto 110px" />
          </Block>
          <Block>
            <h1>{title}</h1>
          </Block>
        </Section>
        <Section color="orange">
          <Block>
            {content.action}
          </Block>
        </Section>
      </div>
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

Welcome.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Welcome, styles));
