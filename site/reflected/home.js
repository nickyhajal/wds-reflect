import React from 'react';
import { Link } from 'react-router';
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

  
  const Page = () => (
    <div>
      <Section
  headerVideo="//player.vimeo.com/video/184868405?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1"
  headerImage="hero/balls.jpg"
  headerClip="lr_header"
  color="canvas"
>
  <Image src="heading/weekend.png" width="819px" height="217px" align="center" />
  <Block cols="6" bleed={false} align="center" textAlign="center" margin="50px 0 20px">
    #### A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five.”{'\n'}
  </Block>
</Section>
<Section color="white">
  <Block width="600px" css={{ color: 'orange' }}>
    <h2 style={{ marginBottom: '4px' }}>World Domination Summit 2017:</h2>
    ## July 10 - 16, 2017 in Portland, Oregon{'\n'}
  </Block>
  <Block cols="6" className="bigger">

    Since 2011, WDS has brought together more than 10,000 people from more than forty countries. As adventurers from all walks of life, our mission is to create a remarkable community, challenge conventions, and empower each other to break down barriers and achieve dreams.{'\n'}

    With discussions and activities on topics like living stress free, travel-hacking your way around the globe, and launching your first book, it’s an experience like no other.{'\n'}
    
    We’re doing it again in 2017, and all that’s missing is YOU!{'\n'}
  </Block>
</Section>
<Section color="green" css={{ padding: '90px 0 230px 0' }}>
  <Block type="padded" cols="6" bleed={false} background="canvas" className="has-checklist" css={{ padding: '60px 40px' }} clip="top_lr_1.6">
    ## A WDS Weekend Includes:{'\n'}

    - All access pass to main stage keynotes on Saturday & Sunday{'\n'}
    - Access to your choice of more than 150+ themed meetups all over the city (or host your own!){'\n'}
    - Ability to connect with attendees and RSVP to your choice of activities through the WDS App{'\n'}
    - Discounted registration for any of the 12 Academies taking place before and after the weekend{'\n'}
    - Discounted and priority hotel registration, including the chance to stay at the new WDS Hotel™{'\n'}
    - Entrance to the Opening & Closing Parties{'\n'}
    - A special community that will support you for life{'\n'}
  </Block>
</Section>
<Testimonials />
<Section color="white">
  <Block cols="6" css={{ marginBottom: '96px' }} className="bigger">
    ## Take the Tour{'\n'}

    Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries. Our mission is to explore community, to undertake an adventure, and to be of service to all those around us.{'\n'}
  </Block>
  <div>
    <Block type="image" src="photos/schedule.jpg">
      ## The Schedule{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.{'\n'}
      <Button to="/schedule">Get the Juicy Details</Button>
    </Block>
    <Block type="image" src="photos/happening.jpg">
      ## Happening in Portland, OR{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.{'\n'}
      <Button to="/location">Learn About Portland</Button>
    </Block>
    <Block type="image" src="photos/academies.jpg">
      ## Academies{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.{'\n'}
      <Button to="/academies">See Them All</Button>
    </Block>
    <Block type="image" src="photos/foundation.jpg">
      ## WDS Foundations{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.{'\n'}
      <Button to="/academies">Tell Me More</Button>
    </Block>
  </div>
  <div className="clear" />
  <Block>## And lots more!</Block>
  <Tabs>
    <Tab title="Activity Highlights" color="blue" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" anchor="left" />
      As WE gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers. As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers.
    </Tab>
    <Tab title="Attendee Meetups" color="sea" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
      As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers. As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers.
    </Tab>
    <Tab title="Events" color="green" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
      As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers. As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers.
    </Tab>
    <Tab title="Speakers" color="orange" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
      As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers. As we gather to begin WDS weekend, our Friday night Opening Party gives you a chance to meet the team, speakers.
    </Tab>
  </Tabs>
</Section>
<Section color="orange">
  <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
  <Block margin="50px 0">## Tickets go on sale again in:</Block>
  <Counter format="calendar" to="ticket-sale" />
  <Block width="400px" align="center" margin="50px 0 0">
    <Form
      list="WDS 2017 Waiting List"
      successMessage="Great, we'll let you know when sales start!"
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

<Section color="green" clip="top_lr_2.6" margin="-22px 0 0">
  <Block margin="50px 0" width="420px">
    ## Tell a Buddy{'\n'}
    Bring a buddy! Great things are better when they’re shared with friends.{'\n'}
    <Button open="tellAFriend" width="184px" align="center">Share the Love</Button>
  </Block>
  <Image src="art/friends.png" width="286px" height="201px" margin="-120px 0 -60px" />
</Section>




    </div>
  );

  export default Page;
