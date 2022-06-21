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
import WdsTitle from '../../site/components/WdsTitle';

  
  const Page = (props) => (
    <div>
      <Section
  color="sea"
  css={{ marginBottom: '-2px' }}
>
  <Block width="768px" bleed={true} type="padded" background="gray" textAlign="left" margin="60px 0 80px" clip="tr:0,1%;">
    <Block width="100%" margin="40px 0 0 0" textAlign="center">## FAQs</Block>

    ### What is WDS?{'\n'}

    The World Domination Summit (WDS) is a gathering of creative, interesting, and remarkable people from all over the world. Every summer, more than one thousand people travel to Portland, Oregon for an immersive experience in life, work, and travel.  {'\n'}
    
    The almost week-long event consists of three primary activities: main-stage events with keynote speakers that are attended by the entire group, workshops that focus on specific topics, and lots of meetups, parties, and informal engagement. Despite the large number of people who attend, WDS is introvert-friendly, and everyone who participates is a big part of the event.  {'\n'}
    
    WDS was founded by **[Chris Guillebeau](http://chrisguillebeau.com)**, explorer of the world and _New York Times_ bestselling author of _The $100 Startup_.{'\n'}

   ### When is the next WDS? {'\n'}
      
   WDS will return June 2022 and has been renamed to WDS X to celerbate our 10th WDS.  {'\n'}
   
   ### Can I get a WDS X ticket?  {'\n'}
   
   WDS X is now **SOLD OUT** but there's still a chance to attend WDS. Contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)** for options.{'\n'}
                                                                                                                              
### I've purchased a WDS ticket, what do I do next?  {'\n'}

Keep checking your inbox. All communication about the event and specific actions needed from you to prepare you for the event is sent via email. Additionally, check out this helpful, **[step-by-step guide](https://worlddominationsummit.com/guide)**.{'\n'}
    
    ### What is your COVID-19 policy?  {'\n'}
    
       Please view this **[page](https://worlddominationsummit.com/covid)** for the most up-to-date information.{'\n'}

    
     ### Do you offer a payment plan for tickets?  {'\n'}
  
Yes, we did when tickets were available. To review the full terms and conditions of the WDS payment plan **[click here](https://worlddominationsummit.com/payment-plan-terms-and-conditions)**.  {'\n'}

### What is the refund/cancellation policy for WDS tickets?  {'\n'}

All WDS tickets are **non-refundable.** To review the full terms and conditions of the WDS tickets **[click here](https://worlddominationsummit.com/ticket-terms-and-conditions)**.{'\n'}

    ### Can I transfer a WDS ticket to someone else?  {'\n'}

  Yes (though we'll miss you). Contact our Concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)** and provide the name, email, and mailing address of the person you’re transferring your ticket to.  **The last day to complete all transfers is May 12, 2022** (40 days prior to WDS).  {'\n'}
                                                                                                                       
       
    ### Can I nominate myself or someone I represent to be a speaker?  {'\n'}
    
    We're sure that you or your client would be great! ... but we do not accept nominations for speakers. Everyone who attends WDS is a big part of everything. Current year speakers are nominated by alumni speakers from previous years.{'\n'}

    ### Can I sponsor WDS or donate something for your attendees?  {'\n'}
    
    WDS is a sponsor-free, non-commercial gathering. We do not accept advertising or sponsored products.{'\n'}

    ### Can I be a volunteer?  {'\n'}
    
    Every year we recruit a number of volunteer “Ambassadors” to serve our attendees during WDS. To apply for this role, you must be a champion in helping attendees have an amazing experience, have extensive knowledge of Portland, and be available during the entire weekend for WDS main-events. Special consideration is given to those that are available for the entire week of WDS. Please apply at **[this page](https://worlddominationsummit.com/ambassadors)**. Priority deadline is March 15, 2022 but we’ll continue to accept applications as long as the application is live!{'\n'}
   
   ### Still have additional questions?  {'\n'}
   
   Contact our year-round concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)** and they'll be able to assist you. {'\n'}
  </Block>
</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS X Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
  The WDS ticket sale didn’t last long... we’re now at full capacity with no more tickets available.{'\n'}
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
