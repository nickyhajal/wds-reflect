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
  headerImage="hero/schedule.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/schedule.png" width="421" height="151" className="scriptHeader" />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px' }} clip="top_lr_1.6">
    ## A WDS Week of 2017{'\n'}

    - **Tuesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Wednesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Thursday** Academies, Small Group Activities, and Attendee-Led Meetups{'\n'}
    <li><b className="highlight highlight-1">Friday</b> Big Adventure, Academies, Opening Party</li>
    <li><b className="highlight highlight-2">Saturday</b> Main Stage Keynotes, Evening Activities</li>
    <li><b className="highlight highlight-3">Sunday</b> Main Stage Keynotes, Closing Party</li>
    - **Monday** Academies and Attendee-Led Meetups{'\n'}
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
