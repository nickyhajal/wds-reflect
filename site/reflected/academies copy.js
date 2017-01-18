import React from 'react';
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
    At a WDS Academy, you might learn how to travel hack your way to the dream trip you&apos;ve always wanted to take, discover the science behind happiness, or begin building greater community. You&apos;ll have the opportunity to learn something new to help you live your own remarkable life story. It&apos;s a great way to lead into the main events of the WDS weekend and keep the conversations going after.{'\n'}
  </Block>
  <Video placeholder="photos/academies2.jpg" videoId="121164251" cols="8" />
</Section>
<Section color="green">
  <Block cols="6" css={{ padding: '50px 0 20px' }}>
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
      list="waitlist"
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
