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
import BlockWithLiveLabel from '../../site/containers/BlockWithLiveLabel';
import BookingDetails from '../../site/components/BookingDetails';
import ConnectPurchaseButton from '../../site/components/ConnectPurchaseButton';
import ComparisonTable from '../../site/components/ComparisonTable';

  
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

    ### What's the difference between WDS 360 and Connect tickets?{'\n'}

    <p>WDS 360 is the all-access pass. Connect is a social, interactive part of the WDS experience.</p>
      
    ### How can I get a WDS ticket?

    <p>Tickets for WDS are only offered a couple of times a year, and they go quickly. There is no fast-track or secret process to get a ticket; they are all offered on a first-come, first-served basis. Once tickets are gone, they're gone. We do not hold any tickets back for higher-priced sales later, nor do we sell tickets at the door.</p>

<p><b>Tickets for WDS 2018 are available NOW!</b> Go to the following links to get your <Link to="https://worlddominationsummit.com/join-us">WDS 360 ticket</Link> or <Link to="https://worlddominationsummit.com/connect">Connect ticket.</Link></p>

### I bought a ticket, what do I do next? 

<p>Keep checking your inbox. All communication about the event and specific actions needed from you to prepare you for the event is sent via email. If you are not receiving WDS 2018 emails, please contact our concierge team at concierge@wds.fm and they will be able to assist you.</p>

### What is the refund/cancellation policy for WDS tickets?
    <p>All WDS tickets are <b>non-refundable and cannot be moved to a future year.</b> Only WDS 360 tickets can be transferred to another person for a fee up until May 15th. <i>Please note: Special benefits and perks associated with an original ticket are not transferrable.</i></p> 

    ### How can I transfer a WDS 360 ticket?
    
    <p><b>The deadline to transfer a ticket to another person passed (May 16, 2018). No additional name changes or transfers are permitted.</b> The following information is for reference purposes only.</p>

<p>Once a ticket has been officially "assigned"* to someone that ticket may be transferred to someone else for a $100 fee until May 15th (6 weeks prior to WDS). Starting <b>May 16th, 2018</b>, no further transfers or name changes will be possible.</p>
    
    <p>To transfer your 360 ticket please email our concierge team at concierge@wds.fm for your unique transfer link.</p>

 <p><i>*All WDS tickets are assigned to a specific person using a unique name and email -- this is required for attendance. This process takes place when a ticket is initially purchased (or by a specific date for early-bird ticket purchasers). Transferring a ticket and assigning a ticket are two different processes. Only assigned tickets can be transferred.</i></p>
       
    ### Can I nominate myself or someone I represent to be a speaker?

   <p>We're sure that you or your client would be great! But we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.</p>

    ### Can I sponsor WDS or donate something for your attendees?

    <p>WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.</p>

    ### Can I be a volunteer?
    <p>Every year we recruit a number of volunteer "ambassadors" to serve our attendees during WDS. To apply for this role, you must live in Portland at least most of the year (or have extensive knowledge of the city) and you must be available during the entire weekend for WDS main-events. Special consideration is given to those that are available for the entire week of WDS. Applications are typically available 3-4 months prior to WDS. When applications become available, Chris will make an announcement on his <Link to="http://chrisguillebeau.com/">blog</Link> and through <Link to="https://twitter.com/chrisguillebeau">Twitter.</Link></p> 
   
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
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your 360 Ticket!</Button>
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter type="countup" />{'\n'}
  </Block>
  <JoinUsButton />
  <div className="clear" />
</Section>




    </div>
  );

  export default Page;
