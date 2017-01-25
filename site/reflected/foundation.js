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
import is from '../utils/is';

  
  const Page = () => (
    <div>
      <Section
  headerImage="hero/foundation.jpg"
  headerClip="rl_header"
  headerPosition="center center"
  headerSize="thin"
  color="white"
>
  <Image src="heading/foundation.png" width="470px" height="165px" className="scriptHeader" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## The WDS Foundation{'\n'}
    The WDS Foundation seeks to put the right resources in the hands of amazing people who are acting on the three core values of WDS—community, adventure, and service.{'\n'}

    We do this by providing what we call "Scholarships For Real Life." The goal of these scholarships is to empower individuals to pursue their dreams and impact their community.{'\n'}

    Have a crazy project you want to bring to life? Want to take a trip around the earth and share what you learned with the world? Trying to build something that’s a bit out of your reach? Whatever it is, the WDS Foundation can help fund it. We look for inspiring projects that will improve your life and make the world a better place.{'\n'}
  </Block>
</Section>
<Section color="canvas">
  <Block>## Featured Project</Block>
  <Tabs style="dots">
    <Tab title="Emily Wray">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/Emily+Wray.jpg" width="904" height="549" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
        ## Voices of Petersburg{'\n'}

        We’ve all experienced moments when we struggling to put into words an experience or emotion. Voices of Petersburg is a three-day digital storytelling workshop for clients of Petersburg Mental Health Services in Petersburg, Alaska. Participants choose an experience they want to share and write a script for a digital story to give voice to their struggles and triumphs. The process of writing, choosing supportive media assets, and bringing the story to the screen provides a platform for healing unique to the mental health therapies.{'\n'}

With the help of the Foundation, Emily and her team will build a mobile curriculum that can travel outside of Petersburg and assist individuals in mental health facilities around the U.S. She is currently looking for assistance with social media, fundraising, and product development. you. If you are interested in contributing to her project, visit voicesofpetersburgak.com or email emilywray@gmail.com.{'\n'}
      </Block>
    </Tab>
    <Tab title="Valerie Groth">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/foundation_valerie.jpg" width="904" height="549" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
        ## Ryan Banks Academy{'\n'}

        School teachers in urban districts face special challenges in promoting their students’ long-term academic success. It is no surprise that so-called “failing” schools are disproportionately situated in urban centers with high rates of poverty and crime. Valerie Groth is a mission to change that for Chicago-area students. In 2014, she founded Ryan Banks Academy, a coeducational boarding school that seeks to impact the lives of students through a rigorous college and career preparatory education, a supportive boarding program, and a focus on personal development in a positive environment. The goal of Ryan Banks Academy is to teach students not only the value of education, but also encourage them to focus on cultivating their own unique strengths, interests, and passions so that they may lead a purpose-filled life. Curriculum focuses not only on academic pursuits, but also on developing their relationships, core values, and mindset.{'\n'}

There are many steps in her journey to build the school, and the Scholarship for Real Life grant will be helping get her fundraising efforts of the ground, as well as help support her burgeoning volunteer program. She is currently looking for assistance with grant writing and donor outreach, as well as anyone with a background in curriculum development. If you are interested in contributing to Ryan Banks Academy, you can email ryanbanksacademy@gmail.com or visit ryanbanksacademy.org{'\n'}
      </Block>
    </Tab>
    <Tab title="Ben & Amberlynn Slavin">
      <Image src="https://s3.amazonaws.com/el-files-wds/images/Ben+%26+Amberlynn+Slavin.jpg" mobile={{ all: { width: '100%' }}} width="904" height="549" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
        ## SnapType{'\n'}

        SnapType breaks down the barriers to education and helps students survive in a school system that wasn’t designed for them. The app enables students to complete any school worksheet on an iPad.{'\n'}

An estimated 1 in 5 people have difficulty expressing themselves through writing. For students, that can lead to falling behind in class, emotional problems at home, low self-esteem, and a sense of hopelessness. When Amberlynn Slavin was doing her fieldwork as an occupational therapy graduate student, she worked with a child who had dysgraphia - a learning disability that makes handwriting incredibly messy.{'\n'}

Together with her husband, Ben Slavin, they created an app to take a picture of a worksheet and then simply type the answers in on the screen. Feedback from the community has been extremely positive! The challenge they face now is that there are 4 times as many Android devices used around the world than there are Apple. To make SnapType work on Android, they have to re-write the app from the ground up in a completely different programming language.{'\n'}

A WDS Foundation scholarship was granted to help fund the development of SnapType for Android. Soon, students around the world will be given the chance to have more independence, self confidence and the opportunity to keep up with their peers!{'\n'}

To learn more, or to contact Ben and Amberlynn, visit SnapTypeApp.com.{'\n'}
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
   Currently the "Scholarships for Real Life" program is open only to those who have attended one of our past five WDS events. If this is your first year attending the World Domination Summit, you will be eligible to apply in 2017.{'\n'}
##### Coming soon{'\n'}
2016 Scholarships for Real Life have already been awarded. If you would like to be notified when applications open for 2017. Please email <Link to="mailto:foundation@wds.fm">foundation@wds.fm</Link> with your contact information and you'll be notified when applications become available. 
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
