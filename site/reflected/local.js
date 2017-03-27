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
  headerImage="hero/local.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/local.png" width="545px" height="149px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Living out our remarkable lives in community{'\n'}
    WDS Local is a way that alumni can gather regularly through out the year, support each other, and bring WDS home to their local communities. It's a way to continue conversations and go on new adventures together outside the annual WDS gathering in Portland.{'\n'}
    
    WDS Local is for anyone that has previously attended a WDS, or who knows an alum and wants to participate in a great community. To join, find a group in your area and connect on Facebook!{'\n'}
  </Block>
  <Block margin="125px 0 50px 0">
    ## WDS Local Group Directory{'\n'}
    <Grid numCols="3" tabletCols="2" block={{ className: 'dropped-button' }} equalize>
    <Block type="image-narrow" src="photos/wdslocal/los.angeles.WDS.local.png">
      ## Los Angeles, California{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalLosAngeles/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/minneapolis.st.paul.WDS.local.png">
      ## Minneapolis/St.Paul, Minnesota{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalMSP/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/new.york.city.WDS.local.png">
      ## New York City,   New York{'\n'}
      <Button to="https://www.facebook.com/groups/NYCWDS/" newWindow={true} fitToText>Join Up</Button>
    </Block>
 <Block type="image-narrow" src="photos/wdslocal/philadelphia.WDS.local.png">
      ## Philadelphia, Pennsylvania{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalPhiladelphia/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/portland.wds.local.jpg">
      ## Portland,   Oregon{'\n'}
      <Button to="https://www.facebook.com/groups/pdxwds/" fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/san.diego.WDS.local.jpg">
      ## San Diego, California{'\n'}
      <Button to="https://www.facebook.com/groups/362794770457200/" newWindow={true} fitToText>Join Up</Button>
    </Block>
 <Block type="image-narrow" src="photos/wdslocal/san.francisco.WDS.local.png">
      ## San Francisco, California{'\n'}
      <Button to="https://www.facebook.com/groups/BayAreaWDSAlums/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/seattle.WDS.local.jpg">
      ## Seattle, Washington{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalSeattle/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/toronto.WDS.local.png">
      ## Toronto,   Canada{'\n'}
      <Button to="https://www.facebook.com/groups/WDSToronto/" newWindow={true} fitToText>Join Up</Button>
    </Block>
 <Block type="image-narrow" src="photos/wdslocal/vanouver.WDS.local.png">
      ## Vancouver, Canada{'\n'}
      <Button to="https://www.facebook.com/groups/VancouverWDS/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/victoria.WDS.local.png">
      ## Victoria, Canada{'\n'}
      <Button to="https://www.facebook.com/groups/121832781617165/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/washington.dc.WDS.local.png">
      ## Washington, D.C.{'\n'}
      <Button to="https://www.facebook.com/groups/263193840458019/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    </Grid>
  </Block>
   <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
   ## How Can I Get Involved?{'\n'}
   At the moment several groups are already meeting regularly and more are being launched each month. Our goal is to help launch WDS Local groups in areas where there are at least 3 people that are willing to meet on a regular basis. The focus is not about how many people get together, but solely on the commitment that members of these groups have to each other. The success of WDS Local groups is solely dependent on the commitmment and active participation of it's members.{'\n'}
   
   WDS Local is for anyone that:{'\n'}
   <ul>
   <li>Lives out the WDS mission and core values (community, adventure, and service)</li>
<li>Has previously attended a WDS or</li>
<li>personally knows a WDS alum and is planning to attend a future WDS</li>
<li>Wants to meet and get to know other awesome WDS community members</li>
<li>Wants to help others live out their remarkable lives</li>
</ul>
     </Block>
</Section>
<Section color="sea">
  <Block cols="5" css={{ padding: '20px 0 20px' }}>
   ## Get Connected{'\n'}
<font color="white">Does this sound like you? Click on the button below and we'll do our best to get you connected to a local group or help you start one in your area if it's possible.</font>
<Block anchor="center" align="center" width="300" margin="20px 0 0 0">
<Button to="http://bit.ly/WDS-Local-Interest-Form" newWindow={true} styling="white" fitToText>Connect me to a group</Button> 
 </Block>
 </Block>
</Section>

<Section color="orange">
  <Image src="heading/joinus.png" width="288px" height="88px" align="center" />
  <Block margin="50px 0">## "You're telling me there's still a chance..."</Block>
  <Block margin="50px 0">Sign-up below to be notified when tickets go back on sale for WDS 2017.</Block>
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
