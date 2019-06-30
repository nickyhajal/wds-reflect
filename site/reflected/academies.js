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
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/academies.png" width="565px" height="169px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Academies are back for 2019! {'\n'}
At a WDS Academy, you might learn how to develop a fulfilling writing practice, build or business through Youtube, or what it's like to build and live in a tiny house. {'\n'}
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
                                                                                                                                              
There is no limit to how many Academies you can register for, but please note that you can only purchase Academies for yourself. No physical ticket or confirmation will be required upon check-in, just a valid photo ID. Academy tickets are capacity controlled and offered on a first-come, first-served basis. All tickets are **_non-refundable_** and **_non-transferrable_**.{'\n'}

If you have any questions or need any assistance, please contact our concierge team at **[concierge@wds.fm](mailto:concierge@wds.fm)**. {'\n'}

</Block>
<EventList year={19} type="academy" title="WDS 2019 Academies" />
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
