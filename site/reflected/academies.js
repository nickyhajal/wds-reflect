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
    ## WDS Academies are back in 2017! {'\n'}
At a WDS Academy, you might learn how to travel hack your way to a life-changing travel experience, master the art of telling compelling stories, or develop a winning branding strategy for your business. {'\n'}
You'll have the opportunity to learn something new to help live your _own_ remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going afterward.{'\n'}
  This short video shows more of what it's all about:{'\n'}
  </Block>
<Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" /> 
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## The Details {'\n'}
Registration for Academies is separate from WDS itself and is available to both WDS attendees (at a discounted rate) and to the general public.{'\n'}

- **WDS Attendees:** $29 per Academy{'\n'}
- **General Public:** $59 per Academy{'\n'}

(Please note: if you are attending WDS, [log-in to your WDS account](http://worlddominationsummit.com/login) before making your Academy selection){'\n'}
                                                                                                                                              
Each Academy has a limited number of free "Insider Access" seats only available to early-bird alumni ticket holders (folks who purchased at WDS last August). Early-bird ticket holders can only claim **one** of these seats and they are available on a first-come, first-serve basis. If you have access to one of these seats, [log-in to your WDS account](http://worlddominationsummit.com/login) and when you register for your first Academy you'll see it as an option on each Academy page.{'\n'}

There is no limit to how many Academies you can register for, but please note that you can only purchase Academies for yourself. No physical ticket or confirmation will be required upon check-in, just a valid photo ID. Academy tickets are capacity controlled and offered on a first-come, first-served basis. All tickets are **_non-refundable_** and **_non-transferrable_**.{'\n'}

If you have any questions or need any assistance, please contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)**.{'\n'}
    </Block>
  <EventList year="17" type="academy" title="WDS 2017 Academies" />
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## More Academies Coming Soon! {'\n'}
We're knocking out the final details for a couple more exciting Academies so keep checking back for the most up-to-date schedule. {'\n'}
  </Block>
</Section>
<Section color="orange">
  <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
  <Block margin="50px 0">## Tickets are sold out!</Block>
  <Block margin="50px 0">### Join us at WDS 2018</Block>
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
