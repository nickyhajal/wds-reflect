import React, { Component, PropTypes } from 'react';

export class Person extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const children = this.props.children;
    return (
      <div>
        Person
      </div>
    );

  }
}

export default Person;