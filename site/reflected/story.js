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
    Way back in 2011, we invited 500 friends to Portland, Oregon. Our common curiosity brought us together to explore one question: _How do we live a remarkable life in a conventional world?_  {'\n'}

Fast forward to 2017, and we’re still exploring that question every summer with an in-person gathering that has now included <strong>more than 10,000 people from all 50 states and more than 40 countries</strong> since we started. The stakes and stories have grown each year with activities like Bollywood dancing, Academies, Guiness World Records, and the creation of a foundation that offers grants to individuals to pursue their dreams and positively impact their community. We call them “Scholarships for Real Life”. 
    
    With a full week of events and an unforgettable keynote speaker-filled weekend, you'll learn from unconventional thinkers, aquire powerful new skills, and go away with an all-new community of friends and supporters.{'\n'}
  
    This July, we’re inviting all our friends (you!) to Portland for the seventh WDS. As always, some things this year will be new, but our core principles of Community, Adventure, and Service will continue to guide our shared pursuit of changing the world.{'\n'}
  </Block>
</Section>
<Section color="canvas">
  <Tabs style="dots">
    <Tab title="2016">
      <Image src="art/legacy-2016.jpg" mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
      <div>
        <Block type="4col">
          ## Year Six{'\n'}
          <p>August 9-14, 2016<br/>Portland, OR</p>
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - 6 Days of Community, Service & Adventure{'\n'}
          - Overcoming our fears with Michelle Poler  {'\n'}
          - Dancing Jellyfish!{'\n'}
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
          2016 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157669269939103">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2016 Videos{'\n'}{'\n'}
         Want to relive the keynotes? Watch these videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds-2016-keynotes">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2015">
      <Image src="art/legacy-2015.jpg"  mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
        <div>
        <Block type="4col">
          ## Year Five{'\n'}
          July 9-13, 2015 {'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - Lipstick selfies{'\n'}
          - Q&A with The Kid President{'\n'}
          - Breakfast in Bed Guinness World Record!{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          Attendee photos projected on building during closing party{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "Your voice is never lost, it’s always waiting to be found." —Jon Acuff{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2015 Photos {'\n'}{'\n'}
          2015 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2015 Videos{'\n'}{'\n'}
          Want to relive the keynotes? Watch these videos! {'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds2015">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2014">
      <Image src="art/legacy-2014.jpg"  mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
        <div>
        <Block type="4col">
          ## Year Four{'\n'}
          July 10-14, 2014 {'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - Portland Experience opening party{'\n'}
          - Hot Air Balloon Rides!{'\n'}
          - The Great Namaste World Record{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          Color shower{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "Take imperfect action" —Jadah Sellner{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2014 Photos {'\n'}{'\n'}
          2014 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157645692660113">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2014 Videos{'\n'}{'\n'}
         Want to relive the keynotes? Watch these videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds-2014-keynotes">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2013">
      <Image src="art/legacy-2013.jpg"  mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
           <div>
        <Block type="4col">
          ## Year Three{'\n'}
          July 3-5, 2013 {'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - First time at the Arlene Schnitzer Concert Hall{'\n'}
          - Opening Party at the Oregon Zoo{'\n'}
          - The World Float Guinness World Record{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          Champagne toast in the Arlene Schnitzer Concert Hall{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          Brene Brown and Chris Guillebeau signing "Don't Stop Believing" live on stage{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2013 Photos {'\n'}{'\n'}
          2013 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157634510088202">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2013 Videos{'\n'}{'\n'}
         Want to relive the keynotes? Watch these videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds1013">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2012">
      <Image src="art/legacy-2012.jpg"  mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
      <div>
        <Block type="4col">
          ## Year Two{'\n'}
          July 6-8, 2012 {'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - First time at the Antoinette Hatfield Hall{'\n'}
          - Bungee jumping with Joel Runyon{'\n'}
          - Carnival themed Opening Party{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          The $100 Investment{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "The path to a passionate life is often way more complex than the simple advice 'follow your passion' would suggest." —Cal Newport{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2012 Photos {'\n'}{'\n'}
          2012 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157630469839810">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2012 Videos{'\n'}{'\n'}
         Want to relive the keynotes? Watch these videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds-2012-keynotes">Watch Them</Button>
        </Block>
      </div>
    </Tab>
    <Tab title="2011">
      <Image src="art/legacy-2011.jpg"  mobile={{ all: { width:'768px', height: '313px', margin: '0 0 0 -70px' } }} width="1260" height="514" margin="0 0 0 -142px" preload/>
       <div>
        <Block type="4col">
          ## Year One{'\n'}
          June 3-5, 2011{'\n'}
          Portland, OR{'\n'}
        </Block>
        <Block type="4col">
          ## Highlights{'\n'}
          - A giant ice sculpture{'\n'}
          - Love notes from every attendee{'\n'}
          - A dance party{'\n'}
        </Block>
        <Block type="4col">
          ## Big Surprise{'\n'}
          We actually pulled this off!{'\n'}
        </Block>
        <Block type="4col">
          ## Popular Speakers{'\n'}
          "Adventuring occurs when we actually embrace possibility." —Jonathan Fields{'\n'}
        </Block>
      </div>
      <div className="clear" style={{ paddingTop: '80px' }} />
      <div>
        <Block type="image" src="photos/trex.jpg">
          ## 2011 Photos {'\n'}{'\n'}
          2011 had some amazing moments. Check out the photos!{'\n'}{'\n'}
          <Button to="https://www.flickr.com/photos/chrisguillebeau/albums/72157626854701827">View Them</Button>
        </Block>
         <Block type="image" src="photos/chelsea.jpg">
          ## 2011 Videos{'\n'}{'\n'}
          Want to relive the keynotes? Watch these videos!{'\n'}{'\n'}
          <Button to="https://vimeopro.com/aonc/wds-2011-keynotes">Watch Them</Button>
        </Block>
      </div>
        </Tab>
  </Tabs>
</Section>
<Section color="orange">
  <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
  <Block margin="50px 0">## Tickets go on sale again in:</Block>
  <Counter format="calendar" to="ticket-sale" />
  <Block width="400px" align="center" margin="50px 0 0" css={{ maxWidth: "400px" }}>
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
