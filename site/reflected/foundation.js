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
   Launched with an initial funding gift at the end of WDS 2013, the World Domination Summit Foundation seeks to put resources in the hands of amazing people who are acting on the three core values of WDS -- community, adventure, and service.{'\n'}

We've done this by providing individual grants that we call **'Scholarships for Real Life.'** The goal of these grants has been to empower WDS attendees to pursue their dreams and impact their community.{'\n'}

Over the past six years, WDS Foundation has granted over $200,000 to fund 21 projects. 2019-2020 is our final grant cycle, and we're looking forward sharing updates from our voyagers over the course of the next year.{'\n'}

Watch the announcement of this year's scholarship voyagers and learn more about their inspiring projects below: {'\n'}
      
  <Video placeholder="https://el-files-wds.s3.amazonaws.com/images/foundation/2019-WDS-Foundation-Voyagers.jpg" videoId="349973358" width="710" height="430"/>{'\n'}
      
  </Block>
</Section>
<Section color="canvas">
  <Block>## 2019 Scholarship Voyagers</Block>
  <Tabs style="simple">
    <Tab title="She is the Universe">
    <Video placeholder="https://el-files-wds.s3.amazonaws.com/images/foundation/Laura-Pena-WDS-Foundation.jpg" videoId="350007728" width="710" height="430"/>{'\n'}
      <Block cols="6" textAlign="left">
        ## She is the Universe (Laura Peña) - 2019{'\n'}
      
      More than ever, young women need strong role models that show them they can accomplish anything and everything they want. The wider media is catching up, featuring more films with women leading, and the extreme success of the US Women’s World Cup domination inspired countless girls everywhere. But seeing the story of a peer can be just as important, if not more, to empower another. {'\n'}

This was the catalyst for Laura Peña to create **[She is the Universe: Stories of Girls told by Girls](http://www.sheistheuniverse.org/about-us)**, a global platform dedicated to inspire, empower and support teenage girls from around the globe. Through documenting the stories of 111 teenage girls from 6 continents, of all shapes, sizes, colors, languages, and cultural and socio-economic backgrounds, Laura amplifies the voices of these young women by inspiring and empowering them to stand in their own stories and pursue their dreams, through storytelling, mentorship, and community.{'\n'}

      </Block>
    </Tab>
     <Tab title="Return of the Birds">
    <Video placeholder="https://el-files-wds.s3.amazonaws.com/images/foundation/Peter.Meddick.WDS-Foundation.jpg" videoId="350007992" width="710" height="430"/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Return of the Birds (Peter Meddick) - 2019{'\n'}

Does reading an intricately detailed description of a sound allow you to hear it on your own or does it inspire you to seek it out to hear for yourself? For Peter Meddick, it was the latter, and his own curiosity to hear the compelling detailed birdsongs described in John Burroughs’ 148-year old text, led him to ornithology collections to listen to the rare bird vocalizations. Through this process, it became clear to Peter that he wanted to bring this story to life through modern audio, creating a work that was not possible when Burroughs published it. {'\n'}

John Burroughs was a naturalist and nature essayist, and published Wake Robin in 1871. **[Return of the Birds](www.returnofthebirds.com)** offers listeners a joyful escape from busyness, a pleasant quiet place in the rush and noise of contemporary daily life, and reminds us to understand the give and take or nature and humans, and value it. “Long before we could interpret our impact on the earth, Burroughs wrote about the critical relationship between people and the land,” said Meddick. “Birds know no borders or boundaries, yet are a key indicator of the health of our environment.”{'\n'}

Through the Scholarship for Real Life from WDS Foundation, Peter and his family will work with one of the premier Ornithology libraries to access the best recorded bird vocalizations available, and with sound engineers, to produce the serialized audiobook podcast.{'\n'}

        
      </Block>
    </Tab>
        <Tab title="A Walk in our Shoes">
    <Video placeholder="https://el-files-wds.s3.amazonaws.com/images/foundation/YuliyaPatsay.WDS-Foundation.jpg" videoId="350008246" width="710" height="430"/>{'\n'}
      <Block cols="6" textAlign="left">
        ## A Walk in our Shoes (Yuliya Patsay) - 2019{'\n'}

      Do you know your neighborhood’s history and the cultures that brought it to life? Yuliya Patsay immigrated with her family from the former Soviet Union in 1991. She and her family set down roots in a neighborhood in San Francisco known as “Little Russia,” where the influence of slavic immigrants was present in everything. {'\n'}

Yuliya also knows there is a strong connection between where we come from to what we bring with us wherever we go - our culture, our language, our food, our energy and passions - and how we impact the community around us. {'\n'}

As society is increasingly divided and people talk about building walls and closing the path to refugees and immigrants, Yuliya is inspired to share the lasting contributions and impact immigrants have made on their communities, particularly at the micro level. The best way to do this is by allowing people to understand and interact with immigrants by walking in their shoes and seeing the paths they have created for those that come after them.{'\n'}

**[A Walk in Our Shoes](https://www.yuliyapatsay.com/a-walk-in-our-shoes)** is a fully interactive experience that combines both a walking audio tour with a restaurant crawl component through the Richmond neighborhood in San Francisco. Participants will get to learn about the history of the area and buildings, and meet local business owners who have shaped the culture through their food and relationships.{'\n'}
        
      </Block>
    </Tab>
      <Tab title="Office Retreat">
    <Video placeholder="https://el-files-wds.s3.amazonaws.com/images/foundation/Keonna-Ollison-WDS-Foundation.jpg" videoId="350007451" width="710" height="430"/>{'\n'}
      <Block cols="6" textAlign="left">
        ## Office Retreat (Keonna Ollison) - 2019{'\n'}
      
      Coworking is becoming a booming trend, and coworking spaces are in abundance to meet the demand. But how many are accessible to marginalized groups, emerging small business owners and creatives? Keonna Ollison believes there are not enough and set out to change that by creating an intentional space dedicated to communities of color and their growth and development. {'\n'}

Specifically a response to gentrification in historically black neighborhoods of North and Northeast Portland, Keonna aims to restore ethnic pride, prosperity and equity by cultivating ‘Office Retreat,’ a collaborative workspace dedicated to minority entrepreneurs, creatives and other marginalized professionals seeking diverse and safe spaces.{'\n'}

Through Office Retreat, Keonna will create a community that supports people of color and marginalized communities holistically, by developing authentic partnerships with other inclusive nonprofits, hiring POC entrepreneurs and artists to help build Office Retreat, employing POC, LGBTQ, and Women-owned businesses, and holding panel discussion, business networking and culturally relevant events.{'\n'}

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
    Our selection committee looked at a number of factors to determine which projects best fit the program.{'\n'}
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

</Block>
</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
    We release WDS tickets for a few weeks each year and they recently sold out.{'\n'}
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
