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
      defaultCenter={{ lat: 45.5190082, lng: -122.6795295 }}
      onClick={props.onMapClick}
      options={{ scrollwheel: false, draggable: false }}
    >
      <Marker
        position={{ lat: 45.5190082, lng: -122.6795295 }}
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
  <Image src="https://el-files-wds.s3.amazonaws.com/images/heading/Trex-logo.png" width="450px" height="" className="scriptHeader" preload/>
  
<Block cols="8" bleed={false} margin="0 0 80px">

<Video placeholder="https://farm1.staticflickr.com/261/19429502759_b07f583140_k_d.jpg" videoId="2evbNSYREGE" width="1000" height=""/>
  
<Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
      ## We're Taking Over the City, Roar!!!
      Community has always been at the heart of WDS. Every year, many attendees forge lasting friendships and find creative ways to stay together during the weekend before they return home. 
      <p>One of the most frequent requests we receive is a way to centralize the process of group accommodations. Well, we can’t be a matchmaker… but we have reserved <i>an entire hotel</i> for the final four days of WDS 2020.</p>
      <p>This hotel, known during non-WDS times as the <Link to="http://thesocietyhotel.com/">Society Hotel</Link>, offers one large bunk room (hostel style, but nice) <i>and</i> a number of private rooms, including suites. Want to be the life of the party? Book a bunk. Need your space? Choose one of the rooms or suites.</p>
      <p>If you love the community of WDS, you’ll love the WDS Hotel™. It’s a sleepover party with 100 of the world's most remarkable adventurers.</p>
     
        <Button styling="orange" align="center" to="/be-there" style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>

        </Block>
    <Block type="padded" width="105%" align="center" margin="50px 0 20px" background="sea">
      <Block>
        ## T-Rex Gathering Point
      </Block>
      <Block className="locationMap" anchor="left" width="510px" margin="25px auto 0 auto" mobile={{ all: { width: '510px', float: 'none' }, phone: {width: '260px', height:'220px' } }}>
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
          ### 701 SW 6th Ave,
          ### Portland, OR 97205
        </Block>
        <Block type="caption" src="https://el-files-wds.s3.amazonaws.com/images/photos/Pioneer-Courthouse-Square-Portland.jpg" width="316" css={{ left: '50px', top: '11px' }}
          mobile={{
            all: {width: '510px', left: '0', margin: '0 auto 20px', float: 'none' },
            phone: {width: '260px', left: '0', margin: '0 auto 20px', float: 'none' }
          }}
        >
          ### Pioneer Courthouse Square
          <Link to="https://goo.gl/maps/32g7MTf8H3fZ6z1T7">0.4 Mi from WDS HQ</Link>
        </Block>
      </Block>
    </Block>
    <div className="clear" />
  </Block>
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
    ## World Record Attempts
    <p>We've reserved every single room and bed of the Society Hotel during the main events of WDS from <b>Thursday, June 25th until Monday, June 29th</b>. Because this is more than just a typical hotel experience, rooms and bunks will <b>only be available for purchase as a four-night package.</b></p>

<p>Once we sell out, that's it! We literally cannot add any extra rooms or bunks. If you do miss out on the initial sale, email the WDS Concierge team (<a href="mailto:concierge@wds.fm">concierge@wds.fm</a>) to see if any openings become available and they'll do their best to assist you.</p>
    Here's what you need to know...
  </Block>
</Section>
<Section color="canvas">
  <Block>## Previous World Record Attempts</Block>
  <Tabs style="dots">
    <Tab title="Worldwide Waffles">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Waffles-1.jpg" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left"> 
      </Block>
    </Tab>
    <Tab title="Breakfast in Bed">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Waffles-2.jpg" width="800" height="533" mobile={{ all: { width: '100%' }}} margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
    <Tab title="The Great Namaste">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Yoga-1.jpg" mobile={{ all: { width: '100%' }}} width="800" height="533" margin="0 auto 60px" preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
<Tab title="Yoga Chain">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Yoga-2.jpg" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
    </Tab>
<Tab title="The Big Float">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Big-Float-1.jpg" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left">
      </Block>
     </Tab>
      <Tab title="Float Chain">
      <Image src="https://el-files-wds.s3.amazonaws.com/images/photos/Big-Float-2.jpg" width="800" height="533" margin="0 auto 60px" mobile={{ all: { width: '100%' }}} preload/>
      <Block cols="6" textAlign="left"> 
      </Block>
    </Tab>
  </Tabs>
 <Button styling="orange" align="center" to="/be-there" style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>

</Section>
<Section color="blue" css={{ padding: '90px 0 45px 0' }} mobile={{ phone: { padding: '20px 0 40px 0' } }}>
  <div className="clear"></div>
    <Block
    type="padded"
    cols="6"
    textAlign="left"
    bleed={false}
    background="canvas"
    className="has-checklist"
    css={{ padding: '60px 40px' }}
    mobile={{ phone: {
      padding: '60px 25px 60px 10px'
    }}}
    clip="top_lr_1.6"
  >
    ## WDS Hotel™ Package Details

    - 4-nights: Thursday, June 25th (check-in 3pm) to Monday, June 29th (check-out 11am)
    - All hotel taxes included in listed prices
    - Complimentary high speed Wi-Fi
    - Rooftop access
    - Text-a-concierge service through the hotel
    - Exclusive programming and activities
    - Exclusive SWAG just for WDS Hotel™ guests
    - High fives
     <p><b>Important details:</b> All packages are reserved through WDS and are paid in full upfront and are non-refundable (so make sure you can commit to being there before purchasing). A credit card is required for online reservation and at check-in. WDS is responsible for the reservation process and any changes associated with the 4-night package. The Society Hotel will provide all other hotel and guest services.</p> 
  </Block>
  <Image src="wds-hotel/coffee.bar.png" width="426" height="263" margin="-50px -60px 40px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />
  <div className="clear" />
</Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
      ## Let's Do This!
      Here's how to reserve your spot at the WDS Hotel™
      ##### Step #1: Choose your room type (descriptions below)
      We've got three options for travelers with both budget and sleep preferences in mind.
     ##### Step #2: Review the details and FAQ sections
  <p>It's the little details that can make a huge difference in your experience.</p>
  ##### Step #3: Payment and guest information
  <p>Make your room selection, book, tell us who's coming, and then prepare for lift-off.</p>
  </Block>
 <Button styling="orange" align="center" to="/be-there" style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>
    <div className="clear" />
</Section>
<Section color="sea" css={{ padding: '90px 0 45px 0' }} mobile={{ phone: { padding: '20px 0 40px 0' } }}>
  <div className="clear"></div>
    <Block
    type="padded"
    cols="6"
    textAlign="left"
    bleed={false}
    background="canvas"
    className="has-checklist"
    css={{ padding: '60px 40px' }}
    mobile={{ phone: {
      padding: '60px 25px 60px 10px'
    }}}
    clip="top_lr_1.6"
  >
        ## WDS Hotel™ FAQs
        <Block className="bigger" width="100%" margin="30px 0 0 0" css={{ textAlign: 'left' }}>You might have some questions. We've got some answers.</Block>
        ### Can I book a WDS Hotel™ package through the Society Hotel? 
        Because of our arrangement with the Society Hotel, WDS is handling reservations for all rooms during the WDS weekend (arriving Thursday, June 25th, checking out Monday, June 29th). All rooms will be sold as 4-night packages.   
        ### What is your refund/transfer policy for WDS Hotel™ packages?
        <p>All WDS Hotel packages are <b>non-refundable</b>. You can, however, transfer your package to another attendee for a $50 fee <b>until June 24th</b> by contacting the WDS concierge team (not the Society Hotel) at <b>concierge@wds.fm</b>.</p>  
        ### How do I book additional nights before or after the WDS package dates?
        <p>Once you've reserved your WDS Hotel™ package, please contact the Society Hotel by phone (avoid their online reservation system) to set up any additional dates by calling their front desk at <b>(503)445-0444</b>. You may be able to stay in the same room type as your WDS Hotel™ package, but that will depend on the hotel's room availability.</p>
        ### When will my credit card be charged?
        Your card will be immediately charged for the full amount when you book a WDS Hotel™ package. You'll also need to provide a credit card upon check-in for an incidental hold. This will also allow you to charge any hotel services, like buying a coffee or cocktail, directly to your room.
        ### Can I book a room with another WDS attendee?
        <p>Yes! Similar to any hotel reservation, one person is responsible for the reservation itself and only that person will be able to make any changes. <i>Bunks require individual reservations.</i></p>
        ### Can I book a partial stay or split days with a friend?
        Once you've booked a package, you get the room or bunk for the entire 4 nights regardless of how many days you plan to use. Like any hotel reservation, you are ultimately responsible for any other guests that you let stay in your room. For example, if your friend charges 20 craft microbrews and one bag of Skittles to the room, you'd be responsible for paying the bill.
        ### Can I book a private room with another person who isn’t attending WDS?
        <p>We'd love for everyone staying at the WDS Hotel™ to be part of WDS. However, we understand if you’ve booked a private room and you have a significant other or dependent staying with you who is not attending WDS. <i>For the bunk section of the hotel, all guests need to be registered WDS attendees.</i></p>
        ### What is a private (shared) bathroom?
        <p>Standard room and Bunkroom guests share bathroom facilities on the floors they are located in. Though shared by those staying on the floor, they are individual, private bathrooms.</p>
        ### What kinds of facilities are in the hotel?
        <p>There is an excellent cafe that serves light fare for breakfast and lunch, which you'll be able to charge to your room/bunk. Additionally, as a registered guest you'll have access to the amazing rooftop lounge. Please note there is not a fitness center onsite.</p>    
        ### How do I get to the hotel from the airport? 
        <p>For just $2.50, you can take the MAX red line train from the airport towards "City Center/Beaverton" and get off at the "Old Town/Chinatown" stop. Walk two blocks west on Davis St. and you'll see the hotel at the corner of Davis and 3rd Ave. <Link to="https://goo.gl/maps/93LythVvQEG2">(Google directions).</Link> Taxis and ride share options are also available.</p>
        ### How far is the hotel from the WDS Main Stage?
        <p>The hotel is less than a mile (0.8) walk through downtown <Link to="https://goo.gl/maps/v6kK2y4xsN82">(Google directions)</Link>. You can also make the trip by bike, light rail (MAX) system, or ride share.</p>
        ### It looks like you're sold out but I'd really like to stay at the WDS Hotel™. What are my options?
        <p>Reach out to our concierge team at <b>concierge@wds.fm</b> to see if there are any cancellations and openings. <i>Do not contact the Society Hotel regarding WDS packages.</i></p>
        ### Not finding the answer to your question?
        Contact our year-round concierge team at concierge@wds.fm. They’ll get back to you at lightning speed!
 </Block>
   <div className="clear" />
</Section>
<Import id="join-us" />
