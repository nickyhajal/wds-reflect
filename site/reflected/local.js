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

  
  const Page = (props) => (
    <div>
      <Section
  headerImage="v2/hero/local.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/local.png" width="545px" height="149px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Living out our remarkable lives in community{'\n'}
    WDS Local is a way that alumni can gather regularly through out the year, support each other, and bring WDS home to their local communities. It's a way to continue conversations and go on new adventures together outside the annual WDS gathering in Portland.{'\n'}
    
    WDS Local is for anyone that has previously attended a WDS, or who knows an alum and wants to participate in a great community. To join, find a group in your area and connect on Facebook!{'\n'}
  </Block>
  <Block margin="125px 0 50px 0">
    ## WDS Local Group Directory{'\n'}
    <Grid numCols="3" tabletCols="2" block={{ className: 'dropped-button' }} equalize>
     <Block type="image-narrow" src="photos/wdslocal/Chicago.WDS.local.png">
      ## Chicago, Illinois{'\n'}
      <Button to="https://www.facebook.com/groups/wdslocalchicago/" newWindow={true} fitToText>Join Up</Button>
    </Block>
<Block type="image-narrow" src="photos/wdslocal/Dubai.WDS.local.png">
      ## Dubai, UAE{'\n'}
      <Button to="" newWindow={true} fitToText>Join Up</Button>
    </Block>
      <Block type="image-narrow" src="photos/wdslocal/los.angeles.WDS.local.png">
      ## Los Angeles, California{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalLosAngeles/" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/minneapolis.st.paul.WDS.local.png">
      ## Minneapolis/St.Paul, Minnesota{'\n'}
      <Button to="https://www.facebook.com/groups/WDSLocalMSP/" newWindow={true} fitToText>Join Up</Button>
    </Block>
<Block type="image-narrow" src="photos/wdslocal/Montreal.WDS.local.png">
      ## Montreal, Canada{'\n'}
      <Button to="https://www.facebook.com/groups/362773834180748//" newWindow={true} fitToText>Join Up</Button>
    </Block>
    <Block type="image-narrow" src="photos/wdslocal/new.york.city.WDS.local.png">
      ## New York City,   New York{'\n'}
      <Button to="https://www.facebook.com/groups/NYCWDS/" newWindow={true} fitToText>Join Up</Button>
    </Block>
<Block type="image-narrow" src="photos/wdslocal/NorthBay.WDS.local.png">
      ## North Bay, California{'\n'}
      <Button to="https://www.facebook.com/groups/124075594879283/" newWindow={true} fitToText>Join Up</Button>
    </Block>
 <Block type="image-narrow" src="photos/wdslocal/ohio.WDS.local.png">
      ## Ohio{'\n'}
      <Button to="https://www.facebook.com/groups/wdslocalohio/" newWindow={true} fitToText>Join Up</Button>
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
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
  The WDS 2020 ticket sale didn’t last a single day... we’re now at full capacity with no more tickets available.{'\n'}
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
