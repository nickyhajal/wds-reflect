import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import styles from './JoinUs.css';
import Block from '../../Block/Block';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import FormRow from '../../FormRow/FormRow';
import FormWrap from '../../FormWrap/FormWrap';
import Image from '../../Image/Image';
import Counter from '../../Counter/Counter';

// Sections

class JoinUs extends React.Component {

  static propTypes = {
    close: PropTypes.func,
    act: PropTypes.objectOf(PropTypes.func),
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      open: false,
      page: false,
    };
  }

  onSuccess() {
    setTimeout(() => {
      this.props.act.closeModal();
    }, 2500);
  }

  render() {
    let top = window.outerWidth < 1025 ? 0 : 88;
    if (window.outerHeight < 810) {
      top = 0;
    }
    return (
      <Block cols="8" styleName="modal" background="orange" className="modal" css={{ top: `${top}px` }}>
        <button href="#" className="modal-close" onClick={this.props.close}>x</button>
        <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
        <Block margin="50px 0" width="100%">## Tickets go on sale again in:</Block>
        <Counter format="calendar" to="ticket-sale" />
        <Block width="600px" align="center" margin="50px 0 0" css={{ maxWidth: '800px' }}>
          <Form
            styleName="form"
            list="WDS 2020 Waiting List"
            successMessage="Great, we'll let you know when the next sale starts!"
            buttonStart="Get Notified"
            buttonProgress="Sending..."
            buttonSuccess="Success!"
            onSuccess={this.onSuccess}
          >
            <FormRow>
              <FormWrap style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                <Input id="full_name" placeholder="Your Full Name" />
              </FormWrap>
              <FormWrap style={{ float: 'left', width: '48%' }}>
                <Input id="email" placeholder="Your Email Address" />
              </FormWrap>
            </FormRow>
          </Form>
        </Block>
      </Block>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    modals: state.modals.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(JoinUs, styles));
