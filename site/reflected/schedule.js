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
import Testimonials from '../components/Testimonials/Testimonials';
import TicketCounter from '../../site/components/TicketCounter/TicketCounter';
import Login from '../components/Login/Login';
import JoinUsButton from '../components/JoinUsButton/JoinUsButton';
import ResetPass from '../components/ResetPass/ResetPass';
import is from '../utils/is';
import Cart from '../../site/containers/Cart/Cart';

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="hero/schedule.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/schedule.png" width="421" height="151" className="scriptHeader" preload/>
  <Image src="photos/audience.png"
    width="426" height="263"
    margin="0 0 -100px -50px"
    mobile={{ phone: { margin: '0 0 -100px -20px', width: '100%' } }}
    preload
  />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px', position: 'relative', zIndex:'4' }} clip="top_lr_1.6">
    ## A Week of WDS: July 11th - 17th, 2017{'\n'}

    - **Tuesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Wednesday** Academies, Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Thursday** Academies, Small Group Activities, and Attendee-Led Meetups{'\n'}
    <li><b className="highlight highlight-2">Friday</b> Big Adventure, Academies, Opening Party</li>
    <li><b className="highlight highlight-2">Saturday</b> Main Stage Keynotes, Evening Activities</li>
    <li><b className="highlight highlight-3">Sunday</b> Main Stage Keynotes, Closing Party</li>
    - **Monday** Academies and Attendee-Led Meetups{'\n'}
      <i>Can't come for the whole time? No problem, but you don't want to miss the main events taking place on Friday, Saturday, and Sunday. For the best possible WDS experience we recommend arriving no later than Thursday evening, and leaving no earlier than Monday morning.</i>
  </Block>
  <Image src="photos/jellyfish.png" width="426" height="263" margin="-50px -60px 100px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />{'\n'}
  <div className="clear" />{'\n'}
</Section>
  <Section color="canvas">
  <Block>## WDS 2017 Speakers and Special Guests</Block>
  <Block cols="6" className="bigger">
    Every year we're excited to invite several friends of WDS living extraordinary lives and working to build a better world. Our keynote speakers are bestselling authors, leading activists, and in-demand storyteller and they come to WDS to share their stories, experiences, and lessons with our community. Here are the confirmed speakers so far for WDS 2017 with more being announced each month.  {'\n'}
  </Block>
  <Tabs style="dots">
    <Tab title="Shaun King">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Shaun.King.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Shaun King {'\n'}
       <p>Shaun King is a journalist, a humanitarian, an activist, and the Senior Justice Writer for the <i>New York Daily News</i>. Today, there are crucial conversations rippling across North America—conversations happening on social media, on campuses, in the streets and around dinner tables. In greater numbers, people are talking about real empowerment and liberation for historically disadvantaged groups.</p>
<p>When it comes to the Black Lives Matter movement, they’re talking specifically about human dignity for African Americans. And for this movement, Shaun is amongst the most compelling voices: a humane and passionate advocate for justice and families, and an extremely visible fundraiser for victims of brutality and discrimination. His latest project is the <Link to="http://www.injusticeboycott.com/">Injustice Boycott.</Link></p>
      </Block>
    </Tab>
    <Tab title="Vanessa Van Edwards">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/vanessa.van.edwards.jpg" width="904" height="549" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Vanessa Van Edwards{'\n'}
        <p>Vanessa Van Edwards is a behavioral investigator and published author. She runs a human behavior research lab where she uncovers the hidden forces that drive our behavior called the <Link to="http://www.scienceofpeople.com/">Science of People.</Link>.</p>
<p>Vanessa is fascinated by body language, leadership and charisma and writes about these topics for CNN, <i>Fast Company</i> and <i>Forbes</i>. She also writes a monthly column for <i>Entrepreneur Magazine</i> and the <i>Huffington Post</i>. Her innovative work has been featured on NPR, <i>Business Week</i> and <i>USA Today</i>. More importantly she's addicted to sour patch kids, airplane coffee and puppies. Vanessa's new book, <i><Link to="http://www.scienceofpeople.com/captivate/">Captivate</Link></i>, launches this April.</p>
      </Block>
    </Tab>
    <Tab title="Rich Roll">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/rich.roll.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Rich Roll {'\n'}
       <p>Rich Roll is one of the world's most popular world-class ultra-endurance triathletes, a widely regarded plant-based nutrition & wellness advocate, writer, public speaker, podcast host, husband and father of 4. In 2009 he was recognized as one of the “25 Fittest Men in the World” by <i>Men's Fitness Magazine</i> and has been featured on CNN and contributed to publications such as <i>Outside</i>, <i>Los Angeles Times Sunday Magazine</i>, <i>VegNews</i>, <i>Huffington Post</i>, <i>Triathlete</i>, <i>3/GO</i> and <i>Men’s Fitness</i>.</p>
       <p>After a struggle with alcoholism and 20 year respite from competitive sports, Rich adopted a plant-based diet, shed 50 pounds and launched a middle-aged assault on the Ultraman World Championships, one of the most daunting endurance races on in the world. His inspirational memoir <i><Link to="http://www.richroll.com/shop/books/finding-ultra-signed/">Finding Ultra</Link></i> is a #1 bestseller on Amazon and he also hosts the popular, Rich Roll Podcast. Learn more about Rich's story at <Link to="http://www.richroll.com/">www.RichRoll.com.</Link></p>
      </Block>
    </Tab>
        <Tab title="Scott Harrison">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Scott.Harrison.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Scott Harrison{'\n'}

        <p>Scott Harrison is a former nightclub promoter, volunteer photojournalist, and in 2006 founded the non-profit organization <Link to="https://www.charitywater.org/">charity: water</Link>. In ten years, with the help of more than one million donors worldwide, charity: water has raised over $225 million and funded over 21,000 water projects in 24 countries. When completed, those projects will provide over 6.4 million people with clean, safe drinking water.</p> 
        
<p>Scott has been recognized in Fortune Magazine’s 40 under 40 list, the Forbes Magazine Impact 30 list and was recently #10 in Fast Company’s 100 Most Creative People in Business issue. Currently he serves as a World Economic Forum Young Global Leader. Five years ago, Scott received a standing ovation at WDS 2012, and more than half the community volunteered to give up their birthdays for clean water. He's returning this year with a new challenge.</p> 
        
      </Block>
    </Tab>
         <Tab title="Mohammed Faris">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/mohammed.faris.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Mohammed Faris{'\n'}
        <p>Mohammed Faris** is an international author, speaker and leader of a community with more than one million people. He started his journey in 2007 when he became obsessed with the question: "Can faith boost productivity?" Mohammed has since spent the last decade trying to answer this question - from his own Islamic faith tradition - his popular blog,, <Link to="http://ProductiveMuslim.com">ProductiveMuslim.com</Link>, and his new book "The Productive Muslim: Where Faith Meets Productivity".</p> 
        <p>Mohammed has delivered talks and trainings at numerous events and seminars across the world. He's also been featured in international media and on the TEDx stage. In 2014, the Royal Islamic Strategic Studies Centre added him to the World’s 500 Most Influential Muslims list</p>  
      </Block>
    </Tab>
        <Tab title="Benny Lewis">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/benny.lewis.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Benny Lewis{'\n'}

        <p>Benny Lewis is the language hacker, <i>National Geographic</i> Traveler of the year, author, YouTuber and charming Irish lad behind the hugely successful <Link to="http://www.fluentin3months.com/">Fluent in 3 Months</Link> blog and international best selling book. For a decade and a half he has traveled the world, immersing himself in local cultures and learning local languages. He can speak 7 languages fluently, and can get by in many more, despite the fact that he only spoke English at the age of 21.</p> 
      
      <p>Although he mostly writes about language learning, his background is in electronic engineering and he applies this engineering mindset to his business, his language learning projects and his lifestyle. He is a passionate "imperfectionist" and loves learning new things that involve pushing his limits, and finding the right balance between insane random experimental wonder and strict scientific logic. Imagine Jack Sparrow meets Spock with an Irish accent!</p>
      </Block>
    </Tab>
     <Tab title="Emilie Wapnick">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/emiliewapnick_wds.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Emilie Wapnick{'\n'}

        <p>Emilie Wapnick is a writer, career coach, blogger, and community leader. She is the founder and creative director at <Link to="http://puttylike.com/">Puttylike.com</Link>, where she helps multipotentialites (people with many passions and creative pursuits) integrate all of their interests to create dynamic, fulfilling, and fruitful careers and lives.</p> 

        <p>Emilie's <Link to="http://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling">TED talk</Link> has been viewed over 3.5 million times, and has been translated into 36 languages. She's been featured in <i>Fast Company</i>, <i>Forbes</i>, <i>Financial Times</i>, <i>Huffington Post</i>, and <i>Lifehacker</i>. Her book, <i><Link to="http://howtobeeverything.com/">How to Be Everything</Link></i> comes out with HarperCollins in May.</p>  
      </Block>
    </Tab>
  </Tabs>
  <div class="clear" />{'\n'}
</Section>  
   
<Section
  color="white"
>
    
  <SpeakerList title="2017 Speakers" year="2017" />
  <SpeakerList title="Alumni Speakers" year="alumni" />
  <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/Portland-Oregon.png" label="Portlandia">
      ## Portland{'\n'}
      Our home base since year one. Learn more about our beloved city and confirm whether or not all the fun things you've heard is true (they probably are).{'\n'}
      <Button to="/location">Learn More</Button>
    </Block>
    <Block type="image" src="photos/JoinUs/image-academies.jpg" label="Coming Soon">
      ## Academies{'\n'}
      These half-day workshops feature some of our favorite alumni speakers and select WDS community members that are experts in their fields.{'\n'}
      <Button to="/academies">Learn More</Button>
    </Block>
  </Grid>
  <Block type="padded" background="sea">
    <Image src="icon/outline-bed.png" width="101" height="78"  align="center" margin="0 0 40px 0" />{'\n'}
    <Block cols="5">
      ## Highly Sensitive Person Lounge{'\n'}
      Big events with lots of people can sometimes be overwhelming. We get that because we feel that way too! Since the very first WDS we've provided a dedicated quiet space with hammocks and masseuses for attendees to break away, relax, and recharge.{'\n'}
    </Block>
  </Block>
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
