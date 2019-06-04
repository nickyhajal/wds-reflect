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
  headerImage="v2/hero/location.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/location.png" width="446px" height="156px" className="scriptHeader" preload/>
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Your Base in Portland{'\n'}
    Our beloved city is one of the most eclectic and beautiful cities in the US. Known for our amazing food and drink, our love for the arts, the bold and creative, the outdoors -- Portland is the perfect gathering spot for remarkable adventurers. {'\n'}
    
    WDS is not confined to one building -- Portland is our venue! Attendees will gather throughout the city for different events such as Academies, Attendee-led Meetups, and our epic parties. We'll even have a dedicated HQ spot for attendees to use and connect with one another throughout the week. For WDS 2019, our main-stage will be based out of the **[Newmark Theatre](https://goo.gl/maps/WGGVeNy8sn42)**. Almost all WDS venues are located near light-rail stops and extremely walkable. {'\n'}
  </Block>
    
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="canvas">
    <Block width="100%">
      ## Welcome to Portland{'\n'}
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
        <Link to="https://goo.gl/maps/R3R83DZ6sqy">12.6 Mi from Base</Link>
      </Block>
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging{'\n'}
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. {'\n'}
        
    This year we've secured rooms at these amazing and iconic Portland properties:  {'\n'}

</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/Duniway-Lobby-WDS-Hotel-Partner.jpg" width="100%" height="350" />{'\n'}
  </Block>
  
 <Grid margin="60px 0 -20px 0">

  <Block type="image" src="photos/Duniway-portland-WDS-partner.jpg">
      ## Duniway Hotel{'\n'}
      This modern boutique hotel offers spacious rooms and suites, complimentary wifi (for WDS attendees), 65-inch TVs, and unique eclectic decor. Workout and/or swim onsite in the heated indoor waveless lap pool, or relax on the 11th floor outdoor patio with friends. Attention travel hackers, did we mention it's a Hilton?  {'\n'}
      
      At the top of the booking page, look for **"more options"**, then **"add special rate code"**. Enter **WDS** into the **Group Code**. {'\n'}
      
        <p>0.2 Mi From the Main Stage <Link to="https://goo.gl/maps/YYvbGjiuiMN2">(Google Directions)</Link></p> 
  <Button to="http://www3.hilton.com/en/hotels/oregon/the-duniway-portland-a-hilton-hotel-PDXTPHH/index.html" newWindow={true} >The Discount Period Has Ended</Button> 
</Block>

 <Block type="image" src="https://s3.amazonaws.com/el-files-wds/images/photos/Paramount-Hotel-Room.jpg">
      ## Paramount Hotel {'\n'}
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. The Paramount provides easy access to the very best the city has to offer.{'\n'}
      
      Use the button below or call **(503)223-9900**. Make sure to reference WDS 2019 for the special group rate.{'\n'}
      <p>0.1 Mi From the Main Stage <Link to="https://goo.gl/maps/VwXGqjMYw9B2">(Google Directions)</Link></p> 
        
     <Button to="https://www.portlandparamount.com/" newWindow={true} >The Discount Period Has Ended</Button> 
 </Block>
 <Block type="image" src="photos/Hoxton-roomy-view.jpg">
      ## The Hoxton Hotel{'\n'}
      A new boutique hotel near Portland's Old Town Chinatown. The Hoxton features a variety of room types, cleverly designed with mid-century touches, free breakfast bag, and complimentary wifi. Don't forget to explore the property's fun and cozy communal spaces including a rootop taqueria and bar, a cafe co-working area, onsite restaurant, and basement bar.{'\n'}
      
      ~Call **(503)770-0500** and make sure to reference **WDS 2019** for the special group rate.~{'\n'}
        
     <p>0.7 Mi From the Main Stage <Link to="https://goo.gl/maps/CQtH6AnvrR12">(Google Directions)</Link></p> 
        
    <Button to="https://thehoxton.com/oregon/portland/hotels" newWindow={true} >The Discount Period Has Ended</Button> 
</Block>

 <Block type="image" src="photos/Partner-Hotels-Location-WDS-2019.png">
      ## Perfectly Located{'\n'}
      Each partner hotel is within walking distance or a quick ride on public transit to WDS events and activities and are accessible to the airport by light rail. You have three great options to choose from based on value, ammenities, and location. Just make sure to reserve your room ASAP.   {'\n'}
      
      Need help deciding which property to stay at? Contact our concierge team using the button below.{'\n'}
      
     <p>PDX Airport to Downtown <Link to="https://goo.gl/maps/hHYyA6VihZN2">(Google Directions)</Link></p>
       
      <Button to="https://worlddominationsummit.com/contact-us" newWindow={true} >Contact the Concierge Team</Button> 
    </Block>

  </Grid>
  
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options{'\n'}
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a some WDS attendee favorites:{'\n'}
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
  <Grid numCols="3" tabletCols="2" width="968">
    <Block type="caption" src="https://s3.amazonaws.com/el-files-wds/images/wds-hotel/Bunk+Command.png
">{'\n'}
      ### Society Hotel {'\n'}
      A fun communal experience. [Learn more>>](https://thesocietyhotel.com/accommodations/){'\n'}

    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### NW Hostel{'\n'}
     A great hostel and location. [Learn more>>](https://www.nwportlandhostel.com/){'\n'}

    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb near WDS{'\n'}
      Best for groups. [Learn more>>](https://bit.ly/2M0DK6U){'\n'}
    </Block>
  </Grid>
  </Block>
  <div className="clear" />{'\n'}
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="bgry">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="v2/icon/transit.png" align="center" width="130" height="130" margin="28px 0 48px 0" />{'\n'}
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="orange">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="v2/icon/bike.png" align="center" width="130" height="130" margin="28px 0 48px 0" />{'\n'}
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="orange">Biketown</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation{'\n'}
      Portland has one the best public transit systems (TriMet) in the country - no need to rent a car during your whole time in the city. For easy access to and from the airport to downtown, try Portland’s fast-and-easy light rail service (MAX) for just $2.50. {'\n'}

Other alternative forms of transportation include the Street Car, Car2Go, Uber, Lyft, and for the cyclists, Portland’s new bikeshare program Biketown.{'\n'}
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining{'\n'}
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-narrow" src="photos/food-carts.jpg">
        ## Food Carts{'\n'}
        <Button to="https://goo.gl/jBmx05" newWindow={true} fitToText>Learn More</Button>
      </Block>
      <Block type="image-narrow" src="photos/restaurants.jpg">
        ## Restaurants{'\n'}
        <Button to="http://pdx.eater.com/maps/best-portland-restaurants-38" newWindow={true} fitToText>Learn More</Button>
      </Block>
      <Block type="image-narrow" src="photos/farmers-market.jpg">
        ## Farmer&apos;s Markets{'\n'}
        <Button to="http://www.portlandfarmersmarket.org/" newWindow={true} fitToText>Learn More</Button>
      </Block>
    </Grid>
  </Block>
  <Block margin="125px 0 50px 0" width="1080" css={{position:'relative', left: '-42px'}}>
    <Block cols="6" margin="0 0 120px 0">
      ## The City{'\n'}
      You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       {'\n'}
    </Block>
    <Grid numCols="3" tabletCols="2" width="1080" gutter="0">
      <Block type="image-overlay" anchor="right" icon="beers" src="photos/portland-sign.jpg">
        ## Neighborhoods: Hawthorne{'\n'}
        Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="left" icon="bike" src="photos/pearl-district-portland.jpg">
        ## Neighborhoods: NW & Pearl{'\n'}
        Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="right" icon="eye" src="photos/powells-books.jpg">
        ## Powell’s Books{'\n'}
        No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at 1005 W Burnside.{'\n'}
      </Block>
      <Block type="image-overlay" anchor="left" icon="camera" src="photos/image-waterfront.png">
        ## Waterfront{'\n'}
        Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.{'\n'}
      </Block>
    </Grid>
  </Block>
</Section>
<Section color="canvas" overflow="hidden" burst>
  <Block margin="60px 0 30px">## WDS Tickets are On Sale!</Block>
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
