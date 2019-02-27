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

    The World Domination Summit (WDS) is a gathering of creative, interesting people from all over the world. Every summer, thousands of people travel to Portland, Oregon for an immersive experience in life, work, and travel.{'\n'}
    The weekend consists of three primary activities: main-stage events with keynote speakers that are attended by the entire group, workshops that focus on specific topics, and lots of meetups, parties, and informal engagement. Despite the large number of people who attend, WDS is introvert-friendly, and everyone who participates is a big part of the event.{'\n'}
    <p>WDS was founded by <Link to="http://chrisguillebeau.com" target="blank">Chris Guillebeau</Link>, explorer of the world and <i>New York Times</i> bestselling author of <i>The $100 Startup</i>.</p>

   ### When is the next WDS? {'\n'}
      
   WDS 2019 will take place from June 25th until July 1st, 2019. The main events takes place over the WDS weekend, June 28th to June 30th.  {'\n'}
   
   ### How can I get a WDS ticket?{'\n'}

    <p>Tickets for WDS are only offered a couple of times a year, and they go quickly. There is no fast-track or secret process to get a ticket; they are all offered on a first-come, first-served basis. Once tickets are gone, they're gone. We do not hold any tickets back for higher-priced sales later, nor do we sell tickets at the door.</p>

<p><b>Tickets for WDS 2019 will go on sale again soon!</b> To be the first to be notified when tickets go on sale next, join the official waitlist: <Link to="http://madmimi.com/signups/aea67a30548f4ac1a00b9e5b1f15efa3/join">WDS 2019 Waitlist.</Link></p>

  ### Do you offer a payment plan for tickets?

<p>Yes! For the next sale (starting March 4th), the first initial payment is <b>$95</b>, followed by <b>three payments of $204</b> for a total of <b>$707</b>. <b>All payments are non-refundable</b>, and you can pay for up to 3 tickets using a payment plan. To review the full terms and conditions of the WDS payment plan <Link to="https://worlddominationsummit.com/payment-plan-terms-and-conditions">click here.</Link></p>

### I've purchased a WDS ticket, what do I do next? 

<p>Keep checking your inbox. All communication about the event and specific actions needed from you to prepare you for the event is sent via email. If you are not receiving WDS 2019 emails, please contact our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they will be able to assist you.</p>

### What is the refund/cancellation policy for WDS tickets?
    <p>All WDS tickets are <b>non-refundable.</b></p> 

    ### Can I transfer a WDS ticket to someone else?

<p>Once a ticket has been officially "assigned"* to someone that ticket may be transferred to someone else for a $100 fee until May 17th (6 weeks prior to WDS). Starting <b>May 18th, 2019</b>, no further transfers or name changes will be possible. <i>Please note: Special benefits and perks associated with an original ticket are not transferrable.</i></p>
    
    <p>To transfer your WDS ticket please email our concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> for your unique transfer link.</p>

 <p><i>*All WDS tickets are assigned to a specific person using a unique name and email -- this is required for attendance. This process takes place when a ticket is initially purchased (or by a specific date for early-bird ticket purchasers). Transferring a ticket and assigning a ticket are two different processes. Only assigned tickets can be transferred.</i></p>
       
    ### Can I nominate myself or someone I represent to be a speaker?

   <p>We're sure that you or your client would be great but we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.</p>

    ### Can I sponsor WDS or donate something for your attendees?

    <p>WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.</p>

    ### Can I be a volunteer?
    <p>Every year we recruit a number of volunteer "ambassadors" to serve our attendees during WDS. To apply for this role, you must be a champion in helping attendees have an amazing experience, have extensive knowledge of Portland, and be available during the entire weekend for WDS main-events. Special consideration is given to those that are available for the entire week of WDS. Applications are typically available 3-4 months prior to WDS. Email our team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> to get notified when applications become available.</p> 
   
   ### Still have additional questions?
     <p>Contact our year-round concierge team at <Link to="mailto:concierge@wds.fm">concierge@wds.fm</Link> and they'll be able to assist you.</p> 
  </Block>
</Section>
<Section color="canvas" burst>
  <Image src="v2/headings/join-us-orange.png" width="288px" height="88px" align="center" className="join-us-heading" />
  <Block margin="50px 0" className="pagematchText">## Join us at WDS 2019; June 25 - July 1</Block>
  <Block margin="50px 0">
    ### Be the first to get notified when tickets go on sale next.{'\n'}
  </Block>
  <Block width="400px" align="center" margin="50px 0 0" css={{ maxWidth: '400px' }}
  >{'\n'}
    <Form list="WDS 2019 Waiting List" buttonClassName="pagebutton" successMessage="Great, we'll let you know when sales start for WDS 2019!" buttonStart="Get Notified" buttonProgress="Sending..." buttonSuccess="Success!"
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
