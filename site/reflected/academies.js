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
  headerImage="hero/academies.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/academies.png" width="565px" height="169px" className="scriptHeader" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## At a WDS Academy{'\n'}
    At a WDS Academy, you might learn how to travel hack your way to the dream trip you&apos;ve always wanted to take, discover the science behind happiness, or begin building greater community. Academies are half-day workshops where you can learn something new that will help you to live your *own* remarkable life story. We bring in top experts from the WDS community to share their knowledge and teach practical skills. The line up always includes a variety of topics, from business to personal development to building tiny houses. It's a great way to lead into the main events of the WDS weekend and keep the conversations going after.{'\n'}
  </Block>
  <Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" />
     <Block cols="6" css={{ padding: '50px 0 20px' }}>
    Academies are the only WDS activity that are also open to the general public, so bring your friends! Tickets are sold a la carte, with special discounts and early access given to WDS ticket holders. {'\n'}
     ## Awesome Past Academies{'\n'}
     A snippet of some of our most popular Academies from previous years:{'\n'}
<Grid>
<Block type="color" color="sea">
## Pro-Blogger Academy{'\n'}
How to level up your blogging game with Darren Rowse and friends{'\n'}
</Block>
<Block type="color" color="orange">
## Launchpad to the World{'\n'}
How to travel hack and use miles and points to achieve your travel dreams with Stephanie Zito{'\n'}
</Block>
<Block type="color" color="green">
## Rejection Academy{'\n'}
How to overcome fear of failure and turn rejection into opportunities with Jia Jiang{'\n'}
</Block>
<Block type="color" color="blue">
## The Science of Happiness{'\n'}
Proven strategies to live happier with Vanessa Van Edwards{'\n'}
</Block>
</Grid>
      </Block>
</Section>
<Section color="green">
  <Block cols="6" css={{ padding: '20px 0 20px' }}>
   ## Academies will return for WDS 2017 with more amazing topics and Academy leaders!{'\n'}
   The list of WDS 2017 Academies will be made available spring 2017 so stay tuned!{'\n'}
 </Block>
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



    </div>
  );

  export default Page;
