<Pre>
  import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

  let mapComponent = false;
  function handleMapLoad(map) {
    mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  const PDXLocationMap = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      onMapLoad={handleMapLoad}
      defaultCenter={{ lat: 45.519093, lng: -122.680258 }}
      onClick={props.onMapClick}
    >
      <Marker
        position={{ lat: 45.519093, lng: -122.680258 }}
      />
    </GoogleMap>
  ));
</Pre>
<Section
  headerVideo="//player.vimeo.com/video/184868405?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1"
  headerImage="hero/location.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
>
  <Image src="heading/location.png" width="446px" height="156px" className="scriptHeader" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="green">
    <Block>
      ## Your Base in Portland
    </Block>
    <Block anchor="left" width="510px" margin="0 50px 0 0">
      <PDXLocationMap
        containerElement={
          <Block style={{ height: '410px', width: '510px' }} clip="top_lr_2__6" />
        }
        mapElement={
          <div style={{ height: '400px', width: '510px' }} />
        }
      />
    </Block>
    <Block anchor="left" width="370px" textAlign="left">
      <Block width="340px" css={{ padding: '50px 20px 50px 70px', fontFamily: 'Vitesse', color: 'white', fontSize: '18px' }} align="center">
        ### 1111 SW Broadway,
        ### Portland, OR 97205
      </Block>
      <Block type="caption" src="photos/airport.png" css={{ left: '50px', top: '11px' }}>
        ### PDX Airport
        <Link to="https://goo.gl/maps/teMTfSt4MzQ2">**12.6 Mi** from Base</Link>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. This year we&apos;ve secured rooms at these five amazing Portland properties (including the all new WDS Hotel), all within walking distance or a quick ride on public transit to WDS events and activities:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/Hotel-Modera-Lobby.png" width="100%" height="302" />
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/WDS-Hotel-Society.jpg" label="Coming Soon">
      ### The WDS Hotel
      **0.8 Mi** from Base
    </Block>
    <Block type="caption" src="photos/Paramount-Hotel.jpg" label="Coming Soon">
      ### Paramount Hotel
      **0.1 Mi** from Base
    </Block>
    <Block type="caption" src="photos/Hotel-Modera-Exterior.jpg" label="Coming Soon">
      ### Hotel Modera
      **0.3 Mi** from Base
    </Block>
    <Block type="caption" src="photos/HiLo-Hotel-Exterior.jpg" label="Coming Soon">
      ### Hi-Lo Hotel
      **0.5 Mi** from Base
    </Block>
    <Block type="caption" src="photos/Jupiter-Hotel-exterior.jpg" label="Coming Soon">
      ### Jupiter Hotel
      **1.5 Mi** from Base
    </Block>
  </Block>
  <div className="clear" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a couple of WDS attendee favorites:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/Cyrstal.Hotel.jpg">
      ### Crystal Hotel
      <Link to="http://www.mcmenamins.com/CrystalHotel">**0.6 Mi** from Base</Link>
    </Block>
    <Block type="caption" src="photos/Portland-Hostel.jpg">
     ### Portland Northwest Hostel
      <Link to="http://nwportlandhostel.com/">**1.0 Mi** from Base</Link>
    </Block>
    <Block type="caption" src="photos/PDX-airbnb.jpg">
      ### Airbnb listings
      <Link to="https://goo.gl/yOaB4l">**.5 Mi** from Base</Link>
    </Block>
  </Block>
  <div className="clear" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="0 0 48px 0" />
      <Button to="http://trimet.org/#/planner" newWindow={true} styling="white">TriMet Trip Planner</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/circle-map-green.png" align="center" width="153" height="130" margin="0 0 48px 0" />
      <Button to="https://www.biketownpdx.com/" newWindow={true} styling="white">Biketown</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation
      Portland has one the best public transit systems in the country - no need to rent a car during your whole time in the city. Of our many options Portland's fast-and-easy light rail service (MAX) goes directly from the airport to downtown for $2.50. Other alternative forms of transportation include the Street Car, Car2Go, Uber, Lyft, and for the cyclists, Portland’s new bikehsare program Biketown.
    </Block>
    <div className="clear" />
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining
    <Block type="image-narrow" src="photos/food-carts.jpg">
      ## Food Carts
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/restaurants.jpg">
      ## Restaurants
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/farmers-market.jpg">
      ## Farmer&apos;s Markets
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
  </Block>
  <Block margin="125px 0 50px 0">
    ## The City
    You'll have the chance to wander and explore. In short, it will be an amazing weekend in an incredible city (and for those attending from nearby, you'll enjoy meeting new friends while showing off our funky neighborhoods).                                                                                       
    <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/hawthorne.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Neighbourhoods & Hawthorne
      Hawthorne: Stock up on your mustache wax in the hipster capital of the universe! Get there on the 14 bus, which stops at SW Madison and 4th, then get off about 10 minutes later on Hawthorne Boulevard, anywhere between 20th and 39th streets.
    </Block>
    <div className="clear" />
    <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/downtown.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Neighbourhood & West Side / Downtown
      Northwest and the Pearl District, reachable by streetcar or a stroll, are the trendy side to Hawthorne’s old-school vibe. Check out the area around NW 23rd, with nice pubs and good ethnic food options.
    </Block>
    <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Powell’s Books
     No trip to Portland is complete without a pilgrimage to Powell’s City of Books, located on an entire city block at <a href="https://goo.gl/maps/TC3PAN9f3jy" target="_blank">1005 W Burnside St.</a>.
    </Block>
    <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Waterfront
      Walk, jog, or bike the waterfront area, starting in the south end and continuing to the Steel Bridge near the train station area.
    </Block>
  </Block>
</Section>
