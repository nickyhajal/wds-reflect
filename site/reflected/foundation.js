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
  headerImage="hero/foundation.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/foundation.png" width="470px" height="165px" className="scriptHeader" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## The WDS Foundation{'\n'}
    The WDS Foundation seeks to put the right resources in the hands of amazing people who are acting on the three core values of WDS—community, adventure, and service.{'\n'}

    We do this by providing what we call "Scholarships For Real Life." The goal of these scholarships is to empower individuals to pursue their dreams and impact their community.{'\n'}

    Have a crazy project you want to bring to life? Want to take a trip around the earth and share what you learned with the world? Trying to build something that’s a bit out of your reach? Whatever it is, the WDS Foundation can help fund it. We look for inspiring projects that will improve your life and make the world a better place.{'\n'}
  </Block>
</Section>
<Section color="canvas">
  <Block>## Featured Project</Block>
  <Tabs style="dots">
    <Tab title="2016">
      <Image src="photos/foundation2016.jpg" width="904" height="549" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
        ## Emily Wray{'\n'}

        One of the cornerstones of the World Domination Summit is adventure, and WDS attendees certainly know how to celebrate living unconventionally. Many of us are driven by the journey, and enjoy striking out on our own in search of new opportunities and experiences. Yet, we also know and appreciate the value of community—having someone to share the ups and downs of our journey and to help us reflect on what we’ve learned. It is this combination of adventure and community that brings us back each July for the World Domination Summit, and also the motivation for this blog post.opportunity to learn something new to help you live your own remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going after.{'\n'}
      </Block>
    </Tab>
    <Tab title="2015">
      <Image src="http://imgs.wds.fm/foundation_emily.jpg" width="904" height="549" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
        ## Emily Wray{'\n'}

        One of the cornerstones of the World Domination Summit is adventure, and WDS attendees certainly know how to celebrate living unconventionally. Many of us are driven by the journey, and enjoy striking out on our own in search of new opportunities and experiences. Yet, we also know and appreciate the value of community—having someone to share the ups and downs of our journey and to help us reflect on what we’ve learned. It is this combination of adventure and community that brings us back each July for the World Domination Summit, and also the motivation for this blog post.opportunity to learn something new to help you live your own remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going after.{'\n'}
      </Block>
    </Tab>
    <Tab title="2014">
      <Image src="http://imgs.wds.fm/foundation_valerie.jpg" width="904" height="549" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
        ## Emily Wray{'\n'}

        One of the cornerstones of the World Domination Summit is adventure, and WDS attendees certainly know how to celebrate living unconventionally. Many of us are driven by the journey, and enjoy striking out on our own in search of new opportunities and experiences. Yet, we also know and appreciate the value of community—having someone to share the ups and downs of our journey and to help us reflect on what we’ve learned. It is this combination of adventure and community that brings us back each July for the World Domination Summit, and also the motivation for this blog post.opportunity to learn something new to help you live your own remarkable life story. It's a great way to lead into the main events of the WDS weekend and keep the conversations going after.{'\n'}
      </Block>
    </Tab>
  </Tabs>
  <div class="clear" />
</Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## Selection Criteria{'\n'}
    Our selection committee will be looking at a number of factors to determine which projects best fit with our current goals.{'\n'}
  </Block>
  <Grid>
    <Block type="color" color="blue">
      ### Fit{'\n'}
      - Does the project serve others and create community?{'\n'}
      - What is the applicant’s experience with the identified problem and community involved?{'\n'}
      - Has the applicant identified a list of goals to complete the project?{'\n'}
    </Block>
    <Block type="color" color="orange">
      ### Implementation{'\n'}
      - Does the project serve others and create community?{'\n'}
      - What is the applicant’s experience with the identified problem and community involved?{'\n'}
      - Has the applicant identified a list of goals to complete the project?{'\n'}
    </Block>
    <Block type="color" color="green">
      ### Sustainability{'\n'}
      - Does the project serve others and create community?{'\n'}
      - What is the applicant’s experience with the identified problem and community involved?{'\n'}
      - Has the applicant identified a list of goals to complete the project?{'\n'}
    </Block>
  </Grid>
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## I'm in! How do I apply?{'\n'}
    Currently the "Scholarships for Real Life" program is open only to those who have attended one of our past five WDS events. If this is your first year attending the World Domination Summit, you will be eligible to apply in 2017.{'\n'}
    ##### Eligibility{'\n'}
   Currently the "Scholarships for Real Life" program is open only to those who have attended one of our past five WDS events. If this is your first year attending the World Domination Summit, you will be eligible to apply in 2017.{'\n'}
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
