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
import Video from '../components/Video/Video';

  
  const Page = () => (
    <div>
      <Section
  headerImage="hero/story.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/story.png" width="429px" height="190px" className="scriptHeader" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Why WDS?{'\n'}
    Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries. A full week of events and an unforgettare than 40 countries. A full week of events and an unforgettable keynote weekend in Portland, Oregon.{'\n'}

    Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the nine to five. A full week of events and an unforgettable keynble keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the nine to five. A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five."{'\n'}
  </Block>
</Section>
<Section color="canvas">
  <Tabs style="dots">
    <Tab title="2016">
      <Image src="art/legacy-2016.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
      <div>
        <Block type="4col">
          ## Year Six{'\n'}
          August 9-14{'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - 6 Days of Community, Service & Adventure{'\n'}
          - Overcoming our fears with =speaker={'\n'}
          - Dancing Jellyfish!{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          WDS Tattoos on stage!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "The best time to build a website is at 4:21AM" -Nicky Hajal{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2016 Photos {'\n'}{'\n'}
          2016 had some great moment, check out the photos!{'\n'}{'\n'}
          <Button to="/academies">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2016 Videos{'\n'}{'\n'}
          2016 had some great moment, check out the videos!{'\n'}{'\n'}
          <Button to="/academies">View Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2015">
      <Image src="art/legacy-2015.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
    </Tab>
    <Tab title="2014">
      <Image src="art/legacy-2014.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
    </Tab>
    <Tab title="2013">
      <Image src="art/legacy-2013.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
    </Tab>
    <Tab title="2012">
      <Image src="art/legacy-2012.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
    </Tab>
    <Tab title="2011">
      <Image src="art/legacy-2011.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
    </Tab>
  </Tabs>
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
