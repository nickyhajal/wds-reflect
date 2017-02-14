import React from 'react';
import { Link as ReactLink } from 'react-router';
import _ from 'lodash';

export default class Link extends React.Component {
  parseTo(to) {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  }
  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }

  render() {
    const { to, children, ...rest } = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (<ReactLink to={toLocation.pathname} {...rest}>{children}</ReactLink>);
    }
    return (<a href={to} target="_blank" {..._.omit(rest, ['href'])}>{children}</a>);
  }
}
