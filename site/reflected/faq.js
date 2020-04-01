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
import PersonScroller from '../components/PersonScroller/PersonScroller';
import Testimonials from '../components/Testimonials/Testimonials';
import TicketCounter from '../../site/components/TicketCounter/TicketCounter';
import WordQuestion from '../../site/components/WordQuestion/WordQuestion';
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
import YearReviews from '../../site/components/YearReviews';

  
  const Page = (props) => (
    <div>
      <Section
  color="sea"
  css={{ marginBottom: '-2px' }}
>
  <Block width="768px" bleed={true} type="padded" background="gray" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
    <Block width="100%" margin="40px 0 0 0" textAlign="center">## FAQs</Block>

    ### What is WDS?{'\n'}

    The World Domination Summit (WDS) is a gathering of creative, interesting, and remarkable people from all over the world. Every summer, more than one thousand people travel to Portland, Oregon for an immersive experience in life, work, and travel.{'\n'}
    The almost week-long event consists of three primary activities: main-stage events with keynote speakers that are attended by the entire group, workshops that focus on specific topics, and lots of meetups, parties, and informal engagement. Despite the large number of people who attend, WDS is introvert-friendly, and everyone who participates is a big part of the event.{'\n'}
    <p>WDS was founded by <Link to="http://chrisguillebeau.com" target="blank">Chris Guillebeau</Link>, explorer of the world and <i>New York Times</i> bestselling author of <i>The $100 Startup</i>.</p>

   ### When is the next WDS? {'\n'}
      
   **WDS 2020 (our final year!)** will take place from Tueday, June 23th until June 29th, 2020. The main events takes place over the WDS weekend, June 26th to June 28th.  {'\n'}
   
   ### How can I get a WDS ticket?{'\n'}

   <p><b>Tickets for WDS 2020 have sold out!</b> If you're still looking for a ticket, please contact our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> to learn what options might exist to attend WDS.</p>

  ### Do you offer a payment plan for tickets?{'\n'}

<p>Yes! For the next sale, the first initial payment is <b>$95</b>, followed by <b>three payments of $204</b> for a total of <b>$707</b>. <b>All payments are non-refundable</b>, and you can pay for up to three tickets using a payment plan. To review the full terms and conditions of the WDS payment plan <Link to="https://worlddominationsummit.com/payment-plan-terms-and-conditions">click here.</Link></p>

### I've purchased a WDS ticket, what do I do next? {'\n'}

<p>Keep checking your inbox. All communication about the event and specific actions needed from you to prepare you for the event is sent via email. If you are not receiving WDS 2020 emails, please contact our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they will be able to assist you.</p>

### What is the refund/cancellation policy for WDS tickets?{'\n'}
    <p>All WDS tickets are <b>non-refundable.</b></p> 

    ### Can I transfer a WDS ticket to someone else?{'\n'}

<p>Once a ticket has been officially "assigned"* to someone that ticket may be transferred to someone else for a $100 fee until May 17th (6 weeks prior to WDS). Starting <b>May 18th, 2020</b>, no further transfers or name changes will be possible. <i>Please note: Special benefits and perks associated with an original ticket are not transferrable.</i></p>
    
    <p>To transfer your WDS ticket please email our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> for your unique transfer link.</p>

 <p><i>*All WDS tickets are assigned to a specific person using a unique name and email -- this is required for attendance. This process takes place when a ticket is initially purchased (or by a specific date for early-bird ticket purchasers). Transferring a ticket and assigning a ticket are two different processes. Only assigned tickets can be transferred.</i></p>
       
    ### Can I nominate myself or someone I represent to be a speaker?{'\n'}

   <p>We're sure that you or your client would be great! ... but we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.</p>

    ### Can I sponsor WDS or donate something for your attendees?

    <p>WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.</p>

    ### Can I be a volunteer?
    <p>Every year we recruit a number of volunteer "ambassadors" to serve our attendees during WDS. To apply for this role, you must be a champion in helping attendees have an amazing experience, have extensive knowledge of Portland, and be available during the entire weekend for WDS main-events. Special consideration is given to those that are available for the entire week of WDS. Applications are typically available 3-4 months prior to WDS. Email our team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> to get notified when applications become available.</p> 
   
   ### Still have additional questions?
     <p>Contact our year-round concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they'll be able to assist you.</p> 
  </Block>
</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
  The WDS 2020 ticket sale didn’t last a single day... we’re now at full capacity with no more tickets available.{'\n'}
  </Block>
  {/* <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button> */}
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter type="countup" />{'\n'}
  </Block>
  {/* <JoinUsButton /> */}
  <div className="clear" />
</Section>




    </div>
  );

  export default Page;
