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
  headerImage="hero/schedule.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/schedule.png" width="421" height="151" className="scriptHeader" preload/>
<Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## How the WDS Schedule Works{'\n'}
    As we've done since year one, the main events (main-stage keynotes and celebrations) take place during the weekend of WDS. Additionally, every attendee will have the ability to add events and activities throughout the entire week using the WDS mobile app to create their own personalized schedule. You decide if you'll join us for the weekend or come for the entire week. Regardless, a [WDS 360 ticket](https://worlddominationsummit.com/join-us) gives you access to it all; the main events and Connect plus special discounts, bonuses, and surprises.  {'\n'}
      
      *Looking to participate in most of the activities but not main-stage sessions? Join us for [WDS Connect](https://worlddominationsummit.com/connect).*{'\n'}
  </Block>
 <Image src="photos/audience.png"
    width="426" height="263"
    margin="0 0 -100px -50px"
    mobile={{ phone: { margin: '0 0 -100px -20px', width: '100%' } }}
    preload
  />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px', position: 'relative', zIndex:'4' }} clip="top_lr_1.6">
    ## A Week of WDS: June 26th - July 2nd, 2018{'\n'}

    - **Tuesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Wednesday** Small Group Activities and Attendee-Led Meetups{'\n'}
    - **Thursday** Academies, Small Group Activities, and Attendee-Led Meetups{'\n'}
    <li><b className="highlight highlight-2">Friday</b> Activities, Academies, Attendee-Led Meetups, and the Opening Party</li>
    <li><b className="highlight highlight-2">Saturday</b> Main Stage Keynotes, Attendee-Led Meetups, and Evening Activities</li>
    <li><b className="highlight highlight-3">Sunday</b> Main Stage Keynotes, Attendee-Led Meetups, and the Closing Party</li>
    - **Monday** Academies and Attendee-Led Meetups{'\n'}
      <i>Can't come for the whole time? No problem, but you don't want to miss the main events taking place on Friday, Saturday, and Sunday. For the best possible WDS experience we recommend arriving no later than Thursday evening, and leaving no earlier than Monday morning.</i>
  </Block>
  <Image src="photos/jellyfish.png" width="426" height="263" margin="-50px -60px 100px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />{'\n'}
  <div className="clear" />{'\n'}
</Section>
  <Section color="canvas">
  <Block>## Speakers and Special Guests for WDS 2018</Block>
  <Block cols="6" className="bigger">
    Every year we're excited to invite several friends of WDS living extraordinary lives and working to build a better world. Our keynote speakers are bestselling authors, leading activists, and in-demand storyteller and they come to WDS to share their stories, experiences, and lessons with our community. {'\n'}
    
    Meet our WDS 2018 speakers _(additional speakers to be announced soon)_:{'\n'}

  </Block>
  <Tabs style="dots">
    <Tab title="Geraldine">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Geraldine.DeRuiter.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Geraldine DeRuiter{'\n'}
      **Geraldine DeRuiter** is a Seattle-based blogger, author, and humorist. She is the voice behind the award-winning [Everywhereist blog](http://www.everywhereist.com/), which *TIME* magazine described as "consistently clever" (Geraldine brings this up all the time, even when it's not relevant to the conversation). {'\n'}

Her work has appeared in *Refinery 29, The New Yorker's Daily Shouts*, and *The Washington Post*, and one time *The New York Times* described her writing as "dark and hilarious". Her travel memoir, **_All Over The Place: Adventures in Travel, True Love, and Petty Theft_** was published by Public Affairs in 2017. She is currently working on her second book about the nefarious world of social media. You can find her on Twitter: [@everywhereist](https://twitter.com/everywhereist){'\n'}
         </Block>
    </Tab>
    <Tab title="Ryan">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Ryan.Holiday.WDS.2018.Speaker.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Ryan Holiday{'\n'}
                                                                                                                                              
        **Ryan Holiday** is a writer and media strategist. When he was 19 years old, he dropped out of college to apprentice under Robert Greene, author of The _48 Laws of Power_ and went on to become the director of marketing for American Apparel. He has written for the New York Observer, Thought Catalog, Entrepreneur, 99U, Fast Company, The Huffington Post, Medium, Boing Boing, Forbes, Columbia Journalism Review and multiple other outlets.{'\n'}

Ryan is the author of six books, including _The Obstacle Is the Way, Ego Is the Enemy, The Daily Stoic_ and _Perennial Seller_. Now days Ryan can be found on a ranch outside Austin, Texas where he continues to write and work in between raising cattle, donkeys and goats. You can learn more about Ryan from his blog, [RyanHoliday.net](https://ryanholiday.net/).{'\n'}
      </Block>
    </Tab>
 <Tab title="Adam">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Adam.Valen.Levinson.WDS.2018.Speaker.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Adam Valen Levinson{'\n'}

        **Adam Valen Levinson** is an affiliate of the Middle East Institute, and a Fellow at the Center for Cultural Sociology at Yale University, where he studies senses of humor as a key to cross cultural understanding.  {'\n'}

He has written, filmed, and photographed for _Al Jazeera, The Paris Review, Haaretz, Neue Zürcher Zeitung,_ and _VICE_, and did college stints at the Meccas of real fake news: _The Colbert Report_ and _The Onion_.  All of his stories are true.{'\n'}

He usually lives in America. Learn more about Adam and his stories at [adamvalenlevinson.com](https://www.adamvalenlevinson.com/). {'\n'}
      </Block>
    </Tab>  
 <Tab title="Cathy">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Cathy.Heller.jpg" width="904" height="549" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Cathy Heller{'\n'}
                                                                                                                                              
        **Cathy Heller** is the host of the top rated podcast [Don't Keep Your Day Job](https://www.dontkeepyourdayjob.com/about/). Inspiring thousands each week, she has a way of speaking right to the heart with refreshing sincerity and tremendous insight. {'\n'}

Since starting her podcast Huffington post wrote a full page story on Cathy's success and her show has been mentioned in the *NY Times* and *Inc* magazines “top 9 podcasts”. Cathy has interviewed creative entrepreneurs like Actress Jenna Fisher, Marketing expert Seth Godin, designer Jonathan Adler, make up artist Bobbi Brown, founder of Jimmy Choo, novelist Emily Giffin and Gretchen Rubbin to name a few.{'\n'}

When she's not podcasting, she's writing music for film/tv. She lives in Los Angeles with her husband and three daughters. She loves spicy tuna rolls and Larry David. {'\n'}
      </Block>
    </Tab>
   <Tab title="Mirna">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Mirna.Valerio.WDS.2018.Speaker.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Mirna Valerio{'\n'}
                                                                                                                                              
        **Mirna Valerio** is a native of Brooklyn, NY, a former educator, cross-country coach, ultrarunner, obstacle course enthusiast, and author of the recently published memoir, *A Beautiful Work in Progress*.{'\n'}

Although she began running in high school, she recommitted to the sport after a health scare in 2008. It was then that her love for running and all its attendant benefits were reignited. She soon started her blog Fatgirlrunning, about her experiences as a larger woman in a world of thinner athletes. {'\n'}

Mirna's athletic story was featured in the *WSJ, Runner’s World*, on the *NBC Nightly News*, *CNN*, on the *CW Network*, and in the viral REI-produced documentary short, The Mirnavator. Her writing has been featured in *Women’s Running Magazine*, *Self Magazine Online*, *Outside Online*, and *Runner's World Magazine*. Most recently, she was chosen as a *2018 National Geographic Adventurer of the Year*.{'\n'}
      </Block>
    </Tab> 
    <Tab title="Paula">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Paula.Pant.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Paula Pant{'\n'}
                                                                                                                                              
       **Paula Pant** quit her 9-to-5 job, traveled to 35 countries, runs a business from her laptop and built a mini- real estate empire, which provides enough passive income to support her creative lifestyle. She's financially independent and spends her time traveling, writing, podcasting, creating videos, and raising funds for worldwide charity projects.{'\n'}

Today, Paula spends her time traveling, writing, podcasting, creating videos and raising funds for worldwide charities. She’s traveled to more than 35 countries. She’s been featured in hundreds of publications, including *Lifehacker, Mashable, Forbes, Fortune, US News, NPR,* and *Oprah.com*. {'\n'}

She’s is the host of the award-winning **_Afford Anything_** podcast, which has been downloaded nearly 3 million times. You can find her instigating rebellion on her website and blog, [affordanything.com](https://affordanything.com). {'\n'}
      </Block>
    </Tab>
  </Tabs>
  <div class="clear" />
</Section>  
   
<Section
  color="white"
>
    
  <SpeakerList title="2018 Speakers" year="2018" />
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
      ## How Can We Help? {'\n'}
      Have questions about WDS? Trying to find the best donut in Portland? Looking for a high-five? Let our concierge team know how we can help make your WDS experience great.{'\n'}
           <Button to="mailto:concierge@wds.fm" newWindow={true} styling="orange" fitToText>Email Concierge Team</Button> 
    </Block>
  </Block>
</Section>
<Section color="orange" overflow="hidden">
  <Block margin="60px 0 30px">## Tickets are On Sale!</Block>
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
