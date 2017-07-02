import React from 'react';
import styled from 'styled-components';
import Event from '../../models/Event';
import Button from '../Button/Button';

const Row = styled.div`
  font-family: Vitesse;
  padding: 8px 0;
  font-size: 19px;
  display: flex;
  margin-top: 12px;
  align-items: flex-start;
  @media 
  (max-device-width: 800px) 
  and (orientation: portrait) { 
    a.button {
      padding: 10px 12px;
      font-size: 14px;
      order: -1;
      margin-right: 20px;
      width: 70px;
    }
  }
`;
const Content = styled.div`
  flex: 1;
`;
const Name = styled.div`
  margin-bottom: 4px;
  max-width: 680px;
  line-height: 140%;
`;
const Hosts = styled.div`
  font-family: Karla;
  font-size: 16px;
`;

const EventRow = ({ event, me }) => {
  const E = new Event(event);
  const hostname = E.hostnames();
  const hasHost = hostname.length > 0;
  const hasDetails = E.type !== 'program';
  return (
    <Row>
      <Content>
        <Name>{event.what}</Name>
        {hasHost ? <Hosts><b>Hosted by:</b> {hostname}</Hosts> : ''}
      </Content>
      {hasDetails
        ? <Button to={`/academy/${event.slug}`}>More Details</Button>
        : ''}
    </Row>
  );
};

export default EventRow;
