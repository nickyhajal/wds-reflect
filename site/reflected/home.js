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
  headerClip="br:0%,-6%;"
  headerImage="v2/hero/futurehero.png"
  color="canvas"
>
  <Block
    cols="8"
    bleed={false}
    textAlign="left"
    margin="80px 0 80px"
    background="white"
    type="padded"
    padding="80px 120px"
    className="bigger"
    mobile={{tablet: {padding: '50px 40px'}, phone: {padding: '30px 20px'}}}
  >{'\n'}
    <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
      The Future of WDS
    </h2>
Dear WDS Community,{'\n'}

I'm humbled and filled with gratitude when I reflect on all of things we've created and shared together since our first gathering in 2011.{'\n'}

Over the years, our community has grown to **over 10,000 adventurers representing all 50 states and over 40+ countries**.{'\n'}

We've broken world records, learned to Bollywood dance, faced our fears, found true connection, challenged conventionality, and supported each other's dreams.{'\n'}
    
    {' '}{'\n'}
    
    <Image src="future/WDS-Pins.jpg" width="100%" height="541" /><br/>{'\n'}

   At WDS 2018, we announced that we'll produce **two more years of our epic annual gathering.** We just completed 2019 our peultimate, better-than-ultimate year. Next year, WDS 2020 will be our final year. Naturally, not everyone was in attendance at this year's event—so I wanted to explain a bit more about this decision to our entire community.{'\n'}

First up, if you missed this past year's event (WDS 2019) check out this quick highlights video:{'\n'}
  </Block>
<Video placeholder="https://el-files-wds.s3.amazonaws.com/images/WDS-2019-recap-video.jpg" videoId="350010002" cols="8" /> 
   <Block
    cols="8"
    bleed={false}
    textAlign="left"
    margin="80px 0 80px"
    background="white"
    type="padded"
    padding="80px 120px"
    className="bigger"
    mobile={{tablet: {padding: '50px 40px'}, phone: {padding: '30px 20px'}}}
  >{'\n'}
Second, here are some answers to questions we've been asked recently:{'\n'}

**Why is WDS ending?**{'\n'}

Nothing lasts forever. When we started WDS, there wasn't anything like it. Almost every other conference or event was overrun with sponsor logos. Speakers pitched their products from the stage. Swag bags contained junk items that most attendees immediately discarded.{'\n'}

We wanted to make something different, and we succeeded. Now, there are numerous conferences and events that contain elements of the WDS "DNA" in different forms.{'\n'}

Lastly, we want to end on a peak, not just go on forever. We want to celebrate what we've made and look forward to something new.{'\n'}

**Why announce the end two years early?**  {'\n'}
  
Some people just come to WDS because it's a fun experience, or to network, and that's fine. But for others (including many of our team and ambassadors), this gathering has become very special.{'\n'}

Rather than just say "It's over," we wanted people to be able to prepare for the end, and also to join us in finishing well.{'\n'}

<Image src="future/WDS-2015-Waffles-1.jpg" width="100%" height="541" />{'\n'}
  
<Image src="future/WDS-2018-opening-party.jpg" width="100%" height="541" /><br/>{'\n'}
  
**Is WDS being sold?**{'\n'}

Nope. It's not being sold and it's not for sale. For our final year, we'll continue to operate on the same model we've had from the beginning — focusing on the attendee experience while being a non-sponsored, non-commerical event.{'\n'}

**What happens next?**  {'\n'}
  
We're not sure! Two years is a long time. :) There's no secret plan and we want to focus on putting together a fantastic experience for 2020.{'\n'}

**How can I get involved with the final year?**  {'\n'}
  
If WDS has meant something to you in the past, *please plan to return for one final celebration*. As a previous attendee, you know that everyone at the event is a big part of everything. We need you!{'\n'}
  
And if you've stumbled on WDS but have yet to attend... now's the time! Join us to help create and celebrate our final year.  {'\n'}
 
 <Image src="future/2015-Closing-Party-1.jpg" width="100%" height="541" /><br/>{'\n'}
  
WDS was never just about an event. It has been and will forever be about community. It's been an unforgettable story so far—and I truly believe the best is yet to come.{'\n'}

I look forward to celebrating with you next year, and beyond.{'\n'}

To _Community, Adventure,_ and _Service_,{'\n'}

<Image src="future/cg.png" width="15%" height="52" />{'\n'}

Chris Guillebeau{'\n'}

P.S. WDS 2020 tickets will go **on sale soon**, join the wait list using the button or form below.{'\n'}

<Button to="/join-us" fitToText>Join the WDS 2020 Wait List!</Button> 
  
  </Block>
</Section>
<Section color="canvas" burst>
  <Image
    src="v2/headings/join-us-orange.png"
    width="288px"
    height="88px"
    align="center"
    className="join-us-heading"
  />
  <Block margin="50px 0" className="pagematchText">
    ## Join us at WDS 2020{'\n'}
  </Block>
  <Block margin="50px 0">
    ### Be the first to get notified when tickets go on sale next.{'\n'}
  </Block>
  <Block
    width="400px"
    align="center"
    margin="50px 0 0"
    css={{ maxWidth: '400px' }}
  >{'\n'}
    <Form
      list="WDS 2020 Waiting List"
      buttonClassName="pagebutton"
      successMessage="Great, we'll let you know when sales start for WDS 2020!"
      buttonStart="Get Notified"
      buttonProgress="Sending..."
      buttonSuccess="Success!"
    >
      <FormRow>
        <Input
          id="full_name"
          placeholder="Your Full Name"
          style={{ borderColor: '#D2D2D2' }}
        />
      </FormRow>
      <FormRow>
        <Input
          id="email"
          placeholder="Your Email Address"
          style={{ borderColor: '#D2D2D2' }}
        />
      </FormRow>
    </Form>
  </Block>
</Section>;




    </div>
  );

  export default Page;
