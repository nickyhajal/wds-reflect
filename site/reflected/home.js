import React from 'react';
import Link from '../components/Link/Link';
import Section from '../components/Section/Section';
import Image from '../components/Image/Image';
import Block from '../components/Block/Block';
import Tabs from '../components/Tabs/Tabs';
import Transfer from '../components/Transfer/Transfer';
import Tab from '../components/Tab/Tab';
import Button from '../components/Button/Button';
import Counter from '../components/Counter/Counter';
import Form from '../components/Form/Form';
import FormRow from '../components/FormRow/FormRow';
import Input from '../components/Input/Input';
import Grid from '../components/Grid/Grid';
import Video from '../components/Video/Video';
import SpeakerList from '../components/SpeakerList/SpeakerList';
import PersonScroller from '../components/PersonScroller/PersonScroller';
import Testimonials from '../components/Testimonials/Testimonials';
import TicketCounter from '../../site/components/TicketCounter/TicketCounter';
import Login from '../components/Login/Login';
import JoinUsButton from '../components/JoinUsButton/JoinUsButton';
import ResetPass from '../components/ResetPass/ResetPass';
import EventList from '../components/EventList';
import is from '../utils/is';
import Cart from '../../site/containers/Cart/Cart';
import MeetupForm from '../../site/components/MeetupForm';
import PurchaseButton from '../../site/containers/PurchaseButton';
import BlockWithLiveLabel from '../../site/containers/BlockWithLiveLabel';
import BookingDetails from '../../site/components/BookingDetails';
import ConnectPurchaseButton from '../../site/components/ConnectPurchaseButton';
import ComparisonTable from '../../site/components/ComparisonTable';
import YearReviews from '../../site/components/YearReviews';

  
  const Page = (props) => (
    <div>
      <Section
  headerVideo="350010002"
  headerImage="hero/balls.jpg"
  headerClip="lr_header"
  color="canvas"
>
  <Image src="v2/heading/weekend.png" width="819px" height="217px" align="center" mobile={{ all: { width: '580px', backgroundSize: '100% auto' }, phone: { width: '320px', height: '97px' } }}/>
  <Block cols="6" bleed={false} align="center" textAlign="center" margin="50px 0 20px" mobile={{ all:{ width: '550px' }, phone: {width: '100%'} }}>
    #### A full week of activities and an unforgettable main-stage weekend in Portland, Oregon. Learn from unconventional thinkers, acquire powerful new skills, and go away with an all-new community of friends and supporters.{'\n'}
    <Button to="/join-us" style={{ fontSize: '22px', padding: '18px 100px', marginTop: '80px', marginBottom: '40px' }} fitToText>Join Us!</Button>
  </Block>
</Section>
<Section color="white" css={{ padding: '90px 0 230px 0' }} mobile={{ phone: { padding: '20px 0 230px 0' } }}>
  <Block width="600px" css={{ color: 'orange' }}>
    <h2 style={{ marginBottom: '4px' }}>World Domination Summit 2020 (final year!)</h2>
    ## June 23 - June 29, 2020 {'\n'}
    ## in Portland, Oregon{'\n'}
  </Block>
  <Block cols="6" className="bigger" mobile={{ all:{ padding: '0 50px', marginBottom: '20px' }, phone: { padding: '0 20px' } }}>

    Since 2011, WDS has brought together more than 10,000 people from more than forty countries. As adventurers from all walks of life, our mission is to create a remarkable community that helps each person pursue a big dream. {'\n'}

    With discussions and activities on topics like how to live a good life, travel hacking your way around the globe, and writing your first book, it’s an experience like no other.{'\n'}
    
    For 2020 we'll celebrate 10 years of Community, Adventure, and Service featuring an all-star speaker/Academy lineup, tons of opportunities to connect with fellow attendees and as always, fun, unforgettable surprises. {'\n'}

    _All that’s missing is YOU!_{'\n'}

  </Block>
</Section>
<Section color="green" css={{ padding: '90px 0 230px 0' }} mobile={{ phone: { padding: '20px 0 130px 0' } }}>
  <Grid>
    <Block
      type="padded"
      width="550"
      height="240"
      anchor="right"
      mobile={{
        all: { position: 'relative', zIndex: '6', top: '-85px', width: '450px', right: '20px' },
        phone: { width: '100%', margin: '-220px -20px 30px -12px' }
      }}
      background="blue"
      feed="twitter"
      refresh="12"
      margin="-235px 0 0 0"
    >{'\n'}
      I started my day breaking a world record and ended it enjoying time with some of the coolest people on the planet. Nothing better. #WDS2015{'\n'}
    </Block>
  </Grid>
  <div className="clear"></div>
  <Image src="photos/people.jpg" width="426" height="263" margin="-120px 0 -80px -50px" mobile={ { all: {position: 'relative', zIndex: '-1' }, phone: {width: '100%', margin: '-120px 0 -80px -20px'}} }/>
  <Block
    type="padded"
    cols="6"
    bleed={false}
    background="canvas"
    className="has-checklist"
    css={{ padding: '60px 40px' }}
    mobile={{ phone: {
      padding: '60px 25px 60px 10px'
    }}}
    clip="top_lr_1.6"
  >{'\n'}
    ## A WDS Ticket Includes:{'\n'}

    - All access pass to main stage keynotes on Saturday & Sunday{'\n'}
    - Access to your choice of more than 150+ themed meetups all over the city (or host your own!){'\n'}
    - Entrance to the Opening & Closing Parties{'\n'}
    - Ability to connect with attendees and RSVP to your choice of activities through the WDS mobile app{'\n'}
    - Discounted registration for any of the half-day Academies taking place througout the week{'\n'}
    - Discounted and priority hotel registration, including the chance to stay at the WDS Hotel™{'\n'}
    - A special community that will support you for life{'\n'}
  </Block>
</Section>
<Testimonials />
<Section color="white" clip="tr:0,2%;" margin="-70px 0 0 0" mobile={{ all: {margin: '-120px 0 0 0' } }}>
  <Block cols="6" css={{ marginBottom: '96px' }} className="bigger" css={{ paddingTop: '80px' }} mobile={{ all:{ padding: '80px 50px 0'}, phone: { padding: '40px 20px 0' }}}>
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
      ## Our Story{'\n'}

    See some of our favorite highlights and unforgettable memories we've created as a community over the past 9 years.{'\n'}
      <Button to="/story">See the Highlights</Button>
    </Block>
    <Block type="image" src="photos/academies.jpg">
      ## Academies{'\n'}

      Intensive, half-day sessions on focused topics. Learn from alumni speakers and other community leaders to help you level-up your life. {'\n'}
      <Button to="/academies">Learn More</Button>
    </Block>
    <Block type="image" src="photos/foundation.jpg">
      ## WDS Foundation{'\n'}
      
Profits from WDS go to our "Scholarships for Real Life" foundation, a 501(c)(3) charity that provides microgrants in support of bold projects. <Button to="/foundation">Learn More</Button>
    </Block>
  </div>
  <div className="clear" />
  <Block>## And lots more!</Block>
  <Tabs>
    <Tab title="Activities" color="blue" layout="imageLeft">
      <Image src="photos/tab-activities.png" width="348px" height="324px" anchor="left" mobile={{ phone: { width: '100%', height: '180px', marginBottom: '16px' } }}/>{'\n'}
      Community, Adventure, and Service: for one week you’ll be surrounded by like-minded people interested in pursuing big dreams and building a better world.  {'\n'}
      When you spend WDS with us in Portland, you’ll help us take over the city. With main-stage keynotes, hundreds of attendee-led meetups, dozens of workshops known as “Academies,” adventure activities, two big parties, and hundreds of new friends high-fiving you on street corners, it’s a truly immersive and awesome experience.{'\n'}
      Everyone who comes to WDS is a big part of everything that happens. Our attendees make the community strong and independent with no corporate sponsorships.{'\n'}
    </Tab>
    <Tab title="Attendee Meetups" color="red" layout="imageLeft">
      <Image src="photos/tab-meetups.png" width="348px" height="324px" anchor="left" mobile={{ phone: { width: '100%', height: '180px', marginBottom: '16px' } }}/>{'\n'}
      Attendee-led meetups have been a staple of WDS since our first year. In 2020, they're back and better than ever!{'\n'}
      Each day, there will be time set aside for attendees to host these informal meetups, and on any given day, you can go from a meetup for star gazing to a meetup for creative entrepreneurs—and then over to a meetup for a group of people interested in the Tiny House Movement, where a fight will likely break out over who owns the fewest things.{'\n'}
      Meetups aren't led by WDS team members—they're led by your fellow attendees! Our attendee-only app will guide you to your choice of meetups happening all over town from morning to night.    {'\n'}
      And if you have your own audience, you can host a meetup too. (Our dedicated attendee web app will tell you where each meetup is being held.){'\n'}
    </Tab>
    <Tab title="Special Events" color="green" layout="imageLeft">
      <Image src="photos/tab-events.png" width="348px" height="324px" anchor="left" mobile={{ phone: { width: '100%', height: '180px', marginBottom: '16px' } }}/>{'\n'}
      WDS is a week-long gathering bringing together some of the most remarkable people from around the world. This means we'll have new activities and mini-events to create even more incredible memories together.{'\n'}
      From an Opening Party that gives you a chance to meet the team, speakers, and other attendees, all the way through to an epic Closing Party, we’ve crafted a wonderfully immersive experience. {'\n'}
      Join your fellow attendees at your choice of extracurricular activities around town—from film screenings and river cruises, to world record attempts and more!{'\n'}
    </Tab>
    <Tab title="Speakers" color="orange" layout="imageLeft">
      <Image src="photos/tab-speakers.png" width="348px" height="324px" anchor="left" mobile={{ phone: { width: '100%', height: '180px', marginBottom: '16px' } }}/>{'\n'}
      Part of what makes WDS so great is our weekend of main stage events. Our keynote speakers are bestselling authors, leading activists, and in-demand storytellers. Since our very first year in 2011, the lineup has been inclusive, multicultural, and representative of our whole community. {'\n'}
      Over the weekend, each speaker will share a short message that combines personal stories with practical ideas on our main stage, but most speakers stick around for the entire weekend and are available for informal conversation.  Sunday afternoon—before we all head to the afterparty—we've set aside a space for our speakers to sign books and meet readers. Print books will be available for sale throughout the weekend, and if you're digital-only, you can stop by to say hi to your favorite author!{'\n'}
    </Tab>
  </Tabs>
</Section>
<Section color="canvas" burst>
  <Image
    src="v2/headings/join-us-orange.png"
    width="288px"
    height="88px"
    align="center"
    className="join-us-heading"
  />
  <Block margin="50px 0" className="pagematchText">
    ## Join us at WDS 2020{'\n'}
  </Block>
  <Block margin="50px 0">
    ### Be the first to get notified when tickets go on sale next.{'\n'}
  </Block>
  <Block
    width="400px"
    align="center"
    margin="50px 0 0"
    css={{ maxWidth: '400px' }}
  >{'\n'}
    <Form
      list="WDS 2020 Waiting List"
      buttonClassName="pagebutton"
      successMessage="Great, we'll let you know when sales start for WDS 2020!"
      buttonStart="Get Notified"
      buttonProgress="Sending..."
      buttonSuccess="Success!"
    >
      <FormRow>
        <Input
          id="full_name"
          placeholder="Your Full Name"
          style={{ borderColor: '#D2D2D2' }}
        />
      </FormRow>
      <FormRow>
        <Input
          id="email"
          placeholder="Your Email Address"
          style={{ borderColor: '#D2D2D2' }}
        />
      </FormRow>
    </Form>
  </Block>
</Section>;


<Section color="green" clip="top_lr_2.6" margin="-22px 0 0">
  <Block margin="50px 0" width="420px">
    ## Tell a Friend{'\n'}
    Spread the word! Great things are even better when they’re shared with friends.{'\n'}
    <Button modal="tellAFriend" width="184px" align="center">Share the Love</Button>
  </Block>
  <Image src="art/friends.png" width="286px" height="201px" margin="-120px 0 -60px" mobile={{phone: {margin: '30px 0 -60px 30px'}}} />
</Section>




    </div>
  );

  export default Page;
