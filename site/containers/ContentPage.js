import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import Markdown from 'react-remarkable';
import styled from 'styled-components';
import { Page as PageQuery } from '../queries';
import Section from '../components/Section/Section';
import Block from '../components/Block/Block';
import api from '../utils/api';
import Link from '../components/Link/Link';
import _ from 'lodash';
import angler from '../utils/angler';
import types from '../utils/types';
import is from '../utils/is';
import colorize from '../utils/colorize';


const Shell = styled.div`
  img {
    max-width: 100%;
  }
  p {
    font-size: 17px;
  }
  h2 {
    margin-top: 62px !important;
  }
`;
const Title = styled.div`
  background: ${colorize('canvas')};
  color: ${colorize('dark')};
  padding: 86px 60px 65px 60px;
  margin-bottom: 0;
  margin-top: -470px;
  font-family: VitesseBold;
  font-size: 34px;
  text-align: center;
`;

export class ContentPage extends Component {
  render() {
    const headcss = {};
    const clip = angler('tr:0,12%');
    headcss.clipPath = clip;
    headcss.WebkitClipPath = clip;
    const { title, content } = Object.assign({ title: '', content: '' }, this.props.data.page);
    return (
      <Shell>
        <Section headerClip="br:0%,-10%;" headerImage="hero/green.jpg" color="canvas">
          <Block cols="8" background="transparent">
            <Title style={headcss}>{title}</Title>
            <Block width="100%" background="white" type="padded" textAlign="left">
              { content }
            </Block>
          </Block>
        </Section>
      </Shell>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

ContentPage.propTypes = {
  children: types.children,
  app: types.app,
};

export default graphql(PageQuery, {
  options: props => {
    return {
      variables: {
        slug:  window.location.pathname.replace('/', ''),
      },
    };
  },
})(ContentPage);
