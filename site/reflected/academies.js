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
  headerImage="v2/hero/academies.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/academies.png" width="565px" height="169px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Academies will be back with an all-star lineup! {'\n'}
At a WDS Academy, you might learn how to develop a fulfilling writing practice, build or business through Youtube, or what it's like to build and live in a tiny house. {'\n'}
You'll have the opportunity to learn something new to help live your _own_ remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going afterward.{'\n'}
  This short video shows more of what it's all about:{'\n'}
  </Block>
<Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" /> 
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
        ## The Details{'\n'}
**All information here is subject to change.** Please use as reference information only until Academies for WDS X are officially announced: Registration for Academies is separate from WDS itself and is available to both WDS attendees (at a discounted rate) and to the general public.{'\n'}

- **WDS Attendees:** $29 (early bird) --> $49 per Academy{'\n'}
- **General Public:** $49 (early bird) --> $69 per Academy{'\n'}

(Please note: if you are attending WDS, [log-in to your WDS account](http://worlddominationsummit.com/login) before making your Academy selection){'\n'}
                                                                                                                                              
There is no limit to how many Academies you can register for, but please note that you can only purchase Academies for yourself. No physical ticket or confirmation will be required upon check-in, just a valid photo ID. Academy tickets are capacity controlled and offered on a first-come, first-served basis. All tickets are **_non-refundable_** and **_non-transferrable_**.{'\n'}

If you have any questions or need any assistance, please contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)**. {'\n'}

</Block>
<EventList year={20} type="academy" title="WDS X Academy Schedule (full list coming soon)" />
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
