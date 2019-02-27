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
  headerImage="v2/hero/academies.png"
  headerClip="rl_header"
  headerPosition="top"
  color="white"
  preload
>
  <Image src="v2/headings/academies.png" width="565px" height="169px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Academies{'\n'}
At a WDS Academy, you might learn how to travel hack your way to a life-changing travel experience, master the art of telling compelling stories, or develop a winning branding strategy for your business. {'\n'}
You'll have the opportunity to learn something new to help live your _own_ remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going afterward.{'\n'}
  This short video shows more of what it's all about:{'\n'}
  </Block>
<Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" /> 
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
        ##  Sorry we missed you for 2018! {'\n'}
  
  _Academies for this year have finished but will return for 2019. Please check back in the spring of 2019 for an all-new scheudle._ {'\n'}

</Block></Section>
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
        <Input id="full_name" placeholder="Your Full Name" style={{borderColor: "#D2D2D2"}} />
      </FormRow>
      <FormRow>
        <Input id="email" placeholder="Your Email Address" style={{borderColor: "#D2D2D2"}} />
      </FormRow>
    </Form>
  </Block>
</Section>




    </div>
  );

  export default Page;
