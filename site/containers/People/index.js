import React, { Component, PropTypes } from 'react';

export class People extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const children = this.props.children;
    return (
      <div>
        People
      </div>
    );

  }
}

export default People;