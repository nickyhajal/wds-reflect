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
  headerImage="hero/location.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/location.png" width="446px" height="156px" className="scriptHeader" preload/>
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Your Base in Portland
    Our beloved city is one of the most eclectic and beautiful cities in the US. Known for our amazing food and drink, our love for the arts, the bold and creative, the outdoors -- Portland is the perfect gathering spot for remarkable adventurers. WDS is based out of the Newmark Theatre in downtown Portland, located two blocks from a light-rail stop and directly across from the south park blocks. 
  </Block>
    
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="green">
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
    
    Here are four amazing Portland properties (including our very own WDS Hotel™) we secured rooms with for WDS 2018, all within walking distance or a quick ride on public transit to WDS events and activities. 

</Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/modera-lobby.png" width="100%" height="302" />
  </Block>
  
 <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/society-hotel.jpg">
      ## WDS Hotel™
     The WDS Hotel™ (a.k.a. The Society Hotel) was originally built in 1881 as a boarding house for sailors and is now a modern and charming hotel featuring hostel style rooms, bunk beds, and private suites. Featuring hardwood floors and historical artifacts the hotel is a glimpse into Portland's past. 
       <p>0.8 Mi from Base <Link to="https://goo.gl/maps/v6kK2y4xsN82">(Google Directions)</Link></p>
    </Block>

    <Block type="image" src="photos/Paramount-Hotel.jpg">
      ## Paramount Hotel 
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. The Paramount provides easy access to the very best the city has to offer.
      <p>0.1 Mi from Base <Link to="https://goo.gl/maps/VwXGqjMYw9B2">(Google Directions)</Link></p> 
 </Block>

    <Block type="image" src="photos/Hotel-Modera-Exterior.jpg">
      ## Hotel Modera
      A stylish luxury boutique hotel in downtown Portland, Hotel Modera is located in the center of the city's theater district, surrounded by fine restaurants, art galleries, museums and entertaining nightlife. The hotel's elegant atmosphere reflects the vibrancy and unique beauty of Portland itself. 
      <p>0.1 Mi from Base <Link to="https://goo.gl/maps/mAa6guqWiJt">(Google Directions)</Link></p> 
</Block>

  <Block type="image" src="photos/Hotel-Rose-Portland.jpg">
      ## Hotel Rose
      Colorful, fun, and a perfect example of an authentic "Portland" experience. Hotel Rose is conveniently located directly across from Tom McCall Waterfront Park on the sparkling Willamette River and in walking distance to WDS HQ. Don't forget about their complimentry bicycles to cruise and explore the city! 
      <p>0.5 Mi from Base <Link to="https://goo.gl/maps/X4Wo8hpBRQk">(Google Directions)</Link></p> 
</Block>

  </Grid>
  
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a couple of WDS attendee favorites:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
  <Grid numCols="3" tabletCols="2" width="968">
    <Block type="caption" src="photos/Portland.State.University.Summer.Conference.Housing.png">
      ### Portland State (0.6 Mi)
    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### NW Hostel (1.0 Mi) 
    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb near WDS
    </Block>
  </Grid>
  </Block>
  <div className="clear" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="28px 0 48px 0" />
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="white">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/bike-green-circle.png" align="center" width="145" height="130" margin="28px 0 48px 0" />
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="white">Biketown</Button>
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
        <Button to="https://goo.gl/jBmx05" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/restaurants.jpg">
        ## Restaurants
        <Button to="http://pdx.eater.com/maps/best-portland-restaurants-38" newWindow={true} fitToText>View More</Button>
      </Block>
      <Block type="image-narrow" src="photos/farmers-market.jpg">
        ## Farmer&apos;s Markets
        <Button to="http://www.portlandfarmersmarket.org/" newWindow={true} fitToText>View More</Button>
      </Block>
    </Grid>
  </Block>
  <Block margin="125px 0 50px 0">
    <Block cols="6">
      ## The City
      You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       
    </Block>
    <Grid numCols="3" tabletCols="2" width="968">
      <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/portland-sign.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: Hawthorne
        Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/pearl-district-portland.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Neighborhoods: NW & Pearl
        Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.
      </Block>
      <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells-books.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Powell’s Books
        No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at 1005 W Burnside.
      </Block>
      <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/image-waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
        ## Waterfront
        Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.
      </Block>
    </Grid>
  </Block>
</Section>
<Import id="join-us" />
