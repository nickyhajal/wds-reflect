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
      
    Read more about funded projects from the past few years and how to apply for a Scholarship for Real Life below:{'\n'}
  </Block>
</Section>
<Section color="canvas">
  <Block>## Featured Projects</Block>
  <Tabs style="dots">
    <Tab title="Jolyn">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Jolyn.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Jolyn GC Gallery - 2017{'\n'}

        Calling all emerging artists, art learners, art lovers, and art leaders!  Have you been thinking of ways to make the art world more inclusive and accessible?  Well, 2017 Voyager Jolyn Gardner has set out to create a digital marketplace that showcases and brings to center, the amazing and underrepresented work of emerging artists of the African Diaspora, a group often marginalized and ignored by the traditional art world.{'\n'}
        
        With the help of the Foundation, Jolyn will leverage current technology to create a virtual gallery going experience featuring emerging artists in curated exhibitions and art web series' accessible via smart device along with an art web series. {'\n'}
        
      </Block>
    </Tab>
     <Tab title="Chelsea">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Chelsea.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Global Gastros - 2017{'\n'}

        How much do you know about where your food comes from? And not the ‘Portlandia’-style meeting your chickens, but the history and deeper understanding of where quinoa comes from and why it is a superfood? Travel writer and trained anthropologist, Chelsea Rae Schmidt’s vision is to preserve diversity in our world’s food systems through the study and promotion of traditional recipes, indigenous ingredients, and unique culinary traditions. Her project, called Global Gastros, focuses on working with communities in the Nordic region (focused on Sweden and Copenhagen), the Southwest United States (focusing on Native American culinary traditions and recipes), and in the Amazon (spending time in Colombia, Peru, and Brazil) to help bring awareness to the issue of food culture preservation. {'\n'}
        
        Through Scholarship funds, Chelsea will lead workshops in the communities, lead supper clubs and start work toward developing a cookbook to continue to pass on this knowledge of food and culture and plans to share all her research and all the collected recipes in an online, open-source database {'\n'}
      </Block>
    </Tab>
        <Tab title="Andrew & Michelle">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Andrew-and-Michelle.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Self Care 101 for Educators - 2017{'\n'}

      We can all agree that self-care is extremely important, right? And I think we can all agree that educators, with taxing, demanding jobs, have an even greater need for support to ensure they are taken care of. That is what inspired Andrew Nance and Michelle Holdt to create Self Care 101 for Educators.{'\n'}
      
      Andrew and Michelle are both very passionate about bringing mindfulness and arts integration to teachers and illustrating how the two connect to creating a life worth living. Through a workshop for public school teachers in underserved communities across the United States, the project will give educators the tools to bring these practices to both their own lives and those of their students.{'\n'}
      
      The Scholarship for Real Life grant will help jump start the project first year (for the 2017-2018 school year) and will create a model for continued implementation over the next three to five years - with the end goal being to create a National Model and eventually train other educators to bring this work to more schools and districts. {'\n'}
        
      </Block>
    </Tab>
      <Tab title="Lindsay & Leah">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Lindsay-and-Leah.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Upside Down Sound - 2017{'\n'}
      
      Have you ever wanted to learn something new? Think about how difficult that is. Now imagine you have down syndrome and the extra layer of challenge that presents… Lindsay Stodden’s sister, Leah, has down syndrome, and has been her inspiration for creating Upside Down Sound, a piano-based app for individuals with down syndrome, to encourage cognitive stimulation, physical activity, and decrease social isolation among this population.{'\n'}
      
      Charged with the knowledge that there is a growing number of adults with Down syndrome (DS) who, because of their genetic makeup, are highly at-risk for developing Alzheimer’s Disease (AD), likely to experience physical health conditions, and at-risk to develop mental illnesses such as depression due to social isolation.{'\n'}
      
      Seeing the benefits that have come from Leah learning and playing piano her whole life, the two wanted to extend those benefits to others with down syndrome. Using basic piano lessons as curriculum, UDS will encourage cognitive stimulation, and the app makes learning accessible and fun, as there are no passwords to memorize or barriers to entry, and celebrations at each level of completion. The Scholarship for Real Life will allow UDS to become a reality and Lindsay and Leah are excited for the app to not only support others with down syndrome but other populations for which cognitive stimulation will improve their quality and length of life. {'\n'}

      </Block>
    </Tab>
    <Tab title="Ben & Amberlynn">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Ben-and-Amberlynn-Slavin.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## SnapType - 2016{'\n'}

        SnapType breaks down the barriers to education and helps students survive in a school system that wasn’t designed for them. The app enables students to complete any school worksheet on an iPad.{'\n'}

An estimated 1 in 5 people have difficulty expressing themselves through writing. For students, that can lead to falling behind in class, emotional problems at home, low self-esteem, and a sense of hopelessness. When Amberlynn Slavin was doing her fieldwork as an occupational therapy graduate student, she worked with a child who had dysgraphia - a learning disability that makes handwriting incredibly messy.{'\n'}

Together with her husband, Ben Slavin, they created an app to take a picture of a worksheet and then simply type the answers in on the screen. Feedback from the community has been extremely positive! The challenge they face now is that there are 4 times as many Android devices used around the world than there are Apple. To make SnapType work on Android, they have to re-write the app from the ground up in a completely different programming language.{'\n'}

A WDS Foundation scholarship was granted to help fund the development of SnapType for Android. Soon, students around the world will be given the chance to have more independence, self confidence and the opportunity to keep up with their peers!{'\n'}

<p>To learn more, or to contact Ben and Amberlynn, visit <Link to="http://www.snaptypeapp.com">SnapTypeApp.com</Link>.</p>
      </Block>
    </Tab>
<Tab title="Marla & Kasha">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Global+Sunrise+Project.png" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## The Global Sunrise Project - 2016{'\n'}

        Kasha Sequoia Slavner is an 18-year old filmmaker/photographer, author, social entrepreneur, young global leader & peace advocate. As a concerned high school student, disillusioned and outraged by the negativity and powerlessness she felt as a consumer of mainstream media, Kasha was compelled to find an alternative narrative. With her mom Marla’s blessing and mentorship, she launched The Global Sunrise Project, a social impact media hub focused on sharing solution-oriented stories about some of the world’s most pressing issues. Taking a year off school, with the help of community, she sets out on her 16th birthday on an ambitious mission to travel the world for six months with her mom for the purpose of documenting stories of hope, resilience. empowered leadership. With a DSLR camera in hand and no clear itinerary or roadmap, Kasha finds herself intersecting with the lives of people determined to rise above adversity and shares their insights to inspire others to find it within their own hearts to take action, no matter how small, and to live out their purpose and passion in a way that contributes to the betterment of the world.{'\n'}

With the generous help of the WDS Scholarship for Real Life grant, Marla and Kasha will be able to move The Global Sunrise Project forward in a timely manner, enabling Kasha to finish the post-production of her first feature length documentary film **The Sunrise Storyteller©**, submit it to film festivals, launch a film website and publish the hardcover edition of her book **Reflections of the Sunrise Storyteller - A Journey into the Heart as a Global Citizen©**.{'\n'}

2017 plans include a tour with the film, exhibition & book, as well as accompanying keynote, workshop and development of a community engagement platform. As part of their mandate for social good, between 10-25% of net proceeds are donated back to grassroots organizations.{'\n'}

<p>They are currently looking for website designers, developers, influencer mentors/advisors & community builders to contribute their talents and expertise. If you have an interest in contributing to their project please visit <Link to="http://theglobalsunriseproject.com">The Global Sunrise Project</Link> & email <Link to="mailto:theglobalsunriseproject@gmail.com">theglobalsunriseproject@gmail.com</Link>.</p>
      </Block>
    </Tab>
<Tab title="Kathleen & Joe">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Kathleen-and-Joe+Sindorf.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Global Video Academy - 2016{'\n'}

        There are countless, huge problems that humanitarians and activists around the world are working hard to alleviate. Unfortunately, far too many of these hard-working people are working in a vacuum, isolated from the support of an informed and energized community.{'\n'}

At its core, the problem is a failure to effectively communicate what they’re doing. Learning to use simple, effective video storytelling skills could make a tremendous difference in the success of their causes.{'\n'}

Kathleen and Joseph Sindorf are award-winning television professionals, who have worked in more than 75 countries. Kathleen is a university professor, and Joseph is a documentary filmmaker. Their experiences have given them a passion to share their professional knowledge with those who are working hard to make a difference in the world.{'\n'}

The Sindorfs have taught people in five countries how to use their smartphones to create short videos to compel viewers to get involved in their work. The WDS “Scholarship for Real Life” will allow them to expand this training to create “Global Video Academy” – an online learning environment to allow people everywhere to learn to use video more effectively.{'\n'}

Part of this training will be developed internationally, including a teaching trip with a group of university students who will be creating digital media stories among Syrian and Iraqi refugees in Amman, Jordan. They will use social media and their new video skills to communicate their experiences back home to their communities.{'\n'}

<p>You can follow the Sindorfs’ adventures as they develop this project. Just go to <Link to="http://www.globalvideoacademy.com">GlobalVideoAcademy.com</Link>.</p>
      </Block>
    </Tab>
    <Tab title="Emily">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Emily-Wray.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Voices of Petersburg - 2015{'\n'}

        We’ve all experienced moments when we struggling to put into words an experience or emotion. Voices of Petersburg is a three-day digital storytelling workshop for clients of Petersburg Mental Health Services in Petersburg, Alaska. Participants choose an experience they want to share and write a script for a digital story to give voice to their struggles and triumphs. The process of writing, choosing supportive media assets, and bringing the story to the screen provides a platform for healing unique to the mental health therapies.{'\n'}

<p>With the help of the Foundation, Emily and her team will build a mobile curriculum that can travel outside of Petersburg and assist individuals in mental health facilities around the U.S. She is currently looking for assistance with social media, fundraising, and product development. you. If you are interested in contributing to her project, visit <Link to="http://emily-wray-vh7i.squarespace.com/">voicesofpetersburgak.com</Link>.</p>
      </Block>
    </Tab>
    <Tab title="Valerie">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation/Valerie.jpg" width="904" height="549" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Ryan Banks Academy - 2015{'\n'}

        School teachers in urban districts face special challenges in promoting their students’ long-term academic success. It is no surprise that so-called “failing” schools are disproportionately situated in urban centers with high rates of poverty and crime. Valerie Groth is a mission to change that for Chicago-area students. In 2014, she founded Ryan Banks Academy, a coeducational boarding school that seeks to impact the lives of students through a rigorous college and career preparatory education, a supportive boarding program, and a focus on personal development in a positive environment. The goal of Ryan Banks Academy is to teach students not only the value of education, but also encourage them to focus on cultivating their own unique strengths, interests, and passions so that they may lead a purpose-filled life. Curriculum focuses not only on academic pursuits, but also on developing their relationships, core values, and mindset.{'\n'}

<p>There are many steps in her journey to build the school, and the Scholarship for Real Life grant will be helping get her fundraising efforts of the ground, as well as help support her burgeoning volunteer program. She is currently looking for assistance with grant writing and donor outreach, as well as anyone with a background in curriculum development. If you are interested in contributing to Ryan Banks Academy, you can email <Link to="mailto:ryanbanksacademy@gmail.com">ryanbanksacademy@gmail.com</Link> or visit <Link to="http://www.ryanbanksacademy.org">ryanbanksacademy.org</Link></p>
      </Block>
    </Tab>
  </Tabs>
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
The "Scholarships for Real Life" program is open to all alumni who have attended one of our past seven WDS events OR those that have [officially registered for WDS 2018](https://worlddominationsummit.com/join-us) even if this is your first time attending.{'\n'}

##### 2018 Applications - Now Closed!{'\n'}

Don't stop believin! The deadline to apply for 2018 grants has passed but keep your dreams alive. {'\n'}

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
