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

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="hero/academies.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/academies.png" width="565px" height="169px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Academies will return for 2018! {'\n'}
At a WDS Academy, you might learn how to travel hack your way to a life-changing travel experience, master the art of telling compelling stories, or develop a winning branding strategy for your business. {'\n'}
You'll have the opportunity to learn something new to help live your _own_ remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going afterward.{'\n'}
  This short video shows more of what it's all about:{'\n'}
  </Block>
<Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" /> 
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## The Details {'\n'}
Registration for Academies is separate from WDS itself and is available to both WDS attendees (at a discounted rate) and to the general public.{'\n'}

There is no limit to how many Academies you can register for, but please note that you can only purchase Academies for yourself. No physical ticket or confirmation will be required upon check-in, just a valid photo ID. Academy tickets are capacity controlled and offered on a first-come, first-served basis. All tickets are **_non-refundable_** and **_non-transferrable_**.{'\n'}

If you have any questions or need any assistance, please contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)**.{'\n'}

## Please check back next spring for the full list of 2018 WDS Academies. {'\n'}
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
