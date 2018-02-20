import React from 'react';
import styled from 'styled-components';

const Shell = styled.div`
  background: #E5E2E0;
  margin-left: -50px;
  margin-right: -50px;
  margin-top: -50px;
  padding:50px;
  margin-bottom: 50px;
  position: relative;
`;
const Title = styled.div`
  color: #CF7F1A;
  font-family: VitesseBold;
  font-size: 28px;
  margin-bottom: 24px;
`;
const Msg = styled.div`
  color: #7F7A76;
  font-family: KarlaBold;
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
`;
const Close = styled.button`
  color: #7F7A76;
  position: absolute;
  right: 14px;
  top: 14px;
  font-family: Vitesse;
  font-size: 22px;
  background: transparent;
  border-width: 0;
  opacity: 0.7;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
  opacity: 0.9;
  }
`;

const DispatchWelcome = ({ close }) => {
  return (
    <Shell>
      <Close onClick={close}>x</Close>
      <Title>Welcome to the WDS Hub & Dispatch!</Title>
      <Msg>Say hello to your fellow attendees below and browse our guides to the right to prepare for your adventure!</Msg>
    </Shell>
  );
};

export default DispatchWelcome;