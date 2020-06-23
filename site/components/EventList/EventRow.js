import React from 'react';
import styled from 'styled-components';
import Event from '../../models/Event';
import Button from '../Button/Button';

const Row = styled.div`
  font-family: Vitesse;
  padding: 8px 0;
  font-size: 19px;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  color: #4e4843;
  @media (max-device-width: 800px) and (orientation: portrait) {
    a.button {
      padding: 10px 12px;
      font-size: 14px;
      order: -1;
      margin-right: 20px;
      width: 70px;
    }
  }
  &.contained {
    margin-left: -60px;
    margin-right: -60px;
    padding-left: 60px;
    padding-right: 60px;
  }
  &.contained.row-even {
    background: #f9f6f4;
  }
  &.contained.row-odd {
    background: #fbf9f8;
  }
`;
const Content = styled.div`flex: 1;`;
const Name = styled.div`
  margin-bottom: 0px;
  max-width: 550px;
  line-height: 140%;
  margin-top: 2px;
`;
const Time = styled.div`
  margin-right: 32px;
  line-height: 140%;
  padding: 6px 0px 3px;
  margin-right: 16px;
  width: 120px;
  text-align: left;
  color: #99a23a;
  margin-top: 4px;
  font-size: 16pt;
  margin-bottom: 5px;
  font-family: Vitesse;
`;
const Hosts = styled.div`
  font-family: Karla;
  font-size: 16px;
`;

const EventRow = ({ event, me, rowClass, offset, label }) => {
  const E = new Event(event);
  let hostname = E.hostnames();
  const hasDetails = E.descr.length > 0;
  return (
    <Row className={rowClass}>
      <Time>
        {E.startStr(offset)}
      </Time>
      <Content>
        <Name>
          {event.what}
        </Name>
        {E.type === 'program'
          ? <Hosts>
              {hostname}
            </Hosts>
          : <Hosts>
              <b>Hosted by:</b> {hostname}
            </Hosts>}
      </Content>
      {hasDetails
        ? <Button to={`/${event.type}/${event.slug}`}>More Details</Button>
        : ''}
    </Row>
  );
};

export default EventRow;
