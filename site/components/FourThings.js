import React, { PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import types from '../utils/types';
import actions from '../actions';
import Input from './Input/Input';
import Button from './Button/Button';
import api from '../utils/api';

const Shell = styled.div`
  .ftrow {
    &:nth-of-type(1) input {
      transition: 0.3s all 0s;
    }
    &:nth-of-type(2) input {
      transition: 0.3s all 0.1s;
    }
    &:nth-of-type(3) input {
      transition: 0.3s all 0.2s;
    }
    &:nth-of-type(4) input {
      transition: 0.2s all 0.3s;
    }
  }
  &.changing {
    input {
      text-indent: 380px;
    }
  }
  &.selected {
    input {
      transition: 0s !important;
      text-indent: 0 !important;
    }
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
class FourThings extends React.Component {
  constructor() {
    super();
    const placeholders = [
      ['Milk & Cookies', 'Inspiring Movies', 'Elephants', 'Morning Runs'],
      ['Writing Notes', 'Croissants', 'New Adventures', 'Trevor Noah'],
      ['Zumba', 'Journey Songs', 'Cinnamon Rolls', 'Libby the Cat'],
      ['The Ocean', 'Bungee Jumping', 'Sparkling Water', 'Fountain Pens'],
    ];
    this.state = {
      status: 'ready',
      question: false,
      error: '',
      placeholderState: 'ready',
      placeholderInx: 0,
    };
    this.placeholders = placeholders;
  }
  componentDidMount() {
    this.loadAnswer(this.props);
    this.checkPlaceholders();
  }
  componentWillReceiveProps(props) {
    this.loadAnswer(props);
  }
  loadAnswer(props) {
    if (props.auth.me) {
      const answers = props.auth.me.answers || [];
      answers.forEach((v, i) => {
        if (+v.question_id === +props.question_id) {
          v.answer = v.answer[0] === '[' ? JSON.parse(v.answer) : v.answer;
          this.setState({ question: v });
        }
      });
    }
  }

  checkPlaceholders() {
    setTimeout(() => {
      if (!this.valid() && this.state.placeholderState !== 'selected') {
        let placeholderInx = this.state.placeholderInx + 1;
        if (placeholderInx > this.placeholders.length - 1) {
          placeholderInx = 0;
        }
        this.setState(
          {
            placeholderState: 'changing',
          },
          () => {
            setTimeout(() => {
              this.setState({ placeholderInx }, () => {
                setTimeout(() => {
                  this.setState({
                    placeholderState: this.state.placeholderState === 'selected' ? 'selected' : 'ready',
                  });
                }, 100);
              });
            }, 500);
          }
        );
      }
      this.checkPlaceholders();
    }, 6000);
  }
  valid = () => {
    const answers = this.answers();
    if (answers.filter(a => a).length < 1) return false;
    return true;

    // let good = true;
    // console.log('validate', answers);
    // answers.forEach(a => {
    //   console.log('foreach', a)
    //   if (!a.length) {
    //     good = false;
    //   }
    // });
    // return good;
  };
  error = () => {
    this.setState({ error: 'Enter a word!' });
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
      const question = Object.assign({}, this.state.question, {
        answer: JSON.stringify(this.state.question.answer),
      });
      this.setState({ status: 'sending' });
      api('patch user', {
        user_id: this.props.auth.me.user_id,
        answers: JSON.stringify([question]),
      }).then(() => {
        setTimeout(() => {
          this.setState({ status: 'ready' });
        }, 1000);
        this.setState({ status: 'sent' });
        if (this.props.onFinish !== undefined) {
          this.props.onFinish();
        }
      });
    }
  };
  answers() {
    return this.state.question && this.state.question.answer !== undefined
      ? this.state.question.answer
      : ['', '', '', ''];
  }
  answer(num) {
    const answers = this.answers();
    return answers[num] || '';
  }
  change(e, num) {
    let curr = this.state.question;
    if (e.target.value.length < 200) {
      if (curr) {
        curr.answer[num] = e.target.value;
      } else {
        const a = [];
        a[num] = e.target.value;
        curr = { question_id: this.props.question_id, answer: a };
      }
      this.setState({ question: curr });
      this.props.onChange(curr);
    }
  }
  change0 = e => {
    this.change(e, 0);
  };
  change1 = e => {
    this.change(e, 1);
  };
  change2 = e => {
    this.change(e, 2);
  };
  change3 = e => {
    this.change(e, 3);
  };
  focus = () => {
    this.setState({ placeholderState: 'selected' });
  }
  blur = () => {
    this.setState({ placeholderState: 'ready' });
  }
  render() {
    const { status, placeholderState, error } = this.state;
    let btn = 'Save & Continue';
    if (status === 'sending') {
      btn = 'Saving...';
    } else if (status === 'sent') {
      btn = 'Success!';
    }
    if (error.length) {
      btn = error;
    }
    const placeholder = this.placeholders[this.state.placeholderInx];
    return (
      <Shell className={placeholderState === 'selected' ? 'selected' : placeholderState === 'changing' ? 'changing' : ''}>
        <Row>
          <div>
            <Input
              id="i1"
              onChange={this.change0}
              type="text"
              onFocus={this.focus}
              onBlur={this.blur}
              placeholder="Your Word"
              value={this.answer(0)}
              style={{ fontSize: '26px' }}
            />
          </div>
        </Row>
        {/* <Row>
          <Label>2</Label>
          <div>
            <Input
              id="i2"
              onFocus={this.focus}
              onBlur={this.blur}
              onChange={this.change1}
              type="text"
              placeholder={placeholder[1]}
              value={this.answer(1)}
              style={{ fontSize: '26px' }}
            />
          </div>
        </Row>
        <Row>
          <Label>3</Label>
          <div>
            <Input
              id="i3"
              onChange={this.change2}
              type="text"
              onBlur={this.blur}
              onFocus={this.focus}
              placeholder={placeholder[2]}
              value={this.answer(2)}
              style={{ fontSize: '26px' }}
            />
          </div>
        </Row>
        <Row>
          <Label>4</Label>
          <div>
            <Input
              id="i4"
              onChange={this.change3}
              type="text"
              onFocus={this.focus}
              onBlur={this.blur}
              placeholder={placeholder[3]}
              value={this.answer(3)}
              style={{ fontSize: '26px' }}
            />
          </div>
        </Row> */}
        {this.props.showButton ? (
          <Button onClick={this.save}>{btn}</Button>
        ) : (
          ''
        )}
      </Shell>
    );
  }
}

FourThings.defaultProps = {
  type: 'text',
  showButton: true,
  onChange: () => {},
};
FourThings.propTypes = {
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

FourThings.propTypes = {
  auth: types.auth,
  act: types.actions,
  routeParams: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourThings);
