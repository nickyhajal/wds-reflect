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
  headerImage="hero/story.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/story.png" width="429px" height="190px" className="scriptHeader" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Why WDS?{'\n'}
    Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries. And now WDS offers a full week of events and an unforgettable keynote weekend in Portland, Oregon.{'\n'}

    Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five."{'\n'}
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
          - 6 whole days of Community, Service & Adventure{'\n'}
          - Overcoming our fears with Michelle Poler{'\n'}
          - Dancing Jellyfish at the Closing Party!{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          WDS branded tattoos backstage!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "As people who want to commit themselves to ‘world domination,’ it is our responsibility to have some kind of a practice while the world is going to hell in a handbasket, other than buying handbaskets." -Rev. angel Kyodo williams{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2016 Photos {'\n'}{'\n'}
          2016 had some great moments, check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157669269939103">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2016 Videos{'\n'}{'\n'}
          2016 had some great moments, check out the videos!{'\n'}{'\n'}
          <Button to="https://vimeo.com/album/4366453">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2015">
      <Image src="art/legacy-2015.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
        <div>
        <Block type="4col">
          ## Year Five{'\n'}
          July 9-11{'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - Lipstick selfies!{'\n'}
          - Awesome Q&A with The Kid President{'\n'}
          - Filler content {'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          Breakfast in bed Guinness World Record!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "As people who want to commit themselves to ‘world domination,’ it is our responsibility to have some kind of a practice while the world is going to hell in a handbasket, other than buying handbaskets." -Lewis Howes{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2015 Photos {'\n'}{'\n'}
          2016 had some great moment, check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2015 Videos{'\n'}{'\n'}
          2016 had some great moment, check out the videos!{'\n'}{'\n'}
          <Button to="https://vimeo.com/album/4366453">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2014">
      <Image src="art/legacy-2014.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
        <div>
        <Block type="4col">
          ## Year Four{'\n'}
          July 9-11{'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - The Portland Experience Opening Party & the Portland Spirit Cruise{'\n'}
          - Hot Air Balloon Rides at the Closing Party!{'\n'}
          - The Great Namaste World Record{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          I don't know, someone please tell me!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "Choosing to take on the content for the page with info about all previous years' highlights and details is a great idea if you've only attended one event!" -Whitney Korenek{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2014 Photos {'\n'}{'\n'}
          2016 had some great moment, check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2014 Videos{'\n'}{'\n'}
          2016 had some great moment, check out the videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds-2014-keynotes">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2013">
      <Image src="art/legacy-2013.jpg" width="1260" height="514" margin="0 0 0 -142px" preload/>
           <div>
        <Block type="4col">
          ## Year Four{'\n'}
          July 9-11{'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - The Portland Experience Opening Party & the Portland Spirit Cruise{'\n'}
          - Hot Air Balloon Rides at the Closing Party!{'\n'}
          - The Great Namaste World Record{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          I don't know, someone please tell me!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "Choosing to take on the content for the page with info about all previous years' highlights and details is a great idea if you've only attended one event!" -Whitney Korenek{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2013 Photos {'\n'}{'\n'}
          2013 had some great moments, check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157634510088202">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2013 Videos{'\n'}{'\n'}
          2013 had some great moments, check out the videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds2015">Watch Them</Button>
        </Block>
      </div>
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
