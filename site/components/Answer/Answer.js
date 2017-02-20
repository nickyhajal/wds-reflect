import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from './Answer.css';
import types from '../../utils/types';
import C from '../../constants';
import actions from '../../actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import api from '../../utils/api';


class Answer extends React.Component {

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      status: 'ready',
      question: false,
    };
  }
  componentWillReceiveProps(props) {
    this.loadAnswer(props);
  }
  componentDidMount() {
    this.loadAnswer(this.props);
  }
  loadAnswer(props) {
    if (props.auth.me) {
      const answers = props.auth.me.answers;
      answers.forEach((v, i) => {
        if (+v.question_id === +props.question_id) {
          this.setState({ question: v });
        }
      });
    }
  }
  setInp(inp) {
    this.inp = inp;
  }
  save() {
    if (this.state.status !== 'sent' && this.state.status !== 'sending') {
      this.setState({ status: 'sending' });
      api('patch user', {
        user_id: this.props.auth.me.user_id,
        answers: JSON.stringify([this.state.question]),
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ status: 'ready' });
        }, 1000);
        this.setState({ status: 'sent' });
        if (this.props.onFinish !== undefined) {
          this.props.onFinish();
        }
      });
    }
  }
  change(e) {
    let curr = this.state.question;
    if (curr) {
      curr.answer = e.target.value;
    } else {
      curr = { question_id: this.props.question_id, answer: e.target.value };
    }
    this.setState({ question: curr });
  }
  render() {
    let btn = 'Save & Continue';
    if (this.state.status === 'sending') {
      btn = 'Saving...';
    } else if (this.state.status === 'sent') {
      btn = 'Success!';
    }
    const answer = (this.state.question && this.state.question.answer !== undefined) ?
      this.state.question.answer : '';
    return (
      <div styleName="shell">
        <label>{this.props.label}</label>
        <Input id={this.props.question_id} onChange={this.change} type={this.props.type} styleName="inp" ref={this.setInp} value={answer} />
        {this.props.showButton ? (<Button onClick={this.save}>{btn}</Button>) : ''}
      </div>
    );
  }
}

Answer.defaultProps = {
  type: 'text',
  showButton: true,
};
Answer.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.string),
  key: PropTypes.string,
  label: PropTypes.string,
  onFinish: PropTypes.func,
  question_id: PropTypes.string,
  type: PropTypes.string,
  showButton: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

Answer.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Answer, styles));
