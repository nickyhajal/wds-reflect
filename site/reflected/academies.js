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
  headerImage="hero/academies.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/academies.png" width="565px" height="169px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Academies are back for 2018! {'\n'}
At a WDS Academy, you might learn how to travel hack your way to a life-changing travel experience, master the art of telling compelling stories, or develop a winning branding strategy for your business. {'\n'}
You'll have the opportunity to learn something new to help live your _own_ remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going afterward.{'\n'}
  This short video shows more of what it's all about:{'\n'}
  </Block>
<Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" /> 
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
        ## The Details {'\n'}
Registration for Academies is separate from WDS itself and is available to both WDS attendees (at a discounted rate) and to the general public.{'\n'}

- **WDS 360 Attendees:** $29 per Academy{'\n'}
- **Connect Attendees and General Public:** $59 per Academy{'\n'}

(Please note: if you are attending WDS, [log-in to your WDS account](http://worlddominationsummit.com/login) before making your Academy selection){'\n'}
                                                                                                                                              
Each Academy has a limited number of free "Insider Access" seats only available to early-bird alumni ticket holders (folks who purchased at WDS last July). Early-bird ticket holders can only claim **one** of these seats and they are available on a first-come, first-serve basis. If you have access to one of these seats, [log-in to your WDS account](http://worlddominationsummit.com/login) and when you register for your first Academy you'll see it as an option on each Academy page.{'\n'}

There is no limit to how many Academies you can register for, but please note that you can only purchase Academies for yourself. No physical ticket or confirmation will be required upon check-in, just a valid photo ID. Academy tickets are capacity controlled and offered on a first-come, first-served basis. All tickets are **_non-refundable_** and **_non-transferrable_**.{'\n'}

If you have any questions or need any assistance, please contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)**. {'\n'}

<EventList year={18} type="academy" title="WDS 2018 Academies" />{'\n'}
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
We're knocking out the final venue details for these exciting Academies so keep checking back for the most up-to-date information. {'\n'}
    </Block>
</Block></Section>
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
