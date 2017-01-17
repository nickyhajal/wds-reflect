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
        **12.6 Mi** from Base
      </Block>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging
    Portland is an affordable destination, with the lowest hotel rates of any major west coast city. Every year we arrange a number of discounts from partner hotels. Other attendees rent through AirBnB or stay at a local hostel. With Portland being a very popular destination in the summertime, it&apos;s important to book your rooms ASAP. This year we&apos;ve secured rooms at these five iconic Portland properties, all within walking distance to WDS events and activities:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/hotel-wide.png" width="100%" height="302" />
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Booking Code: WDS2017">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Special Deal until 04/17">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Booking Code: WDS2017">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
  </Block>
  <div className="clear" />
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options
    If you can&apos;t get a room at one of these hotels or just want to do something else, there are numerous other options. Here are a couple of WDS attendee favorites:
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel
      **12.6 Mi** from Base
    </Block>
  </Block>
  <div className="clear" />
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="0 0 48px 0" />
      <Button to="https://portlandstreetcar.org" newWindow={true} styling="white">Portland Street Car</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/circle-map-green.png" align="center" width="153" height="130" margin="0 0 48px 0" />
      <Button to="https://portlandstreetcar.org" newWindow={true} styling="white">Trimet Map</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation
      For all of these options, Portland&apos;s fast-and-easy light rail service goes directly from the airport to downtown for $2.50 - no need to rent a car during your whole time in the city. You can also come a day early or stay a day late, and the discount hotel rates are valid during the entire week surrounding the summit
    </Block>
    <div className="clear" />
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining
    <Block type="image-narrow" src="photos/food.png">
      ## Food Carts
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/food.png">
      ## Restaurants
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/food.png">
      ## Farmer&apos;s Markets
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
  </Block>
  <Block margin="125px 0 50px 0">
    ## The City
    <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/hawthorne.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Hawthorne Neighbourhood & Second Line of Title
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five.”
    </Block>
    <div className="clear" />
    <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/downtown.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Hawethorne Neighbourhood & Second Line of Title
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five.”
    </Block>
    <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Powell’s Books
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries. A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five.”
    </Block>
    <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Waterfront
      Since 2011, WDS has brought together more than 10,000 remarkable people from all 50 states and more than 40 countries.A full week of events and an unforgettable keynote weekend in Portland, Oregon. Learn remarkable techniques from unconventional thinkers, aquire powerful new skills, and become inspired to free yourself from the “nine to five.”
    </Block>
  </Block>
</Section>