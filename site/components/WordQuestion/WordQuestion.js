import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button/Button';
import actions from '../../actions';
import types from '../../utils/types';
import api from '../../utils/api';


class WordQuestionRaw extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      ready: false,
      status: 'ready',
    };
  }
  componentDidMount() {
    this.loadAnswer(this.props);
  }
  componentDidUpdate(props) {
    if (props.auth.me && !this.state.word && !this.state.ready) {
      this.loadAnswer(props);
    }
  }
  loadAnswer(props) {
    if (props.auth.me) {
      const answers = props.auth.me.answers || [];
      answers.forEach((v) => {
        if (+v.question_id === 21) {
          if (v) {
            this.setState({ word: v.answer });
          }
        }
      });
      this.setState({ ready: true });
    }
  }
  handleChange = (e) => {
    const val = e.target.value;
    if (val.length <= 11) {
      this.setState({ word: e.target.value });
    }
  }
  save = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (this.state.status !== 'sent' && this.state.status !== 'sending') {
      this.setState({ status: 'sending' });
      api('patch user', {
        user_id: this.props.auth.me.user_id,
        answers: JSON.stringify([{ question_id: '21', answer: this.state.word }]),
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ status: 'done' });
        }, 1200);
        this.setState({ status: 'sent' });
      });
    }
  }
  render() {
    const statuses = {
      ready: 'Submit Your Word',
      sending: 'Submit Your Word',
      sent: 'Success!',
    };
    return this.props.auth.me && this.state.ready ? this.state.status === 'done' ? (<div className={this.props.className}><span className="success">Thanks, you're all set! See you in Portland!</span></div>) : (
      <div className={this.props.className}>
        <form onSubmit={this.save}>
          <div>
            <input type="text" onChange={this.handleChange} value={this.state.word} placeholder="Start typing your word here..." />
            <span>{11 - this.state.word.length}</span>
          </div>
          <Button>{statuses[this.state.status]}</Button>
        </form>
      </div>
    ) : (
      <div />
    );
  }
}

WordQuestionRaw.propTypes = {
  className: PropTypes.string,
  auth: types.auth,
};


const WordQuestion = styled(WordQuestionRaw)`
  .success {
    color: #39B54A;
    font-size: 22px;
  }
  form {
    div {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      input {
        border: 2px solid #E6E6E6;
        padding: 12px 6px;
        margin-right: 6px;
        font-size: 22px;
        color: #0F54ED;
        min-width: 380px;
      }
      span {
        color: #39B54A;
        font-size: 22px;
      }
    }
  }
`;

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}


function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordQuestion);
