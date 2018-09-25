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

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="hero/foundation.jpg"
  headerClip="rl_header"
  headerPosition="center center"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/foundation.png" width="470px" height="165px" className="scriptHeader" preload/>
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
  <Tabs style="dots">
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
    ##### Eligibility{'\n'}
The "Scholarships for Real Life" program is open to all alumni who have attended one of our past eight WDS events OR those that have [officially registered for WDS 2019](https://worlddominationsummit.com/join-us) even if this is your first time attending.{'\n'}

##### 2019 Applications - Coming Soon!{'\n'}

Stay tuned! The ability to apply for 2019 Scholarships will be announced early next year. {'\n'}

</Block>
</Section>
<Section color="green">
  <Block cols="6" css={{ padding: '25px 0 20px' }}>
   ## Become A Mentor{'\n'}
  <font color="white">If you would like to contribute your knowledge and expertise to our Voyagers as a Mentor, whether that be for an hour or a full-year, we’d sincerely appreciate your help. Simply fill out the form below and we’ll be in contact when we have a need for your expertise and skills!</font>
 <Block anchor="center" align="center" width="300" margin="20px 0 0 0">
   <Button to="https://worlddominationsummit.wufoo.com/forms/w12waw4d1nmlnum/" newWindow={true} styling="white" fitToText>Share your expertise!</Button> 
 </Block>
  </Block>
</Section>
<Section color="orange">
  <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
  <Block margin="50px 0">## Join us at WDS 2019; June 26 - July 1</Block>
  <Block margin="50px 0">###  Be the first to get notified when tickets go on sale next.</Block>
  <Block width="400px" align="center" margin="50px 0 0" css={{ maxWidth: "400px" }}>
    <Form
      list="WDS 2019 Waiting List"
      successMessage="Great, we'll let you know when sales start for WDS 2019!"
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
