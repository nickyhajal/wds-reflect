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
  headerVideo="184868405"
  headerImage="hero/balls.jpg"
  headerClip="lr_header"
  color="canvas"
>
  <Image src="heading/weekend.png" width="819px" height="217px" align="center" />
  <Block cols="6" bleed={false} align="center" textAlign="center" margin="50px 0 20px">
    #### A full week of activities and an unforgettable main-stage weekend in Portland, Oregon. Learn from unconventional thinkers, aquire powerful new skills, and go away with an all-new community of friends and supporters.{'\n'}
  </Block>
</Section>
<Section color="white" css={{ padding: '90px 0 230px 0' }}>
  <Block width="600px" css={{ color: 'orange' }}>
    <h2 style={{ marginBottom: '4px' }}>World Domination Summit 2017:</h2>
    ## July 10 - 16, 2017 in Portland, Oregon{'\n'}
  </Block>
  <Block cols="6" className="bigger">

    Since 2011, WDS has brought together more than 10,000 people from more than forty countries. As adventurers from all walks of life, our mission is to create a remarkable community that helps each person pursue a big dream. {'\n'}

    With discussions and activities on topics like how to live a good life, travel hacking your way around the globe, and writing your first book, it’s an experience like no other.{'\n'}
    
    We’re doing it again in 2017, and all that’s missing is YOU!{'\n'}
  </Block>
</Section>
<Section color="green" css={{ padding: '90px 0 230px 0' }}>
  <Grid>
    <Block type="padded" width="550" height="240" anchor="right" background="sea" feed="twitter" refresh="12" margin="-235px 0 0 0">I started my day breaking a world record and ended it enjoying time with some of the coolest people on the planet. Nothing better. #WDS2015</Block>
  </Grid>
  <div className="clear"></div>
  <Image src="photos/people.jpg" width="426" height="263" margin="-120px 0 -80px -50px" />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="has-checklist" css={{ padding: '60px 40px' }} clip="top_lr_1.6">
    ## A WDS Weekend Includes:{'\n'}

    - All access pass to main stage keynotes on Saturday & Sunday{'\n'}
    - Access to your choice of more than 150+ themed meetups all over the city (or host your own!){'\n'}
    - Ability to connect with attendees and RSVP to your choice of activities through the WDS App{'\n'}
    - Discounted registration for any of the 12 half-day Academies taking place before and after the weekend{'\n'}
    - Discounted and priority hotel registration, including the chance to stay at the new WDS Hotel™{'\n'}
    - Entrance to the Opening & Closing Parties{'\n'}
    - A special community that will support you for life{'\n'}
  </Block>
</Section>
<Testimonials />
<Section color="white" clip="tr:0,3%;" margin="-70px 0 0 0">
  <Block cols="6" css={{ marginBottom: '96px' }} className="bigger" css={{ paddingTop: '80px' }}>
    ## Take the Tour{'\n'}

    Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries. Our mission is to explore community, to undertake an adventure, and to be of service to all those around us.{'\n'}
  </Block>
  <div>
    <Block type="image" src="photos/schedule.jpg">
      ## The Schedule{'\n'}
      With literally hundreds of activities taking place during WDS week, you won't be bored. (But we'll also have suggestions, so you won't be overwhelmed.){'\n'}
      <Button to="/schedule">See the Details</Button>
    </Block>
    <Block type="image" src="photos/happening.jpg">
      ## Happening in Portland, OR{'\n'}
     A creative, welcoming city with anything you could possibly want to eat.{'\n'}
      <Button to="/location">Learn About Portland</Button>
    </Block>
    <Block type="image" src="photos/academies.jpg">
      ## Academies{'\n'}
      Intensive, half-day sessions on focused topics. Learn from alumni speakers and other community leaders.{'\n'}
      <Button to="/academies">Select Your Favorites</Button>
    </Block>
    <Block type="image" src="photos/foundation.jpg">
      ## WDS Foundations{'\n'}
Profits from WDS go to our "Scholarships for Real Life" foundation, a 501(c)(3) charity that provides microgrants in support of bold projects. <Button to="/academies">Learn More</Button>
    </Block>
  </div>
  <div className="clear" />
  <Block>## And lots more!</Block>
  <Tabs>
    <Tab title="Activity Highlights" color="blue" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" anchor="left" />
     
        Community, adventure, and service: for one week (or just a weekend if you prefer), you’ll be surrounded by like-minded people interested in pursuing big dreams and building a better world. 

           </Tab>
    <Tab title="Attendee Meetups" color="sea" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
Meetups aren't led by WDS team members—they're led by your fellow attendees! Our attendee-only app will guide you to your choice of meetups happening all over town from morning to night.    </Tab>
    <Tab title="Events" color="green" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
        From an Opening Party that gives you a chance to meet the team, speakers, and other attendees, all the way through to an epic Closing Party, we’ve crafted an immersive experience.
    </Tab>
    <Tab title="Speakers" color="orange" layout="imageLeft">
      <Image src="photos/tab-zach.png" width="348px" height="324px" />
Our keynote speakers are bestselling authors, leading activists, and in-demand storytellers. Since our very first year in 2011, the lineup has been inclusive, multicultural, and representative of our whole community. 
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
    ## Tell a Friend{'\n'}
    Spread the word! Great things are even better when they’re shared with friends.{'\n'}
    <Button modal="tellAFriend" width="184px" align="center">Share the Love</Button>
  </Block>
  <Image src="art/friends.png" width="286px" height="201px" margin="-120px 0 -60px" />
</Section>




    </div>
  );

  export default Page;
