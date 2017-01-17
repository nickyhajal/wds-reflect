import React from 'react';
import Section from '../components/Section/Section';
import Image from '../components/Image/Image';
import Block from '../components/Block/Block';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tab/Tab';
import Button from '../components/Button/Button';
import Counter from '../components/Counter/Counter';
import Form from '../components/Form/Form';
import FormRow from '../components/FormRow/FormRow';
import Input from '../components/Input/Input';
import Video from '../components/Video/Video';

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
  const Page = () => (
    <div>
      
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
      ## Your Base in Portland{'\n'}
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
        ### 1111 SW Broadway,{'\n'}
        ### Portland, OR 97205{'\n'}
      </Block>
      <Block type="caption" src="photos/airport.png" css={{ left: '50px', top: '11px' }}>
        ### PDX Airport{'\n'}
        **12.6 Mi** from Base{'\n'}
      </Block>
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Lodging{'\n'}
    Portland is an affordable destination, with the lowest hotel rates of{'\n'}
    any major west coast city. Every year we arrange a number of discounts{'\n'}
    from partner hotels. Other attendees rent through AirBnB or stay at a{'\n'}
    local hostel. With Portland being a very popular destination in the summertime,{'\n'}
    it&apos;s important to book your rooms ASAP. This year we&apos;ve secured rooms{'\n'}
    at these five iconic Portland properties, all within walking distance{'\n'}
    to WDS events and activities:{'\n'}
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="photos/hotel-wide.png" width="100%" height="302" />{'\n'}
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Booking Code: WDS2017">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Special Deal until 04/17">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png" label="Booking Code: WDS2017">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
  </Block>
  <div className="clear" />{'\n'}
  <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## Alternative Lodging Options{'\n'}
    If you can&apos;t get a room at one of these hotels or just want to do something{'\n'}
    else, there are numerous other options. Here are a couple of WDS attendee favorites:{'\n'}
  </Block>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
    <Block type="caption" src="photos/hotel.png">
      ### Paramount Hotel{'\n'}
      **12.6 Mi** from Base{'\n'}
    </Block>
  </Block>
  <div className="clear" />{'\n'}
  <Block type="padded" width="100%" align="center" margin="50px 0 20px" background="orange">
    <Block anchor="left" align="none" width="222" margin="0 40px 0 0">
      <Image src="icon/circle-transit-green.png" align="center" width="130" height="130" margin="0 0 48px 0" />{'\n'}
      <Button to="https://portlandstreetcar.org" newWindow={true} styling="white">Portland Street Car</Button>
    </Block>
    <Block anchor="left" align="none" width="153" margin="0 60px 0 0">
      <Image src="icon/circle-map-green.png" align="center" width="153" height="130" margin="0 0 48px 0" />{'\n'}
      <Button to="https://portlandstreetcar.org" newWindow={true} styling="white">Trimet Map</Button>
    </Block>
    <Block anchor="left" textAlign="left" width="350" margin="24px 0 0 0">
      ## Transportation{'\n'}
      For all of these options, Portland&apos;s fast-and-easy light rail service{'\n'}
      goes directly from the airport to downtown for $2.50 - no need to rent a{'\n'}
      car during your whole time in the city. You can also come a day early or stay{'\n'}
      a day late, and the discount hotel rates are valid during the entire{'\n'}
      week surrounding the summit{'\n'}
    </Block>
    <div className="clear" />{'\n'}
  </Block>
  <Block margin="125px 0 50px 0">
    ## Food & Dining{'\n'}
    <Block type="image-narrow" src="photos/food.png">
      ## Food Carts{'\n'}
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/food.png">
      ## Restaurants{'\n'}
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
    <Block type="image-narrow" src="photos/food.png">
      ## Farmer&apos;s Markets{'\n'}
      <Button to="/schedule" fitToText>View More</Button>
    </Block>
  </Block>
  <Block margin="125px 0 50px 0">
    ## The City{'\n'}
    <Block type="image-overlay" anchor="right" icon="outline-beers" src="photos/hawthorne.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Hawthorne Neighbourhood & Second Line of Title{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable{'\n'}
      people from all 50 states and more than 40 countries.A full week of{'\n'}
      events and an unforgettable keynote weekend in Portland, Oregon. Learn{'\n'}
      remarkable techniques from unconventional thinkers, aquire powerful new{'\n'}
      skills, and become inspired to free yourself from the “nine to five.”{'\n'}
    </Block>
    <div className="clear" />{'\n'}
    <Block type="image-overlay" anchor="left" icon="outline-bike" src="photos/downtown.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Hawethorne Neighbourhood & Second Line of Title{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable{'\n'}
      people from all 50 states and more than 40 countries.A full week of{'\n'}
      events and an unforgettable keynote weekend in Portland, Oregon. Learn{'\n'}
      remarkable techniques from unconventional thinkers, aquire powerful new{'\n'}
      skills, and become inspired to free yourself from the “nine to five.”{'\n'}
    </Block>
    <Block type="image-overlay" anchor="right" icon="outline-eye" src="photos/powells.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Powell’s Books{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable{'\n'}
      people from all 50 states and more than 40 countries. A full week of{'\n'}
      events and an unforgettable keynote weekend in Portland, Oregon. Learn{'\n'}
      remarkable techniques from unconventional thinkers, aquire powerful{'\n'}
      new skills, and become inspired to free yourself from the “nine to{'\n'}
      five.”{'\n'}
    </Block>
    <Block type="image-overlay" anchor="left" icon="outline-camera" src="photos/waterfront.png" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
      ## Waterfront{'\n'}
      Since 2011, WDS has brought together more than 10,000 remarkable{'\n'}
      people from all 50 states and more than 40 countries.A full week of{'\n'}
      events and an unforgettable keynote weekend in Portland, Oregon. Learn{'\n'}
      remarkable techniques from unconventional thinkers, aquire powerful{'\n'}
      new skills, and become inspired to free yourself from the “nine to{'\n'}
      five.”{'\n'}
    </Block>
  </Block>
</Section>


    </div>
  );

  export default Page;
