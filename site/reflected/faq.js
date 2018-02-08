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
import EventList from '../components/EventList';
import is from '../utils/is';
import Cart from '../../site/containers/Cart/Cart';
import MeetupForm from '../../site/components/MeetupForm';
import PurchaseButton from '../../site/containers/PurchaseButton';

  
  const Page = (props) => (
    <div>
      <Section
  color="sea"
  css={{ marginBottom: '-2px' }}
>
  <Block width="768px" bleed={true} type="padded" background="gray" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
    <Block width="100%" margin="40px 0 0 0" textAlign="center">## FAQs</Block>

    ### What is WDS?{'\n'}

    The World Domination Summit (WDS) is a gathering of creative, interesting people from all over the world. Every summer, thousands of people travel to Portland, Oregon for an immersive experience in life, work, and travel.{'\n'}
    The weekend consists of three primary activities: main-stage events with keynote speakers that are attended by the entire group, workshops that focus on specific topics, and lots of meetups, parties, and informal engagement. Despite the large number of people who attend, WDS is introvert-friendly, and everyone who participates is a big part of the event.{'\n'}
    <p>WDS was founded by <Link to="http://chrisguillebeau.com" target="blank">Chris Guillebeau</Link>, explorer of the world and <i>New York Times</i> bestselling author of <i>The $100 Startup</i>.</p>

    ### Can I nominate myself or someone I represent to be a speaker?{'\n'}

    We're sure that you or your client would be great! But we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.{'\n'}

    ### Can I sponsor WDS or donate something for your attendees?{'\n'}

    WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.{'\n'}

    ### Can I be a volunteer?{'\n'}
    <p>Every year we recruit a number of volunteer "ambassadors" to serve our attendees during WDS. To apply for this role, you must live in Portland at least most of the year (or have extensive knowledge of the city) and you must be available during the entire weekend for WDS main-events. Special consideration is given to those that are available for the entire week of WDS. Applications are typically available 3-4 months prior to WDS. When applications become available, Chris will make an announcement on his <Link to="http://chrisguillebeau.com/">blog</Link> and through <Link to="https://twitter.com/chrisguillebeau">Twitter.</Link></p>

    ### How can I get a ticket?{'\n'}

    <p>Tickets for WDS are only offered a couple of times a year, and they go quickly. There is no fast-track or secret process to get a ticket; they are all offered on a first-come, first-served basis. Once tickets are gone, they're gone. We do not hold any tickets back for higher-priced sales later, nor do we sell tickets at the door.</p>

<p><b>Please Note: Tickets for WDS 2018 will go on sale next February (2018).</b> Sign-up to be notified when tickets go on sale for <Link to="https://worlddominationsummit.com/join-us">WDS 2018 here</Link>.</p>

### I bought a ticket, what do I do next? 

<p>Keep checking your inbox. All communication about the event and specific actions needed from you to prepare you for the event is sent via email. If you are not receiving WDS 2018 emails, please contact our concierge team at concierge@wds.fm and they will be able to assist you.</p>

### What is the refund/cancellation policy for WDS tickets?
    <p>All WDS tickets are <b>non-refundable.</b> Tickets can be transferred to another person for a fee up until May 15th. <i>Please note: Special benefits and perks associated with an original ticket are not transferrable.</i></p> 

    ### How can I transfer a WDS ticket?
    
    <p>Transfers and name changes are available for a $100 fee until April 15th (10 weeks prior to WDS) and a $200 fee from April 16th until May 15th (6 weeks prior to WDS). Starting <b>May 16th, 2018</b>, no further transfers or name changes will be possible.</p>
    
    <p>To transfer your ticket please email our concierge team at concierge@wds.fm for your unique transfer link.</p>
       
    ### Still have additional questions?
     <p>Contact our year-round concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they'll be able to assist you.</p> 
  </Block>
</Section>
<Section color="orange">
<Image src="heading/joinus.png" width="288px" height="88px" align="center" />
<Block margin="50px 0">## Join us at WDS 2018; June 26 - July 2</Block>
<Block margin="50px 0">###  Be the first to get notified when tickets go on sale next.</Block>
<Block width="400px" align="center" margin="50px 0 0" css={{ maxWidth: "400px" }}>
  <Form
    list="WDS 2018 Waiting List"
    successMessage="Great, we'll let you know when sales start for WDS 2018!"
    buttonStart="Get Notified"
    buttonProgress="Sending..."
    buttonSuccess="Success!"
  >
    <FormRow>
      <Input id="full_name" placeholder="Your Full Name" />
    </FormRow>
    <FormRow>
      <Input id="email" placeholder="Your Email Address" />
    </FormRow>
  </Form>
</Block>
</Section>




    </div>
  );

  export default Page;
