import React from 'react';
import Link from '../components/Link/Link';
import Section from '../components/Section/Section';
import Image from '../components/Image/Image';
import Block from '../components/Block/Block';
import Tabs from '../components/Tabs/Tabs';
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
import is from '../utils/is';

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="hero/schedule.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/schedule.png" width="421" height="151" className="scriptHeader" preload/>
  <Image src="photos/audience.png"
    width="426" height="263"
    margin="0 0 -100px -50px"
    mobile={{ phone: { margin: '0 0 -100px -20px', width: '100%' } }}
    preload
  />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px', position: 'relative', zIndex:'4' }} clip="top_lr_1.6">
    ## A Week of WDS: July 11th - 17th, 2017{'\n'}

    - **Tuesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Wednesday** Academies, Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Thursday** Academies, Small Group Activities, and Attendee-Led Meetups{'\n'}
    <li><b className="highlight highlight-2">Friday</b> Big Adventure, Academies, Opening Party</li>
    <li><b className="highlight highlight-2">Saturday</b> Main Stage Keynotes, Evening Activities</li>
    <li><b className="highlight highlight-3">Sunday</b> Main Stage Keynotes, Closing Party</li>
    - **Monday** Academies and Attendee-Led Meetups{'\n'}
      <i>Can't come for the whole time? No problem, but you don't want to miss the main events taking place on Friday, Saturday, and Sunday. For the best possible WDS experience we recommend arriving no later than Thursday evening, and leaving no earlier than Monday morning.</i>
  </Block>
  <Image src="photos/jellyfish.png" width="426" height="263" margin="-50px -60px 100px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />{'\n'}
  <div className="clear" />{'\n'}
  <SpeakerList title="Alumni Speakers" />{'\n'}
  <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/Portland-Oregon.png">
      ## Portland{'\n'}
      Our home base since year one. Learn more about our beloved city and confirm whether or not all the fun things you've heard is true (they probably are).{'\n'}
      <Button to="/location">Learn More</Button>
    </Block>
    <Block type="image" src="photos/JoinUs/image-academies.jpg">
      ## Academies{'\n'}
      These half-day workshops feature some of our favorite alumni speakers and select WDS community members that are experts in their fields.{'\n'}
      <Button to="/academies">Learn More</Button>
    </Block>
  </Grid>
  <Block type="padded" background="sea">
    <Image src="icon/outline-bed.png" width="101" height="78"  align="center" margin="0 0 40px 0" />{'\n'}
    <Block cols="5">
      ## Highly Sensitive Person Lounge{'\n'}
      Big events with lots of people can sometimes be overwhelming. We get that because we feel that way too! Since the very first WDS we've provided a dedicated quiet space with hammocks and masseuses for attendees to break away, relax, and recharge.{'\n'}
    </Block>
  </Block>
</Section>
<Section color="orange" overflow="hidden">
  <Block margin="60px 0 30px">## Tickets are On Sale!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
    We release WDS tickets for a few weeks each year and now is your chance! Are you ready to be part of an experience that will change your life forever?{'\n'}
  </Block>
  <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter sale="sale_wave1_2017" type="countup" />{'\n'}
  </Block>
  <JoinUsButton />
  <div className="clear" />
</Section>



    </div>
  );

  export default Page;
