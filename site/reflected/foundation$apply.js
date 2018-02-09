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
  headerImage="hero/foundation.jpg"
  headerClip="rl_header"
  headerPosition="center center"
  headerSize="thin"
  color="white"
  preload
>
  <Block cols="6">
    <iframe height="3787" allowTransparency="true" frameborder="0" scrolling="no" style={{width: '100%', border: 'none'}}  src="https://worlddominationsummit.wufoo.com/embed/zq9n4iq0s4da50/"><a href="https://worlddominationsummit.wufoo.com/forms/zq9n4iq0s4da50/">Fill out my Wufoo form!</a></iframe>
  </Block>
</Section>


    </div>
  );

  export default Page;
