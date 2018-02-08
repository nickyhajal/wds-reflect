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

  import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

  let mapComponent = false;
  function handleMapLoad(map) {
    mapComponent = map;
    if (map) {
    }
  }

  const PDXLocationMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      onMapLoad={handleMapLoad}
      defaultCenter={{ lat: 45.516791, lng: -122.681333 }}  
      onClick={props.onMapClick}
    >
      <Marker
        position={{ lat: 45.516791, lng: -122.681333 }}
      />
    </GoogleMap>
  ));
  const Page = (props) => (
    <div>
      
<Section
  headerImage="hero/location.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/location.png" width="446px" height="156px" className="scriptHeader" preload/>
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Your Base in Portland, OR{'\n'}
    Our beloved city is one of the most electic and beautiful cities in the US. Known for our amazing food and drink, our love for the arts, the bold and creative, the outdoors -- Portland is the perfect gathering spot for remarkable adventurers.  For 2018 we'll be based out of the Newmark Theatre in downtown Portland, located two blocks from a light-rail stop and directly across from the south park blocks. {'\n'}
  </Block>
    
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="green">
    <Block width="100%">
      ## WDS 2018 Homebase{'\n'}
    </Block>
    <Block className="locationMap" anchor="left" width="510px" margin="50px auto 0 auto" mobile={{ all: { width: '510px', float: 'none' }, phone: {width: '260px', height:'220px' } }}>
      <PDXLocationMap
        containerElement={
          (is.phone() ?
            <div style={{ height: '220px', width: '260px' }} /> :
            <div style={{ height: '400px', width: '510px' }} />
          )
        }
        mapElement={
          (is.phone() ?
            <div style={{ height: '220px', width: '260px' }} /> :
            <div style={{ height: '400px', width: '510px' }} />
          )
        }
      />
    </Block>
    <Block anchor="left" width="370px" textAlign="left">
      <Block width="340px" css={{ padding: '50px 20px 50px 70px', fontFamily: 'Vitesse', color: 'white', fontSize: '18px' }} mobile={{ all: {padding: '50px 0px 50px 0px' } }} align="center">
        ### Newmark Theatre{'\n'}
        ### 1037 SW Broadway,{'\n'}
        ### Portland, OR 97205{'\n'}
      </Block>
      <Block type="caption" src="photos/airport.png" width="316" css={{ left: '50px', top: '11px' }}
        mobile={{
          all: {width: '510px', left: '0', margin: '0 auto 20px', float: 'none' },
          phone: {width: '260px', left: '0', margin: '0 auto 20px', float: 'none' }
        }}
      >{'\n'}
        ### PDX Airport{'\n'}
        <Link to="https://goo.gl/maps/teMTfSt4MzQ2">12.6 Mi from Base</Link>
      </Block>
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging{'\n'}
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. {'\n'}
    
    Here is an example of five amazing Portland properties (including the all new WDS Hotel)* we secured rooms with for WDS 2017, all within walking distance or a quick ride on public transit to WDS events and activities. {'\n'}

</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/modera-lobby.png" width="100%" height="302" />{'\n'}
  </Block>
  
 <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/society-hotel.jpg">
      ## WDS Hotel™{'\n'}
     The WDS Hotel™ (a.k.a. The Society Hotel) was originally built in 1881 as a boarding house for sailors and is now a modern and charming hotel featuring hostel style rooms, bunk beds, and private suites. Featuring hardwood floors and historical artifacts the hotel is a glimpse into Portland's past. {'\n'}
       <p>0.8 Mi from Base <Link to="https://goo.gl/maps/6D6mJGAY7dv">(Google Directions)</Link></p> 
  
    </Block>
    <Block type="image" src="photos/Paramount-Hotel.jpg">
      ## Paramount Hotel {'\n'}
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. The Paramount provides easy access to the very best the city has to offer.{'\n'}
      <p>0.1 Mi from Base <Link to="https://goo.gl/maps/6D6mJGAY7dv">(Google Directions)</Link></p> 

    </Block>
    <Block type="image" src="photos/Hotel-Modera-Exterior.jpg">
      ## Hotel Modera{'\n'}
      A stylish luxury boutique hotel in downtown Portland, Hotel Modera is located in the center of the city's theater district, surrounded by fine restaurants, art galleries, museums and entertaining nightlife. The hotel's elegant atmosphere reflects the vibrancy and unique beauty of Portland itself. {'\n'}
      <p>0.1 Mi from Base <Link to="https://goo.gl/maps/T3BnDWTY9oq">(Google Directions)</Link></p> 
</Block>
  <Block type="image" src="photos/hilton.png">
      ## Hilton Portland{'\n'}
      The modern Hilton Portland & Executive Tower is conveniently located in the heart of downtown next to great restaurants and venues. The Hilton Portland comprises of two buildings: the landmark Hilton Portland and the upscale Executive Tower with spacious guest rooms and executive level amenities.     {'\n'}
      <p>0.1 Mi from Base <Link to="https://goo.gl/maps/UYkeGdPMfqJ2">(Google Directions)</Link></p> 
</Block>
 <Block type="image" src="photos/Jupiter-Hotel-exterior.jpg">
      ## Jupiter Hotel{'\n'}
      The Jupiter Hotel is a mid-century, renovated motor inn-turned-boutique hotel located just across the river from downtown in the heart of one of Portland's most vibrant neighborhoods. The Jupiter hotel offers modern guestrooms that surprise and connect guests to the vibrancy of Portland at affordable rates.  {'\n'}
      <p>1.5 Mi from Base <Link to="https://goo.gl/maps/zqv2uKd4GKG2">(Google Directions)</Link></p> 
</Block>
  </Grid>
  
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options{'\n'}
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a couple of WDS attendee favorites:{'\n'}
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
  <Grid numCols="3" tabletCols="2" width="968">
    <Block type="caption" src="photos/Portland.State.University.Summer.Conference.Housing.png">
      ### Portland State{'\n'}
      <Link to="https://goo.gl/maps/RNiHaty8MHL2">0.6 Mi from Base</Link>
    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### Portland NW Hostel{'\n'}
      <Link to="https://goo.gl/maps/3Y1QFLkeBDK2">1.0 Mi from Base</Link>
    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb listings{'\n'}
      <Link to="https://goo.gl/yOaB4l">0.5 Mi from Base</Link>
    </Block>
  </Grid>
  </Block>
  <div className="clear" />{'\n'}
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="28px 0 48px 0" />{'\n'}
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="white">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/bike-green-circle.png" align="center" width="145" height="130" margin="28px 0 48px 0" />{'\n'}
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="white">Biketown</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation{'\n'}
      Portland has one the best public transit systems (TriMet) in the country - no need to rent a car during your whole time in the city. Of our many options Portland's fast-and-easy light rail service (MAX) goes directly from the airport to downtown for $2.50. {'\n'}

Other alternative forms of transportation include the Street Car, Car2Go, Uber, Lyft, and for the cyclists, Portland’s new bikehsare program Biketown.{'\n'}
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining{'\n'}
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-narrow" src="photos/food-carts.jpg">
        ## Food Carts{'\n'}
        <Button to="https://goo.gl/jBmx05" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/restaurants.jpg">
        ## Restaurants{'\n'}
        <Button to="http://pdx.eater.com/maps/best-portland-restaurants-38" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/farmers-market.jpg">
        ## Farmer&apos;s Markets{'\n'}
        <Button to="http://www.portlandfarmersmarket.org/" newWindow={true} fitToText>View More</Button>
      </Block>
    </Grid>
  </Block>
  <Block margin="125px 0 50px 0">
    <Block cols="6">
      ## The City{'\n'}
      You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       {'\n'}
    </Block>
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/portland-sign.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: Hawthorne{'\n'}
        Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/pearl-district-portland.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: NW & Pearl{'\n'}
        Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells-books.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Powell’s Books{'\n'}
        No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at 1005 W Burnside.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/image-waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Waterfront{'\n'}
        Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.{'\n'}
      </Block>
    </Grid>
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
