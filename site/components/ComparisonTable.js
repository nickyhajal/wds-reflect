import React from 'react';
import styled from 'styled-components';
import vars from '../core/vars';
import Block from './Block/Block';

const Table = styled.table`
  width: 785px;
  border-collapse: none;
  border-spacing: 0;
  margin: 40px auto;
  position: relative;
  left: -4px;
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const HeadCol = styled.th`
  border-left: 2px solid #007af5;
  font-family: Vitesse;
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  &:first-of-type {
  text-align: left;
  margin-right: 2px;
  border-left: 0;
  }
  &:last-of-type {
  border-right: 2px solid #007af5;
  }
  @media (max-width: 700px) {
    border-width: 0 !important;
  }
`;
const TextCol = styled.td`
  text-align: left;
  font-weight: normal;
  padding: 18px 18px 18px 0;
  border-bottom: 2px solid #007af5;
  font-size: 15px;
`;
const CheckRow = styled.td`
  width: 180px;
  vertical-align: middle;
  border-bottom: 2px solid #007af5;
  border-left: 2px solid #007af5;
  &:last-of-type {
    border-right: 2px solid #007af5;
  }
`;
const Check = styled.div`
  width: 18px;
  height: 18px;
  background-image: url('https://files.wds.fm/images/check_blue.png');
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const ComparisonTable = (props) => (
  <Block
    type="padded"
    cols="8"
    bleed={false}
    background="white"
    className="has-checklist"
    css={{ padding: '60px 40px' }}
    mobile={{ phone: {
      backgroundColor: 'transparent',
      padding: '0',
      marginTop: '-40px',
      marginLeft: '5px',
      // padding: '60px 25px 60px 10px',
    }}}
    clip="top_lr_1.6"
  >
    <Table>
      <thead>
        <tr>
          <HeadCol>Includes</HeadCol>
          <HeadCol>Connect Ticket</HeadCol>
          <HeadCol>360 Ticket</HeadCol>
        </tr>
      </thead>
      <tbody>
        {vars.comparison[0].map(({ text, for: forType }) => (
          <tr>
            <TextCol>{text}</TextCol>
            <CheckRow>{forType !== '360' ? <Check /> : ''}</CheckRow>
            <CheckRow>{forType !== 'connect' ? <Check /> : ''}</CheckRow>
          </tr>
        ))}
      </tbody>
    </Table>
  </Block>
);

export default ComparisonTable;
