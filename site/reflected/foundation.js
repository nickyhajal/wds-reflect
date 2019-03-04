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
  headerImage="v2/hero/foundation.png"
  headerClip="rl_header"
  headerPosition="center center"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/foundation.png" width="470px" height="165px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## WDS Foundation{'\n'}
    WDS Foundation seeks to put the right resources in the hands of amazing people who are acting on the three core values of WDS—community, adventure, and service.{'\n'}

    <p>We do this by providing what we call <b>"Scholarships For Real Life."</b> The goal of these scholarships is to empower individuals to pursue their dreams and impact their community.</p>

    Have a crazy project you want to bring to life? Want to take a trip around the earth and share what you learned with the world? Trying to build something that’s a bit out of your reach? Whatever it is, the WDS Foundation can help fund your inspiring project that will improve your life and make the world a better place!{'\n'}
      
    Watch the announcement of this year's scholarship voyagers and learn more about their inspiring projects below:{'\n'}
      
  <Video placeholder="foundation/2018-Voyagers.jpg" videoId="289363603" width="710" height="430"/>{'\n'}
      
  </Block>
</Section>
<Section color="canvas">
  <Block>## 2018 Scholarship Voyagers</Block>
  <Tabs style="simple">
    <Tab title="Puzzle Huddle">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Matthew-Goins.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Puzzle Huddle (Matthew Goins) - 2018{'\n'}
      
      Wouldn’t you want your children to see themselves in the toys they play with? Like many children, Matthew’s kids love jigsaw puzzles. Matthew and his wife struggled with the lack of representative images in commercially-produced products -- with that in mind, they began creating their own puzzle designs featuring African American characters in positive images.{'\n'}

**[Puzzle Huddle](http://www.puzzlehuddle.com)** develops and produces a line of culturally inclusive images manufactured as puzzles. These puzzles are a tool for adults and children to spend meaningful time together working on an activity that will also affirm the child and stretch their imagination.{'\n'}

Through the Scholarship for Real Life from WDS Foundation, Matthew and his family will work with illustrators to expand the existing product line to include a broader range of ethnic, gender and demographic representation, emphasizing women in leadership positions, and larger-sized puzzles. {'\n'}

      </Block>
    </Tab>
     <Tab title="Ice Box">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Krista+Dalby.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Ice Box (Krista Dalby) - 2018{'\n'}

What would keep you motivated and in good spirits in the heart of an Arctic winter? After living through eight bleak Canadian Februaries in a rural community in Prince Edward County, Krista came up with the idea to alleviate the dreariness and depression that results from months of deep snow and short days. With the community reliant on seasonal tourism, producing ICE BOX in the off-season will not only boost spirits but also support local artists, struggling during the winter lull.{'\n'}

An immersive public art installation and event that will strengthen the community’s social fabric and inspire all who visit, ICE BOX will create an unforgettable art experience in the heart of winter for the rural community. At the heart of the event is community engagement, providing a variety of ways for both professional artists and community members to participate and work and play alongside each other. Community participation is very accessible through free or inexpensive programming, with Pay-What-You-Can options available.{'\n'}
        
      </Block>
    </Tab>
        <Tab title="Project Awake">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Justin.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Project Awake (Justin Harvey) - 2018{'\n'}

      The world is a pretty scary place for all of us - but exponentially more so for middle- and high-school students, who are still navigating all that adolescence entails: peer pressure, self-esteem issues, bullying, etc. - but it doesn’t have to be bleak! {'\n'}

Justin created Project Awake, a unique interactive experience that inspires students to realize their potential, challenges them to overcome self-destructive mediocrity, and empowers them to make positive choices that last a lifetime.{'\n'}

Through the Scholarship for Real Life, Justin will work with schools and artists to produce several live theatrical productions depicting everyday life and highlighting students’ common challenges to show the effects their choices have on one another, and workshops to mitigate violence and aggression in high school students and schools.{'\n'}
        
      </Block>
    </Tab>
      <Tab title="How She Did It">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Yolanda-Enoch.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## How She Did It Podcast (Yolanda Enoch) - 2018{'\n'}
      
      Have you ever wondered, “how did she do that?!” Yolanda interviews women of color and explores their career paths to share, via podcast, how they accomplished their goals to inspire other women working to do the same. Formally centered around individuals, this second version of the HSDI podcast will be job-title-centered and share multiple perspectives of the same role.{'\n'}

Through her work, Yolanda creates a community where women of color’s experiences and stories are centered, celebrated, and prioritized...and not an occasional byline. And although not directly her goal, she hopes by focusing on women of color, mainstream media - and employers - will see it’s not that hard to find underrepresented people to highlight and hire, and hopes more WoC would feel excited about where things can go in their own professional lives.{'\n'}

      </Block>
    </Tab>
  </Tabs>
  <h2 style={{marginBottom: '-60px', position: 'relative', zIndex: '1', textAlign: 'center'}}>All Previous Awardees</h2>
  <PersonScroller personType="awardees" />
  <div class="clear" />
</Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## Selection Criteria{'\n'}
    Our selection committee will be looking at a number of factors to determine which projects best fit with our current goals.{'\n'}
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
    ## I'm in! How do I apply?{'\n'}

##### 2019 Applications - Available Now!{'\n'}
Please review the following information carefully. {'\n'}
                  
##### Eligibility{'\n'}
The "Scholarships for Real Life" program is open to all alumni who have attended one of our past eight WDS events OR those that have [officially registered for WDS 2019](https://worlddominationsummit.com/join-us) even if this is your first time attending.{'\n'}

##### Online Information Sessions (registration required to participate)  {'\n'}
                  WDS Foundation will hold two information sessions to help answer any questions about the scholarship, the application, and about the Foundation. Please register for one of the following sessions using the appropriate link below:{'\n'}
                  
                 - Information Session #1: Sunday, March 3: 2:00-3:00pm PST **[(Register for session #1)](https://zoom.us/meeting/register/8818045ff4fec4e4cde7dc3c8da9331e)**{'\n'}
                 - Information Session #2: Saturday, March 16, 11:00am-12:00pm PST **[(Register for session #2)](https://zoom.us/meeting/register/6933a7d02893991f66858a512be5123a)**{'\n'}

                  
--{'\n'}
##### 2019 Application Timeline  {'\n'}
                 Late submissions **will not** be accepted. {'\n'}
                 - **March 1:** Applications open  {'\n'}
                 - **April 1:** Applications close  {'\n'}
                 - **May 1:** First round of top 10 applicants notified  {'\n'}
                 - **May 15:** Voyagers selected and notified {'\n'}

</Block>
</Section>
<Section
  color="white"
>  
 <Block type="padded" background="blue">
    <Image src="icon/circle-map-green.png" width="101" height="78"  align="center" margin="0 0 40px 0" />{'\n'}
        <Block cols="5">
      ## Okay, ready to apply? Let’s do this! {'\n'}
      Click the button below to get started.{'\n'}
      
      _Please note: We strongly recommended completing the application on a computer. To preserve your work-in-progress, DO NOT refresh or close your browser until your application has been submitted._{'\n'}
           <Button to="https://worlddominationsummit.com/foundation-apply" newWindow={true} styling="sea" fitToText>2019 Scholarship Application</Button> 
    </Block>
  </Block>

</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS Tickets are On Sale!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
    We release WDS tickets for a few weeks each year and now is your chance! Are you ready to be part of an experience that will change your life forever?{'\n'}
  </Block>
  <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter type="countup" />{'\n'}
  </Block>
  <JoinUsButton />
  <div className="clear" />
</Section>




    </div>
  );

  export default Page;
