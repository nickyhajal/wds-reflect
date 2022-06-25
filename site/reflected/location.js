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
import WdsTitle from '../../site/components/WdsTitle';
import RedirIfNotLoggedIn from '../../site/components/RedirIfNotLoggedIn';

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
    
    WDS is not confined to one building -- Portland is our venue! Attendees will gather throughout the city for different events such as Academies, Attendee-led Meetups, and our epic parties. We'll even have a dedicated HQ spot for attendees to use and connect with one another throughout the week. For WDS X, our main-stage will be based out of the **[Newmark Theatre](https://goo.gl/maps/WGGVeNy8sn42)**. Almost all WDS venues are located near light-rail stops and extremely walkable. {'\n'}
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
        
    For WDS X (2022) we have secured rooms at these amazing and iconic Portland properties:  {'\n'}

</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Hotel-Zags-Lobby.jpg" width="100%" height="350" />{'\n'}
  </Block>
  
 <Grid margin="60px 0 -20px 0">
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/Hotel-Zags-King.jpg">
      ## Hotel Zags {'\n'}
      The newly renovated Hotel Zags is a fun and delightful boutique hotel located by the WDS main-stage featuring complimentary wifi, access to a gear shed (bikes, ukuleles, cameras and more), and the popular Nel Centro restaurant. It also comes with passes to 24-Hour Fitness.{'\n'}
      
      Reservation notes: Use the special booking link below (book now). To reserve shoulder dates at the group rate, first book the dates with the booking link, then contact Edwin at (503)484-1075.{'\n'}
      
        <p>0.3 Mi From the Main Stage <Link to="https://goo.gl/maps/CjCe1a3Tfc8K4YB99">(Google Directions)</Link></p> 
  <Button to="https://be.synxis.com/?Hotel=53439&Chain=6052&arrive=2022-06-23&depart=2022-06-27&adult=1&child=0&group=WDS2022" newWindow={true} >Book Now!</Button> 
</Block>
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/paramount-hotel-wds-partner.jpg">
      ## Paramount Hotel {'\n'}
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. The Paramount provides easy access to the very best the city has to offer.{'\n'}
      
      Reservation notes: Use the special booking link (book now) below or call the Front Desk at (503)223-9900 and reference the special group code: WDS22{'\n'}
      
      <p>0.1 Mi From the Main Stage <Link to="https://goo.gl/maps/VwXGqjMYw9B2">(Google Directions)</Link></p> 
        
     <Button to="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Freservations.travelclick.com%2F104209%3FgroupID%3D3215371&data=04%7C01%7C%7C556c4b3c198946085ff508d8ee2cd1dc%7Cf720296908904694acd03173243c4cdc%7C0%7C0%7C637521223547174836%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=7LKTWgQe2pTsFpeRVtTYKsxM606EMMHfSOiSDendQvA%3D&reserved=0" newWindow={true} >Book Now!</Button> 
 </Block>
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/Duniway-portland-WDS-partner.jpg">
      ## Hotel Duniway (Hilton){'\n'}
      A iconic, boutique hotel with modern style and a touch of Portland flair. The hotel also features a workout room, lap pool, and an amazing outdoor patio/lounge area with city views. Have a delicious breakfast or dinner at their new restaurant, the Mayrose and don't forget it's a Hilton. Go get those Hilton Honor points!   {'\n'}
        
        Reservation notes: Use the special booking link (book now) below.{'\n'}
        
     <p>0.2 Mi From the Main Stage <Link to="https://goo.gl/maps/XEamX4yFVoUUDjLV8">(Google Directions)</Link></p> 
        
    <Button to="https://book.passkey.com/go/WorldDomination" newWindow={true} >Book Now!</Button> 
</Block>
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/WDS-X-Partner-Hotels.png">
      ## Perfectly Located{'\n'}
      Each partner hotel is within walking distance or a quick ride on public transit to WDS events and activities and are accessible to the airport by light rail. You have three great options to choose from based on value, ammenities, and location. Just make sure to reserve your room ASAP.   {'\n'}
      
      Need help deciding which property to stay at? Contact our concierge team!{'\n'}
      
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
    <Block type="caption" src="https://el-files-wds.s3.amazonaws.com/images/photos/Crystal.Hotel.jpg">
      ### Crystal Hotel {'\n'}
      Unique rooms. [Learn more>>](https://www.mcmenamins.com/crystal-hotel/lodging/guestrooms){'\n'}

    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### NW Hostel{'\n'}
     A great hostel. [Learn more>>](https://www.nwportlandhostel.com/){'\n'}

    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb near WDS{'\n'}
      Large groups. [Learn more>>](https://bit.ly/2M0DK6U){'\n'}
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
  <Block margin="60px 0 30px">## WDS X Tickets are Sold Out!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
  The WDS ticket sale didn’t last long... we’re now at full capacity with no more tickets available.{'\n'}
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
