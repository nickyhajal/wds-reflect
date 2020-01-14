import React from 'react';
import Select from 'react-select';
import _ from 'lodash';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';
import styles from './Cart.css';
import Button from '../../components/Button/Button';
import is from '../../utils/is';
import types from '../../utils/types';
import auth from '../../utils/auth';
import Progress from '../../components/Progress/Progress';
import C from '../../constants';

class Cart extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.gotCard = false;
    this.state = {
      email: '',
      year: '2019',
      month: '8',
    };
    this.steps = {
      start_card: [25, 'Verifying card.'],
      card_ready: [35, 'Verifying card..'],
      check_transaction: [45, 'Verifying card...'],
      create_transaction: [50, 'Making it happen.'],
      pre_process: [60, 'Making it happen..'],
      stripe_charge: [70, 'Making it happen...'],
      charged: [80, 'Woohoo!'],
      paid: [90, 'Woohoo!'],
      done: [100, 'Whoohoo! All done!'],
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

  finish() {
    const props = this.props;
    if (props.checkout.processStatus === 'done') {
      this.isFinished = true
      console.log('DONE')
      auth.getMe()
      .then((me) => {
        console.log('RUN COMPLETE', this.complete)
        this.complete();
      });
    }
  }

  complete() {
    console.log('NOW COMPLET E')


    setTimeout(() => {
      console.log(1)
      const props = this.props;
      console.log(2)
      if (props.checkout.processStatus === 'done') {
      console.log(3)
        this.finished = true;
      console.log(4)
        this.props.act.updateCheckoutStatus('success');
      console.log(5)
        if (
          this.props.checkout.redirect &&
          this.props.checkout.redirect.length
        ) {
      console.log(6)
          browserHistory.replace(`/${this.props.checkout.redirect}`);
      console.log(7)
        }
        if (this.props.onSuccess) {
          this.props.onSuccess();
        }
      }
    }, 500);

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
    } else if (id === 'quantity') {
      this.props.act.updateQuantity(t.value);
    } else {
      this.setState(state);
    }
  }

  toggleCard(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.act.updateUseExistingCard(!this.props.auth.useExistingCard);
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
      { value: '2026', label: '2026' },
      { value: '2027', label: '2027' },
      { value: '2028', label: '2028' },
    ];
  }

  getCard(props) {
    if (props.auth.me !== undefined && props.auth.me && !this.gotCard) {
      this.gotCard = true;
      auth.getCard();
    }
  }

  purchase(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.checkout.status !== 'process') {
      this.props.act.updateCheckoutStatus('process');
      if (this.props.auth.me) {
        this.startCharge();
      } else {
        const pkg = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
        };
        auth
          .createUser(pkg)
          .then(raw => {
            const rsp = raw.data;
            if (rsp.existing !== undefined) {
              this.props.act.setCheckoutError(
                <div>
                  That email is already in our system.
                  <a href="#">Click here to login</a>
                </div>,
              );
            } else {
              auth.getMe();
              this.startCharge();
            }
          })
          .catch(error => {
            this.props.act.setCheckoutError(
              'Seems like there was a problem, can you try again?',
            );
          });
      }
    }
  }

  startCharge() {
    const checkout = this.props.checkout;
    const pkg = _.assign({}, { quantity: checkout.quantity }, { ...checkout.data });
    if (this.props.auth.useExistingCard) {
      this.processCharge(this.props.auth.card.hash, pkg);
    } else {
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
          this.props.act.setCheckoutError(rsp.error.message);
        } else {
          this.processCharge(rsp.id, pkg);
        }
      });
    }
  }

  processCharge(token, pkg) {
    auth
      .charge({
        card_id: token,
        code: this.props.checkout.code,
        purchase_data: pkg,
      })
      .then(raw => {
        const rsp = raw.data;
        if (rsp.fire !== undefined && rsp.fire.length) {
          let code = this.props.checkout.code;
          if (code === 'wds2017') {
            code = 'sale_wave2_2017';
          }
          this.props.act.startListeningToPurchase(rsp.fire, code);
        }
        // if (rsp.declined !== undefined && rsp.declined) {
        //   this.props.act.setCheckoutError(
        //     'There was a problem with your card. Please check your details or try another one.'
        //   );
        // } else {
        //   this.props.act.updateCheckoutStatus('success');
        //   if (this.props.onSuccess) {
        //     this.props.onSuccess();
        //   }
        // }
      });
  }

  processCompleted() {
    let status = 'waiting';
    if (this.finished) { return this.steps.done; }
    if (this.props.checkout.processStatus) {
      status = this.props.checkout.processStatus.replace('-', '_');
    }
    if (status === 'done') {
      this.finish();
    }
    if (this.steps[status] !== undefined) {
      return this.steps[status];
    }
    return [20, 'Starting...'];
  }

  renderExisting(btnStr, cost) {
    const card = this.props.auth.card;
    const cardStr = `${card.brand} ending in ${card.last4}`;
    const cardExp = `${card.exp_month}/${card.exp_year}`;
    return (
      <div>
        <div styleName="existingCardRow">
          <div styleName="cardIntro">Charge to your:</div>
          <div styleName="cardName">{cardStr}</div>
          <div styleName="cardExp">Expires {cardExp}</div>
        </div>
        {this.renderError()}
      </div>
    );
  }

  renderUserInps() {
    if (!this.props.auth.me) {
      return (
        <div>
          <div className="form-row">
            <div className="form-box">
              <label>First Name</label>
              <input type="text" name="first_name" onChange={this.change} />
            </div>
            <div className="form-box">
              <label>Last Name</label>
              <input type="text" name="last_name" onChange={this.change} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-box">
              <label>E-Mail Address</label>
              <input type="text" name="email" onChange={this.change} />
            </div>
          </div>
        </div>
      );
    }
    return '';
  }

  renderNew(btnStr, cost) {
    const width = is.phone() ? '129px' : '166px';
    const cc = this.props.checkout.cc;
    return (
      <div styleName="newShell">
        {this.renderError()}
        {this.renderUserInps()}
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

  renderAppropriate(btnStr, cost, feeCost) {
    if (this.props.auth.card && this.props.auth.useExistingCard) {
      return this.renderExisting(btnStr, cost, feeCost);
    }
    return this.renderNew(btnStr, cost, feeCost);
  }

  renderCardButton() {
    if (this.props.auth.card) {
      let str = 'Use Existing Card';
      if (this.props.auth.useExistingCard) {
        str = 'Add New Card';
      }
      return (
        <a styleName="cardSwitcher" href="#" onClick={this.toggleCard}>{str}</a>
      );
    }
    return '';
  }

  renderProcessing() {
    if (this.props.checkout.status === 'process') {
      let msg = 'Hang tight while we process your payment! ';
      const completed = this.processCompleted();
      console.log('cccc',completed)
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

  renderQuantity() {
    const options = [];
    for (let i = 0; i < this.props.checkout.allowedQuantity; i += 1) {
      options.push({
        value: i + 1,
        label: `${i + 1}`,
      });
    }
    return options.length
      ? <div styleName="quantityBox">
          <label>Quantity</label>
          <Select
            onChange={e => this.change.call(this, e, 'quantity')}
            options={options}
            name="quantity"
            clearable={false}
            searchable={false}
            value={this.props.checkout.quantity || 1}
          />
        </div>
      : '';
  }

  render() {
    const q = this.props.checkout.quantity;
    const cost = this.props.checkout.price * q / 100;
    const feeCost = this.props.checkout.fee * q / 100;
    const hasDescr = this.props.checkout.description.length;
    const hasFee = feeCost > 0;
    const titleStyles = hasDescr ? { marginTop: '-20px' } : {};
    const priceStyles = hasFee ? {} : { top: '10px', position: 'relative' };
    let btnStr = 'Complete Purchase';
    if (this.props.checkout.status === 'process') {
      btnStr = 'Processing...';
    } else if (this.props.checkout.status === 'success') {
      btnStr = 'Success!';
    }
    let display = 'block';
    if (this.props.hidden) {
      display = 'none';
    }
    return (
      <div className="cartSection" style={{ display }}>
        <div styleName="productRow">
          {is.phone()
            ? <div styleName="productName">{this.props.checkout.product}</div>
            : ''}
          {hasDescr && is.phone()
            ? <div styleName="productDescription">
                {this.props.checkout.description}
              </div>
            : ''}
          <div styleName="productMeta">
            <div styleName="priceBox">
              <div styleName="cost" style={priceStyles}>${cost}</div>
              {feeCost
                ? <div styleName="feeCost">+${feeCost}.00 processing</div>
                : ''}
            </div>
            {this.renderQuantity()}
          </div>
          {is.phone()
            ? ''
            : <div styleName="productName" style={titleStyles}>
                {this.props.checkout.product}
              </div>}
          {hasDescr && !is.phone()
            ? <div styleName="productDescription">
                {this.props.checkout.description}
              </div>
            : ''}
          <div className="clear" />
        </div>
        {this.renderCardButton()}
        <form
          id="checkoutForm"
          onSubmit={this.purchase}
          styleName="checkoutForm"
        >
          {this.renderAppropriate(btnStr, cost, feeCost)}
          <div className="form-row">
            <Button className="submit">Complete Purchase</Button>
          </div>
        </form>
        {this.renderProcessing()}
      </div>
    );
  }
}

Cart.propTypes = {
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
  CSSModules(Cart, styles),
);
