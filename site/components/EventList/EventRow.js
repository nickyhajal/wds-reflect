import React from 'react';
import styled from 'styled-components';
import Event from '../../models/Event';
import Button from '../Button/Button';

const Row = styled.div`
  font-family: Vitesse;
  padding: 8px 0;
  font-size: 19px;
  display: flex;
  margin-top: 24px;

  &:first-of-type {
    margin-top: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;
const Name = styled.div`
  margin-bottom: 4px;
`;
const Hosts = styled.div`
  font-family: Karla;
  font-size: 16px;
`;

const EventRow = ({ event, me }) => {
  const E = new Event(event);
  return (
    <Row>
      <Content>
        <Name>{event.what}</Name>
        <Hosts><b>Hosted by:</b> {E.hostnames()}</Hosts>
      </Content>
      <Button to={`/academy/${event.slug}`}>More Details</Button>
    </Row>
  );
};

export default EventRow;
