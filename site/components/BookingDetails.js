import React from 'react';
import { graphql, gql } from 'react-apollo';
import { browserHistory } from 'react-router';
import Select from 'react-select';
import styled from 'styled-components';
import Button from './Button/Button';
import apollo from '../utils/apollo';

const label = { display: 'block', marginBottom: 3 };
const Textarea = styled.textarea`
  border: 2px solid black;
  width: 320px;
  margin-bottom: 20px;
  height: 100px;
`;
const Sub = styled.div`
  font-size: 13px;
  opacity: 0.8;
  margin-bottom: 6px;
`;
const BTN_READY = 'Save & Continue';
class BookingDetails extends React.Component {
  state = {
    extra: {
      bunk: 'lower',
      roommates: '',
      requests: '',
    },
    buttonText: BTN_READY,
  }
  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    if (data !== undefined && data.booking !== undefined && nextProps.data.booking.extra !== this.props.data.booking.extra) {
      const extra = nextProps.data.booking.extra;
      this.setState({ extra: extra ? JSON.parse(extra) : this.state.extra });
    }
  }
  change = (e) => {
    const t = e.currentTarget;
    const name = t.name;
    const value = t.value;
    const extra = Object.assign({}, this.state.extra, { [name]: value });
    this.setState({ extra });
  }
  changeSelect = (s, e) => {
    this.change({ currentTarget: { name: 'bunk', value: s.value } });
  }
  submit = () => {
    const { extra } = this.state;
    const { booking } = this.props.data;
    const sendExtra = { requests: extra.requests };
    let isBunk = false;
    let isRoom = false;
    if (booking) {
      isBunk = booking.type === 'bunk';
      isRoom = ['room', 'suite'].includes(booking.type);
    }
    if (isBunk) {
      sendExtra.bunk = extra.bunk;
    }
    if (isRoom) {
      sendExtra.roommates = extra.roommates;
    }
    this.setState({ buttonText: 'Saving...'});
    apollo.mutate({
      mutation: gql`
      mutation bookingUpdate($booking_id: String!, $extra: String!) {
        bookingUpdate(booking_id: $booking_id, extra: $extra) {
          booking_id
        }
      }`,
      variables: {
        booking_id: this.props.data.booking.booking_id,
        extra: JSON.stringify(sendExtra),
      },
    }).then(() => {
      this.setState({ buttonText: 'Success!'});
      browserHistory.replace(`you-got-a-${this.props.data.booking.type}`);
    })
    .catch(() => {
      this.setState({ buttonText: 'Hm, there was a problem...'});
      setTimeout(() => {
        this.setState({ buttonText: BTN_READY});
      }, 2500);
    });
  }
  render() {
    const { booking } = this.props.data;
    let isBunk = false;
    let isRoom = false;
    if (booking) {
      isBunk = booking.type === 'bunk';
      isRoom = ['room', 'suite'].includes(booking.type);
    }
    const options = [
	    { value: 'low', label: 'Lower Bunk' },
	    { value: 'middle', label: 'Middle Bunk' },
		  { value: 'top', label: 'Top Bunk' },
    ];
    return (
      <div>
        { isBunk && (<div className="block-color-white" style={{ width: '320px'}}>
        <label htmlFor="roommates" style={label} >Preferred bunk position: </label> 
        <Select
          value={this.state.extra.bunk}
          name="bunk"
          options={options}
          className="blackBorder"
          clearable={false}
          onChange={this.changeSelect}
          style={{marginBottom: '20px'}}
        /></div>)
        }
        { isRoom && <div>
          <label htmlFor="roommates" style={label} >List any roommates below:</label>
          <Sub>If this changes in the future, please email concierge@wds.fm</Sub>
          <Textarea type="text" onChange={this.change} value={this.state.extra.roommates} name="roommates" />
        </div>
        }
        <div>
          <label htmlFor="requests" style={label}>Any special requests?</label>
          <Sub>We can&apos;t make any guarantees but we&apos;ll try our best to make your stay great!</Sub>
          <Textarea type="text" onChange={this.change} value={this.state.extra.requests} name="requests" />
        </div>
        <Button style={{ marginTop: '20px', width: '320px' }} onClick={this.submit}>{this.state.buttonText}</Button>
      </div>
    );
  }
}

export default graphql(gql`
query Booking {
  booking{
    booking_id
    type
    status
    extra
  }
}`, {
})(BookingDetails);

