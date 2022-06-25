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
import WordQuestion from '../../site/components/WordQuestion/WordQuestion';
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
import WdsTitle from '../../site/components/WdsTitle';
import RedirIfNotLoggedIn from '../../site/components/RedirIfNotLoggedIn';

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="v2/hero/foundation.png"
  headerClip="rl_header"
  headerPosition="center center"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/foundation.png" width="470px" height="165px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Foundation {'\n'}
  Launched with an initial funding gift at the end of WDS 2013, the World Domination Summit Foundation has put resources in the hands of amazing people who are acting on the three core values of WDS -- community, adventure, and service -- by providing individual grants called 'Scholarships for Real Life.'  {'\n'}

The goal of these grants has been to empower WDS attendees to pursue their dreams and impact their community, and WDS Foundation has granted over $200,000 to fund 21 incredible projects over the course of six years.  {'\n'}

The Foundation and the Scholarships For Real Life program has come to an end, but it has been an honor to support these projects and dreams, and to witness many blossom and grow with the help of our initial funding.  {'\n'}
      
  </Block>
</Section>
<Section color="canvas">
  <h2 style={{marginBottom: '-60px', position: 'relative', zIndex: '1', textAlign: 'center'}}>All Awardees (2013 - 2019)</h2>
  <PersonScroller personType="awardees" />
  <div class="clear" />
</Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## Selection Criteria{'\n'}
    Our selection committee looked at a number of factors to determine which projects best fit the program.{'\n'}
  </Block>
  <Grid numCols="3" tabletCols="2">
    <Block type="color" color="blue">
      ### Fit{'\n'}
      - Does the project serve others and create community?{'\n'}
      - What is the applicant’s experience with the identified problem and community involved?{'\n'}
      - Has the applicant identified a list of goals to complete the project?{'\n'}
    </Block>
    <Block type="color" color="orange">
      ### Implementation{'\n'}
      - Can the proposal be realistically completed in a year?{'\n'}
      - If part of a larger, long-term project, how does the proposal further the overall effort?{'\n'}
      - Does the applicant have the capacity to execute the proposed solution? If not, how will he/she prepare?{'\n'}
    </Block>
    <Block type="color" color="green">
      ### Sustainability{'\n'}
      - How will the project involve and inspire others?{'\n'}
      - Without a scholarship, how does the applicant intend to move forward on the proposed solution?{'\n'}
    </Block>
  </Grid>
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">

</Block>
</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS X Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
  The WDS ticket sale didn’t last long... we’re now at full capacity with no more tickets available.{'\n'}
  </Block>
  {/* <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button> */}
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter type="countup" />{'\n'}
  </Block>
  {/* <JoinUsButton /> */}
  <div className="clear" />
</Section>




    </div>
  );

  export default Page;
