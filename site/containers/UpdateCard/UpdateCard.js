import React from 'react';
import Select from 'react-select';
import _ from 'lodash';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import styles from './UpdateCard.css';
import Button from '../../components/Button/Button';
import is from '../../utils/is';
import types from '../../utils/types';
import auth from '../../utils/auth';
import Progress from '../../components/Progress/Progress';
import C from '../../constants';
import api from '../../utils/api';

class UpdateCard extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.gotCard = false;
    this.state = {
      email: '',
      year: '2019',
      month: '8',
    };
  }

  componentDidMount() {
    this.getCard(this.props);
  }
  componentWillReceiveProps(props) {
    this.getCard(props);
  }
  componentDidUpdate() {
    this.getCard(this.props);
  }

  change(e, id, cc) {
    let t = {};
    if (id !== undefined && typeof id === 'string') {
      t = e;
    } else {
      t = e.target;
      id = t.name;
    }
    const state = {};
    state[id] = t.value;
    if (cc) {
      this.props.act.setCheckoutCC(state);
    } else {
      this.setState(state);
    }
  }

  months() {
    return [
      { value: '1', label: 'January' },
      { value: '2', label: 'February' },
      { value: '3', label: 'March' },
      { value: '4', label: 'April' },
      { value: '5', label: 'May' },
      { value: '6', label: 'June' },
      { value: '7', label: 'July' },
      { value: '8', label: 'August' },
      { value: '9', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' },
    ];
  }

  years() {
    return [
      { value: '2019', label: '2019' },
      { value: '2020', label: '2020' },
      { value: '2021', label: '2021' },
      { value: '2022', label: '2022' },
      { value: '2023', label: '2023' },
      { value: '2024', label: '2024' },
      { value: '2025', label: '2025' },
    ];
  }

  getCard(props) {
    if (props.auth.me !== undefined && props.auth.me && !this.gotCard) {
      this.gotCard = true;
      auth.getCard();
    }
  }

  setError(error) {
    this.setState({ error, step: '', status: 'ready' })
    setTimeout(() => {
      this.setState({error: false})
    }, 2500);
  }
  startUpdate(e) {
    e.preventDefault();
    e.stopPropagation();
    const { status } = this.state;
    if (status !== 'process') {
      this.setState({ status: 'process', step: 'verify' });
      const yr = document.getElementsByName('exp-year')[0];
      const mnth = document.getElementsByName('exp-month')[0];
      if (yr !== undefined) {
        yr.setAttribute('data-stripe', 'exp_year');
        yr.removeAttribute('name');
      }
      if (mnth !== undefined) {
        mnth.setAttribute('data-stripe', 'exp_month');
        mnth.removeAttribute('name');
      }
      const form = document.getElementById('checkoutForm');
      window.Stripe.setPublishableKey(C.stripe_pk);
      window.Stripe.card.createToken(form, (status, rsp) => {
        if (rsp.error !== undefined && rsp.error) {
          this.setError(rsp.error.message);
        } else {
          this.processCardUpdate(rsp.id);
        }
      });
    }
  }

  processCardUpdate(token) {
    this.setState({ status: 'process', step: 'update' });
    api('post user/card', { card_id: token })
    .then((raw) => {
      const rsp = raw.data;
      if (rsp.status === 'fail') {
        this.setError(rsp.msg);
      } else {
        this.setState({status: 'success'});
      }
    }).catch(() => {
      this.setError('Hm, there was a server error. Try again in a bit!');
    });
  }

  renderExisting() {
    if (this.props.auth.card && this.props.auth.useExistingCard) {
      const card = this.props.auth.card;
      const cardStr = `${card.brand} ending in ${card.last4}`;
      const cardExp = `${card.exp_month}/${card.exp_year}`;
      return (
        <div>
          <div styleName="existingCardRow">
            <div styleName="cardIntro">Current Card:</div>
            <div styleName="cardName">{cardStr}</div>
            <div styleName="cardExp">Expires {cardExp}</div>
          </div>
          {this.renderError()}
        </div>
      );
    }
  }

  renderNew(btnStr, cost) {
    const width = is.phone() ? '129px' : '166px';
    const cc = this.props.checkout.cc;
    return (
      <div styleName="newShell">
        {this.renderError()}
        <div className="form-row">
          <div className="form-box form-cc-box">
            <label>Card Number</label>
            <input
              type="text"
              data-stripe="number"
              value={cc.number}
              onChange={e => this.change.call(this, e.target, 'number', true)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-box form-exp-box">
            <label>Exp. Month</label>
            <Select
              onChange={e => this.change.call(this, e, 'month')}
              options={this.months()}
              name="exp-month"
              clearable={false}
              searchable={false}
              value={this.state.month}
              style={{ width }}
            />
          </div>
          <div className="form-box form-exp-box">
            <label>Exp. Year</label>
            <Select
              onChange={e => this.change.call(this, e, 'year')}
              options={this.years()}
              clearable={false}
              searchable={false}
              name="exp-year"
              style={{ width }}
              value={this.state.year}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-box ccZip form-zip-box">
            <label>Zip Code</label>
            <input
              type="text"
              data-stripe="zip"
              styleName="zip"
              value={cc.zip}
              onChange={e => this.change.call(this, e.target, 'zip', true)}
            />
          </div>
          <div className="form-box ccCvv form-cvv-box">
            <label>CVV</label>
            <input
              type="text"
              styleName="cvv"
              data-stripe="cvc"
              value={cc.cvv}
              onChange={e => this.change.call(this, e.target, 'cvv', true)}
            />
          </div>
        </div>
      </div>
    );
  }

  renderProcessing() {
    if (this.props.checkout.status === 'process') {
      let msg = 'Hang tight while we process your payment! ';
      const completed = this.processCompleted();
      msg = (
        <div>
          <div>{msg}</div>
          <div>
            <Progress
              completed={completed[0]}
              status={completed[1]}
              format="short"
              width="325"
            />
          </div>
        </div>
      );
      return (
        <div styleName="processing">
          <div styleName="processMessage">
            {msg}
          </div>
        </div>
      );
    }
    return '';
  }

  renderError() {
    if (this.props.checkout.error) {
      return <div styleName="error">{this.props.checkout.error}</div>;
    }
    return '';
  }

  render() {
    const { status, step, error} = this.state;
    const hasCard = this.props.auth.card;
    let btnStr = hasCard ? 'Update Card' : 'Add Card';
    if (error) {
      btnStr = error;
    } else if (status === 'process') {
      if (step === 'verify') {
        btnStr = 'Verifying Card...';
      }
      else {
        btnStr = hasCard ? 'Updating Card...' : 'Adding Card...';
      }
    } else if (status === 'success') {
      btnStr = hasCard ? 'Updated!' : 'Added!';
    }
    if (status === 'success') {
      return  (
      <div className="cartSection">
        <div styleName="success">
          <h3>Your card has been updated!</h3>
          <p>If you have an active payment plan, your next payment will continue as scheduled on this card.</p>
        </div>
      </div>

      )
    }
    return (
      <div className="cartSection">
        <div styleName="message">
          {this.props.auth.card ? 'Update your card below.' : 'You either haven\'t added a card or your previous card expired. Add one below.'}
        </div>
        <form
          id="checkoutForm"
          onSubmit={this.startUpdate}
          styleName="checkoutForm"
        >
          {this.renderExisting()}
          {this.renderNew()}
          <div className="form-row">
            <Button className="submit">{btnStr}</Button>
          </div>
        </form>
        {this.renderProcessing()}
      </div>
    );
  }
}

UpdateCard.propTypes = {
  checkout: types.checkout,
  auth: types.auth,
  act: types.actions,
  onSuccess: types.funcOrBool,
};

function mapStateToProps(state) {
  return {
    checkout: state.checkout.toJS(),
    auth: state.auth.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(UpdateCard, styles),
);
