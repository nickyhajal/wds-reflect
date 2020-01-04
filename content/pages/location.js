<Script>
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
</Script>
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
    ## Your Base in Portland
    Our beloved city is one of the most eclectic and beautiful cities in the US. Known for our amazing food and drink, our love for the arts, the bold and creative, the outdoors -- Portland is the perfect gathering spot for remarkable adventurers. 
    
    WDS is not confined to one building -- Portland is our venue! Attendees will gather throughout the city for different events such as Academies, Attendee-led Meetups, and our epic parties. We'll even have a dedicated HQ spot for attendees to use and connect with one another throughout the week. For WDS 2020, our main-stage will be based out of the **[Newmark Theatre](https://goo.gl/maps/WGGVeNy8sn42)**. Almost all WDS venues are located near light-rail stops and extremely walkable. 
  </Block>
    
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="canvas">
    <Block width="100%">
      ## Welcome to Portland
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
        ### Newmark Theatre
        ### 1037 SW Broadway,
        ### Portland, OR 97205
      </Block>
      <Block type="caption" src="photos/airport.png" width="316" css={{ left: '50px', top: '11px' }}
        mobile={{
          all: {width: '510px', left: '0', margin: '0 auto 20px', float: 'none' },
          phone: {width: '260px', left: '0', margin: '0 auto 20px', float: 'none' }
        }}
      >
        ### PDX Airport
        <Link to="https://goo.gl/maps/R3R83DZ6sqy">12.6 Mi from Base</Link>
      </Block>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. 
        
    For WDS 2020 we've secured rooms at these amazing and iconic Portland properties:  

</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="images/photos/Hotel-Zags-Lobby.jpg" width="100%" height="350" />
  </Block>
  
 <Grid margin="60px 0 -20px 0">
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/Partner-Hotels-Locations-WDS-2020.png">
      ## Perfectly Located
      Each partner hotel is within walking distance or a quick ride on public transit to WDS events and activities and are accessible to the airport by light rail. You have three great options to choose from based on value, ammenities, and location. Just make sure to reserve your room ASAP.   
      
      Need help deciding which property to stay at? Contact our concierge team!
      
     <p>PDX Airport to Downtown <Link to="https://goo.gl/maps/hHYyA6VihZN2">(Google Directions)</Link></p>
       
      <Button to="https://worlddominationsummit.com/contact-us" newWindow={true} >Contact the Concierge Team</Button> 
    </Block>
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/wds-hotel/standard-room1.jpg">
      ## The WDS Hotel™
      We've reserved an entire boutique hotel in Portland's Old Town Chinatown just for attendees. The WDS Hotel™ features a variety of fun room types and social areas including a coffee shop/co-working area and a beautiful rooftop to take in breathaking Portland vistas.  
      
      ~Limited availability and based on a 4-night package. Use the botton below for details.~
        
     <p>0.8 Mi From the Main Stage <Link to="https://goo.gl/maps/yAmfYNzFDgRgDk7y7">(Google Directions)</Link></p> 
        
    <Button to="" newWindow={true} >Coming Soon!</Button> 
</Block>
  <Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/Hotel-Zags-King.jpg">
      ## Hotel Zags 
      The newly renovated Hotel Zags is a fun and delightful boutique hotel located by the WDS main-stage featuring complimentary wifi, access to a gear shed (bikes, ukuleles, cameras and more), and the popular Nel Centro restaurant. It also comes with passes to 24-Hour Fitness.
      
      Use the button or call **(877)484-1084** and ask for the **"World Domination Summit 2020 Group Rate".**
      
        <p>0.3 Mi From the Main Stage <Link to="https://goo.gl/maps/CjCe1a3Tfc8K4YB99">(Google Directions)</Link></p> 
  <Button to="https://aonc.co/2tstT4q" newWindow={true} >Coming Soon</Button> 
</Block>
<Block type="image" src="https://el-files-wds.s3.amazonaws.com/images/photos/paramount-hotel-wds-partner.jpg">
      ## Paramount Hotel 
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. The Paramount provides easy access to the very best the city has to offer.
      
      Use the button below or call **(503)223-9900**. Make sure to reference **WDS20** for the special group rate.
      <p>0.1 Mi From the Main Stage <Link to="https://goo.gl/maps/VwXGqjMYw9B2">(Google Directions)</Link></p> 
        
     <Button to="https://aonc.co/2ZNALWa" newWindow={true} >Coming Soon!</Button> 
 </Block>
  </Grid>
  
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a some WDS attendee favorites:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
  <Grid numCols="3" tabletCols="2" width="968">
    <Block type="caption" src="https://el-files-wds.s3.amazonaws.com/images/photos/Crystal.Hotel.jpg">
      ### Crystal Hotel 
      Unique rooms. [Learn more>>](https://www.mcmenamins.com/crystal-hotel/lodging/guestrooms)

    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### NW Hostel
     A great hostel. [Learn more>>](https://www.nwportlandhostel.com/)

    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb near WDS
      Shared accomodation. [Learn more>>](https://bit.ly/2M0DK6U)
    </Block>
  </Grid>
  </Block>
  <div className="clear" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="bgry">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="v2/icon/transit.png" align="center" width="130" height="130" margin="28px 0 48px 0" />
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="orange">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="v2/icon/bike.png" align="center" width="130" height="130" margin="28px 0 48px 0" />
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="orange">Biketown</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation
      Portland has one the best public transit systems (TriMet) in the country - no need to rent a car during your whole time in the city. For easy access to and from the airport to downtown, try Portland’s fast-and-easy light rail service (MAX) for just $2.50. 

Other alternative forms of transportation include the Street Car, Car2Go, Uber, Lyft, and for the cyclists, Portland’s new bikeshare program Biketown.
    </Block>
    <div className="clear" />
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-narrow" src="photos/food-carts.jpg">
        ## Food Carts
        <Button to="https://goo.gl/jBmx05" newWindow={true} fitToText>Learn More</Button>
      </Block>
      <Block type="image-narrow" src="photos/restaurants.jpg">
        ## Restaurants
        <Button to="http://pdx.eater.com/maps/best-portland-restaurants-38" newWindow={true} fitToText>Learn More</Button>
      </Block>
      <Block type="image-narrow" src="photos/farmers-market.jpg">
        ## Farmer&apos;s Markets
        <Button to="http://www.portlandfarmersmarket.org/" newWindow={true} fitToText>Learn More</Button>
      </Block>
    </Grid>
  </Block>
  <Block margin="125px 0 50px 0" width="1080" css={{position:'relative', left: '-42px'}}>
    <Block cols="6" margin="0 0 120px 0">
      ## The City
      You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       
    </Block>
    <Grid numCols="3" tabletCols="2" width="1080" gutter="0">
      <Block type="image-overlay" anchor="right" icon="beers" src="photos/portland-sign.jpg">
        ## Neighborhoods: Hawthorne
        Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.
      </Block>
      <Block type="image-overlay" anchor="left" icon="bike" src="photos/pearl-district-portland.jpg">
        ## Neighborhoods: NW & Pearl
        Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.
      </Block>
      <Block type="image-overlay" anchor="right" icon="eye" src="photos/powells-books.jpg">
        ## Powell’s Books
        No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at 1005 W Burnside.
      </Block>
      <Block type="image-overlay" anchor="left" icon="camera" src="photos/image-waterfront.png">
        ## Waterfront
        Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.
      </Block>
    </Grid>
  </Block>
</Section>
<Import id="join-us" />
