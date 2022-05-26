import React, { PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import types from '../utils/types';
import actions from '../actions';
import Input from './Input/Input';
import Button from './Button/Button';
import api from '../utils/api';
import Link from './Link/Link';


const Shell = styled.div`
input {
  background: white;
}
`;

const Row = styled.div.attrs({
  className: 'ftrow'
})`
  display: flex;

  > div {
    position: relative;
  }
`;
const Label = styled.div`
  width: 40px;
  font-size: 22pt;
  font-weight: bold;
  padding-top: 16px;
`;
class WdsTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'ready',
      question: false,
      error: '',
    };
  }
  componentDidMount() {
    this.loadAnswer(this.props);
  }
  componentWillReceiveProps(props) {
    this.loadAnswer(props);
  }
  componentDidUpdate() {
    if (this.props.auth.checked && !this.props.auth.me) {
      browserHistory.push('/login?title');
      // window.location.href = '/login?propose-a-meetup';
    }
  }
  loadAnswer(props) {
    if (props.auth.me) {
      this.setState({title: props.auth.me.title, hasTitle: props.auth.me.title && props.auth.me.title.length ? true : false});
    }
  }
  valid = () => {
    if (this.state.title.length < 1) return false;
    return true;
  };
  error = () => {
    this.setState({ error: 'Enter your title!' });
    setTimeout(() => {
      this.setState({ error: '' });
    }, 750);
  };
  save = () => {
    if (!this.valid()) {
      return this.error();
    } else if (
      this.state.status !== 'sent' &&
      this.state.status !== 'sending'
    ) {
      this.setState({ status: 'sending' });
      api('patch user', {
        user_id: this.props.auth.me.user_id,
        title: this.state.title,
      }).then(() => {
        setTimeout(() => {
          this.setState({ status: 'ready' });
        }, 1000);
        this.setState({ status: 'sent', hasTitle: true });
        if (this.props.onFinish !== undefined) {
          this.props.onFinish();
        }
      });
    }
  };
  change(e) {
    if (e.target.value.length < 28) {
      this.setState({ title: e.target.value });
    }
  }
  render() {
    const { status, error } = this.state;
    let btn = 'Save My Title';
    if (status === 'sending') {
      btn = 'Saving...';
    } else if (status === 'sent') {
      btn = 'Saved!';
    }
    if (error.length) {
      btn = error;
    }
    return (
      <Shell>
        {this.state.title && this.state.title.length && this.state.hasTitle && <div style={{ width: '100%', background: '#39B54A', color: 'white', padding: '1rem', marginBottom: '1.2rem' }}>Great, your WDS Title is set! You can check it out <a target="_blank" style={{color: '#fff'}} href={`/~${this.props.auth.me.user_name}`}>on your profile here</a>.</div>}
        <Row>
          <div>
            <Input
              id="i1"
              onChange={(e) => this.change(e)}
              type="text"
              onFocus={this.focus}
              onBlur={this.blur}
              placeholder="Your WDS Title"
              value={this.state.title}
              style={{ fontSize: '26px' }}
            />
          </div>
        </Row>
        {this.props.showButton ? (
          <Button onClick={this.save}>{btn}</Button>
        ) : (
          ''
        )}
      </Shell>
    );
  }
}

WdsTitle.defaultProps = {
  type: 'text',
  showButton: true,
  onChange: () => {},
};
WdsTitle.propTypes = {
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

WdsTitle.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WdsTitle);
