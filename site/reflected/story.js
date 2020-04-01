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
  headerImage="v2/hero/story.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/story.png" width="429px" height="190px" className="scriptHeader" preload/>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Why WDS?{'\n'}
    Way back in 2011, we invited 500 friends to Portland, Oregon. Our common curiosity brought us together to explore one question: _How do we live a remarkable life in a conventional world?_  {'\n'}

Fast forward to 2020, and we’re still exploring that question every summer with an in-person gathering that has now included **more than 10,000 people from all 50 states and more than 40 countries** since we started. The stakes and stories have grown each year with activities like Bollywood dancing, Academies, Guinness World Records, and the creation of a foundation that offers grants to individuals to pursue their dreams and positively impact their community. We call them “Scholarships for Real Life”. {'\n'}
    
    With a full week of events and an unforgettable keynote speaker-filled weekend, you'll learn from unconventional thinkers, acquire powerful new skills, and go away with an all-new community of friends and supporters.{'\n'}
  
    This summer, adventurers from all over the world (you!) will join us in Portland for our final WDS. We'll celebrate 10 years of **Community, Adventure,** and **Service** and our shared pursuit of postively impacting the world.{'\n'}
  </Block>
</Section>
<Section color="canvas" bound={false}>
  <div style={{ width: '996px', margin: '0 auto' }}>
    <YearReviews years={[{
        title: 'Year Six', 
        year: '2016',
        dates: "August 9-14, 2016",
        highlights: ['6 Days of Community, Service & Adventure', 'Overcoming our fears with Michelle Poler', 'Dancing Jellyfish!'],
        speaker: [`As people who want to commit themselves to ‘world domination,’ it is our responsibility to have some kind of a practice while the world is going to hell in a handbasket, other than buying handbaskets."`, 'Rev. angel Kyodo williams'],
        surprise: "WDS tattoos backstage!",
        photos: {preview: 'photos/trex.jpg', link: 'https://www.flickr.com/photos/chrisguillebeau/albums/72157669269939103'},
        videos: {preview: 'photos/chelsea.jpg', link: 'https://vimeopro.com/aonc/wds-2016-keynotes'}
      },
      {
        title: 'Year Five',
        year: '2015', 
        dates: 'July 9-13, 2015',
        highlights: ['Lipstick selfies', 'Q&A with The Kid President', 'Breakfast in Bed Guinness World Record!'],
        speaker: [`"Your voice is never lost, it’s always waiting to be found."`, 'Jon Acuff'],
        surprise: `Attendee photos projected on building during closing party`,
        photos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2015+Pictures.jpg', link: 'https://www.flickr.com/photos/chrisguillebeau/albums'},
        videos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2015+Videos.jpg', link: 'https://vimeopro.com/aonc/wds2015'}},
      {
        title: 'Year Four',
        year: '2014',
        dates: 'July 10-14, 2014',
        highlights: ['Portland Experience opening party', 'Hot Air Balloon Rides!', 'The Great Namaste World Record'],
        speaker: [`"Take imperfect action"`, 'Jadah Sellner'],
        surprise: `Color shower`,
        photos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/Photos+2014.jpg', link:'https://www.flickr.com/photos/chrisguillebeau/albums/72157645692660113'},
        videos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2014+Videos.jpg', link: 'https://vimeopro.com/aonc/wds-2014-keynotes'}
      },
      {
        title: 'Year Three',
        year: '2013',
        dates: 'July 3-5, 2013',
        highlights: ['First time at the Arlene Schnitzer Concert Hall', 'Opening Party at the Oregon Zoo', 'The World Float Guinness World Record'],
                surprise: `Champagne toast in the Arlene Schnitzer Concert Hall`,
        speaker: [`Brene Brown and Chris Guillebeau signing "Don't Stop Believing" live on stage`],
        photos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2013+Pictures.jpg', link: 'https://www.flickr.com/photos/chrisguillebeau/albums/72157634510088202'},
        videos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2013+Videos.jpg', link: 'https://vimeopro.com/aonc/wds1013'},
      },
      {
        title: 'Year Two',
        year: '2012',
        dates: 'July 6-8, 2012',
        highlights: ['First time at the Antoinette Hatfield Hall', 'Bungee jumping with Joel Runyon', 'Carnival themed Opening Party'],
        speaker: [`"The path to a passionate life is often way more complex than the simple advice 'follow your passion' would suggest."`, 'Cal Newport'],
        surprise: `The $100 Investment`,
        photos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2012+Pictures.jpg', link: 'https://www.flickr.com/photos/chrisguillebeau/albums/72157630469839810'},
        videos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2012+Videos.jpg', link: 'https://vimeopro.com/aonc/wds-2012-keynotes'},
      },
      {
        title: 'Year One',
        year: '2011',
        dates: 'June 3-5, 2011',
        highlights: ['A giant ice sculpture', 'Love notes from every attendee', 'A dance party'],
        speaker: [`"Adventuring occurs when we actually embrace possibility."`, 'Jonathan Fields'],
        surprise: `We actually pulled this off!`,
        photos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2011+Pictures.jpg', link: 'https://www.flickr.com/photos/chrisguillebeau/albums/72157626854701827'},
        videos: {preview: 'https://s3.amazonaws.com/el-files-wds/images/photos/2011+Videos.jpg', link: 'https://vimeopro.com/aonc/wds-2011-keynotes'},
      },
      ]}/>
  </div>
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
