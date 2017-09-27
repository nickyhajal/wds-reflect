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
    As we've done since year one, the main events (keynotes and celebrations) take place during the weekend of WDS. Additionally, every attendee will have the ability to add events and activities throughout the entire week to create their own personalized schedule. You decide if you'll join us for the weekend or come for the entire week. Regardless, a WDS 360 ticket gives you access to it all.{'\n'}
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
    - **Wednesday** Academies, Small Group Activities and Attendee-Led Meetups{'\n'}
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
  <Block>## Speakers and Special Guests from WDS 2017</Block>
  <Block cols="6" className="bigger">
    Every year we're excited to invite several friends of WDS living extraordinary lives and working to build a better world. Our keynote speakers are bestselling authors, leading activists, and in-demand storyteller and they come to WDS to share their stories, experiences, and lessons with our community. Here are some of our most recent speakers from WDS 2017.  {'\n'}
  </Block>
  <Tabs style="dots">
    <Tab title="Vanessa">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/vanessa.van.edwards.jpg" width="904" height="549" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Vanessa Van Edwards{'\n'}
        <p>Vanessa Van Edwards is a behavioral investigator and published author. She runs a human behavior research lab where she uncovers the hidden forces that drive our behavior called the <Link to="http://www.scienceofpeople.com/">Science of People.</Link>.</p>
<p>Vanessa is fascinated by body language, leadership and charisma and writes about these topics for CNN, <i>Fast Company</i> and <i>Forbes</i>. She also writes a monthly column for <i>Entrepreneur Magazine</i> and the <i>Huffington Post</i>. Her innovative work has been featured on NPR, <i>Business Week</i> and <i>USA Today</i>. More importantly she's addicted to sour patch kids, airplane coffee and puppies. Vanessa's new book, <i><Link to="http://www.scienceofpeople.com/captivate/">Captivate</Link></i>, launches this April.</p>
      </Block>
    </Tab>
 <Tab title="Harris">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Harris.Zafar.WDS2017.speaker.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Harris Zafar {'\n'}
       <p><b>Harris Zafar</b> is National Spokesperson for Ahmadiyya Muslim Community USA – among the oldest Muslim organizations in America – and author of book “Demystifying Islam: Tackling the Tough Questions.” From Fox News and CNN to syndicated radio programs, Harris regularly appears on national and local news to address issues facing Islam and the Muslim world while elucidating the need for true pluralism and understanding. A staunch advocate for universal human rights, Harris was praised in a March 2012 motion raised on the floor of the House of Commons in Great Britain for his work defending religious freedom for all. Harris lectures on campuses like Harvard, Yale and Berkeley around the country to provide insight on current issues from an Islamic perspective and also address practical solutions for the world's problems.</p>
      <p>Driven by a desire to break down misunderstandings and find common ground, Harris passionately works to promote conversation and tolerance between people of diverse backgrounds.  Focusing on the humanity of all people, Harris confronts difficult questions with a commitment to respectful dialogue and truth. If not on television or social media, you can find Harris wearing his "I'm a Muslim, Ask Me Anything" t-shirt every week in order to spark conversation.</p>
         </Block>
    </Tab>
    <Tab title="Rich">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/rich.roll.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Rich Roll {'\n'}
       <p>Rich Roll is one of the world's most popular world-class ultra-endurance triathletes, a widely regarded plant-based nutrition & wellness advocate, writer, public speaker, podcast host, husband and father of 4. In 2009 he was recognized as one of the “25 Fittest Men in the World” by <i>Men's Fitness Magazine</i> and has been featured on CNN and contributed to publications such as <i>Outside</i>, <i>Los Angeles Times Sunday Magazine</i>, <i>VegNews</i>, <i>Huffington Post</i>, <i>Triathlete</i>, <i>3/GO</i> and <i>Men’s Fitness</i>.</p>
       <p>After a struggle with alcoholism and 20 year respite from competitive sports, Rich adopted a plant-based diet, shed 50 pounds and launched a middle-aged assault on the Ultraman World Championships, one of the most daunting endurance races on in the world. His inspirational memoir <i><Link to="http://www.richroll.com/shop/books/finding-ultra-signed/">Finding Ultra</Link></i> is a #1 bestseller on Amazon and he also hosts the popular, Rich Roll Podcast. Learn more about Rich's story at <Link to="http://www.richroll.com/">www.RichRoll.com.</Link></p>
      </Block>
    </Tab>
        <Tab title="Scott">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Scott.Harrison.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Scott Harrison{'\n'}

        <p>Scott Harrison is a former nightclub promoter, volunteer photojournalist, and in 2006 founded the non-profit organization <Link to="https://www.charitywater.org/">charity: water</Link>. In ten years, with the help of more than one million donors worldwide, charity: water has raised over $225 million and funded over 21,000 water projects in 24 countries. When completed, those projects will provide over 6.4 million people with clean, safe drinking water.</p> 
        
<p>Scott has been recognized in Fortune Magazine’s 40 under 40 list, the Forbes Magazine Impact 30 list and was recently #10 in Fast Company’s 100 Most Creative People in Business issue. Currently he serves as a World Economic Forum Young Global Leader. Five years ago, Scott received a standing ovation at WDS 2012, and more than half the community volunteered to give up their birthdays for clean water. He's returning this year with a new challenge.</p> 
        
      </Block>
    </Tab>
         <Tab title="Mohammed">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/mohammed.faris.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Mohammed Faris{'\n'}
        <p>Mohammed Faris** is an international author, speaker and leader of a community with more than one million people. He started his journey in 2007 when he became obsessed with the question: "Can faith boost productivity?" Mohammed has since spent the last decade trying to answer this question - from his own Islamic faith tradition - his popular blog,, <Link to="http://ProductiveMuslim.com">ProductiveMuslim.com</Link>, and his new book "The Productive Muslim: Where Faith Meets Productivity".</p> 
        <p>Mohammed has delivered talks and trainings at numerous events and seminars across the world. He's also been featured in international media and on the TEDx stage. In 2014, the Royal Islamic Strategic Studies Centre added him to the World’s 500 Most Influential Muslims list</p>  
      </Block>
    </Tab>
        <Tab title="Benny">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/benny.lewis.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Benny Lewis{'\n'}

        <p>Benny Lewis is the language hacker, <i>National Geographic</i> Traveler of the year, author, YouTuber and charming Irish lad behind the hugely successful <Link to="http://www.fluentin3months.com/">Fluent in 3 Months</Link> blog and international best selling book. For a decade and a half he has traveled the world, immersing himself in local cultures and learning local languages. He can speak 7 languages fluently, and can get by in many more, despite the fact that he only spoke English at the age of 21.</p> 
      
      <p>Although he mostly writes about language learning, his background is in electronic engineering and he applies this engineering mindset to his business, his language learning projects and his lifestyle. He is a passionate "imperfectionist" and loves learning new things that involve pushing his limits, and finding the right balance between insane random experimental wonder and strict scientific logic. Imagine Jack Sparrow meets Spock with an Irish accent!</p>
      </Block>
    </Tab>
 <Tab title="Jolie">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Jolie.Guillebeau.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Jolie Guillebeau{'\n'}

        **Jolie Guillebeau** is an artist, teacher, and perpetual learner. She recently completed an M.A. in Art Therapy Counseling and is beginning a new career understanding and serving people impacted with developmental trauma. {'\n'}
      
         A founding team member of WDS, she serves as President of the WDS Foundation, Team Fixer, and our longstanding Voice of Reason. She also makes magical ice cream sundaes and can quote every lyric from Lin-Manuel Miranda's Hamilton.{'\n'}
      </Block>
    </Tab>
     <Tab title="Firuzeh">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Firuzeh.Mahmoudi.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Firuzeh Mahmoudi{'\n'}

        **Firuzeh Mahmoudi** is the Director of United for Iran, a Bay Area NGO working to improve civil liberties in Iran. After witnessing the 2009 uprising in Iran, Mahmoudi organized a global rally in 110 cities. The day turned to be the largest day of global support for Iran in history. Shortly after, Mahmoudi started United for Iran. Seven years later, United for Iran works to improve the capacity of civil society and improve human rights conditions — all through the use of technology.{'\n'}

        From 2005 to 2009, Mahmoudi was the international coordinator of a $13 million United Nations project aiming to demonstrate best environmental health practices in the global south. Previous to that, Mahmoudi served as the international co-coordinator of the environmental health coalition Health Care Without Harm, supporting communities in dozens of countries as they advocated for environmental justice and health. {'\n'}
      </Block>
    </Tab>
<Tab title="Agapi">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Agapi.Stassinopoulos.WDS.2017.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Agapi Stassinopoulos{'\n'}

        **Agapi Stassinopoulos** is a best-selling author and speaker who inspires audiences around the world. In her previous book, _Unbinding the Heart: A Dose of Greek Wisdom, Generosity, and Unconditional Love_, she shares the wisdom from her life’s adventures and experiences. In her new book, _Wake Up to the Joy of You: 52 Meditations and Practices for a Calmer, Happier Life,_ she takes readers on a journey and inspires them to let go of what doesn’t work and instead create the lives they really want. {'\n'}

        She is currently conducting workshops for Thrive Global, a company founded by her sister, Arianna Huffington, to help change the way we work and live. Agapi has spoken and conducted meditations at many corporations including PepsiCo, Google, Nike and Starbucks. She divides her time between New York and Los Angeles and was born and raised in Athens, Greece. {'\n'}
 
        To learn more about Agapi and her work visit [wakeuptothejoyofyou.com](http://www.wakeuptothejoyofyou.com).{'\n'}
      </Block>
    </Tab>
<Tab title="Charles">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/speakers/Charles.Hunt.WDS.2017.speaker.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Charles Hunt{'\n'}

        **Charles Hunt** is a resilience expert, adjunct professor, speaker and trainer.  Adept at leveraging transparency to inspire and get results, this former college recruiting, talent management, diversity and supply chain leader left the corporate world to fulfill his vision of building unbreakable spirits and cultivating resiliency for those who like him, have [The Audacity](http://www.audacityfirm.com/) to succeed despite adversity. {'\n'}

        With a mantra of “you’re as resilient as you THINK you are”, he helps students, young professionals, business and thought leaders build resilience while harnessing our most important resource in resilience…our minds. Charles’ TEDx Talk ["What Trauma Taught Me About Resilience"](https://www.youtube.com/watch?v=3qELiw_1Ddg&feature=youtu.be) has attracted international acclaim. A lover of hip-hop, Charles is a firm believer that there’s a Jay-Z lyric for every situation and finds joy in weaving lines into everyday conversation! {'\n'}
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
  <Block margin="50px 0">## Join us at WDS 2018; June 26 - July 2</Block>
  <Block margin="50px 0">###  Be the first to get notified when tickets go on sale next.</Block>
  <Block width="400px" align="center" margin="50px 0 0" css={{ maxWidth: "400px" }}>
    <Form
      list="WDS 2018 Waiting List"
      successMessage="Great, we'll let you know when sales start for WDS 2018!"
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
