import React from 'react';
import Link from '../components/Link/Link';
import Section from '../components/Section/Section';
import Image from '../components/Image/Image';
import Block from '../components/Block/Block';
import Tabs from '../components/Tabs/Tabs';
import Transfer from '../components/Transfer/Transfer';
import Tab from '../components/Tab/Tab';
import Button from '../components/Button/Button';
import Counter from '../components/Counter/Counter';
import Form from '../components/Form/Form';
import FormRow from '../components/FormRow/FormRow';
import Input from '../components/Input/Input';
import Grid from '../components/Grid/Grid';
import Video from '../components/Video/Video';
import SpeakerList from '../components/SpeakerList/SpeakerList';
import Testimonials from '../components/Testimonials/Testimonials';
import TicketCounter from '../../site/components/TicketCounter/TicketCounter';
import Login from '../components/Login/Login';
import JoinUsButton from '../components/JoinUsButton/JoinUsButton';
import ResetPass from '../components/ResetPass/ResetPass';
import is from '../utils/is';
import Cart from '../../site/containers/Cart/Cart';

  
  const Page = (props) => (
    <div>
      <Section
  color="sea"
  css={{ marginBottom: '-2px' }}
>
  <Block width="768px" bleed={true} type="padded" background="gray" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
    <Block width="100%" margin="40px 0 0 0" textAlign="center">## FAQ</Block>

    ### What is WDS?{'\n'}

    The World Domination Summit (WDS) is a gathering of creative, interesting people from all over the world. Every summer, thousands of people travel to Portland, Oregon for an immersive experience in life, work, and travel.{'\n'}
    The weekend consists of three primary activities: main-stage events with keynote speakers that are attended by the entire group, workshops that focus on specific topics, and lots of meetups, parties, and informal engagement. Despite the large number of people who attend, WDS is introvert-friendly, and everyone who participates is a big part of the event.{'\n'}
    <p>WDS was founded by <Link to="http://chrisguillebeau.com" target="blank">Chris Guillebeau</Link>, explorer of the world and <i>New York Times</i> bestselling author of <i>The $100 Startup</i>.</p>

    ### Can I nominate myself or someone I represent to be a speaker?{'\n'}

    We're sure that you or your client would be great! But we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.{'\n'}

    ### Can I sponsor WDS or donate something for your attendees?{'\n'}

    WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.{'\n'}

    ### Can I be a volunteer?{'\n'}
    <p>Every year we recruit a number of volunteer "ambassadors" to serve our attendees during WDS. To apply for this role, you must live in Portland at least most of the year, and you must be available during the entire weekend of the event. Applications will open after ticket sales end. When applications become available, Chris will make an announcement on his <Link to="http://chrisguillebeau.com/">blog</Link> and through <Link to="https://twitter.com/chrisguillebeau">Twitter.</Link></p>

    ### How can I get a ticket?{'\n'}

    <p>Tickets for WDS are only offered a couple of times a year, and they go quickly. There is no fast-track or secret process to get a ticket; they are all offered on a first-come, first-served basis. The best way to be notified when tickets go on sale is to join the 2017 <Link to="/join-us">waiting list.</Link></p>
    Please note: Once tickets are gone, they're gone. We do not hold any tickets back for higher-priced sales later, nor do we sell tickets at the door.{'\n'}

    ### What is the refund/exchange policy on WDS tickets?{'\n'}
    All WDS tickets are non-refundable.    {'\n'}

    ### How can I transfer a 360 ticket?{'\n'}
    Transfers and name changes are available for a $100 fee from the end of March until May 10th (60 days prior to WDS) and a $200 fee from May 11th until June 10th (30 days prior to WDS). Starting **June 11th, 2017**, no further transfers or name changes will be possible.{'\n'}
    
    <p>You will need the name, email address, and mailing address of the new ticket holder. After entering that information and paying the transfer fee your ticket will be officially transferred to the new person</p>

     <p>Ticket holders can transfer their ticket by:
    Logging into your WDS account and looking for the transfer link at the bottom of the page, or,
       contacting our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link>.</p>
       
    ### Still have additional questions?
     <p>Contact our year-round concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they'll be able to assist you.</p> 
  </Block>
</Section>
<Section color="orange" overflow="hidden">
  <Block margin="60px 0 30px">## Tickets are On Sale!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
    We release WDS tickets for a few weeks each year and now is your chance! Are you ready to be part of an experience that will change your life forever?{'\n'}
  </Block>
  <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter sale="sale_wave2_2017" type="countup" />{'\n'}
  </Block>
  <JoinUsButton />
  <div className="clear" />
</Section>




    </div>
  );

  export default Page;
