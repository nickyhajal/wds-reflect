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
  <Image src="https://el-files-wds.s3.amazonaws.com/images/heading/trex-takeover.png" width="565px" height="169px" className="scriptHeader" preload/>
<Block cols="8" bleed={false} margin="0 0 80px">

<Video placeholder="https://farm1.staticflickr.com/261/19429502759_b07f583140_k_d.jpg" videoId="2evbNSYREGE" width="1000" height=""/>
  
<Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
      ## A world record 65 million years in the making.
     This summer, be part of something extraordinary: a World Record for the most people dressed in dinosaur costumes.  
     This is serious—we're not dino-ing around. A meteor may have taken out our prehistoric ancestors, but not even a global pandemic could stop this modern day reenactment.  
     It all goes down Friday morning on June 24th, 2022. Sign up and make history! 
     
        <Button styling="orange" align="center" to="/be-there" style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Registration begins April 6th</Button>

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
          ### Pick up Suits at 8am
          ### 701 SW 6th Avenue
          ### Portland, Oregon 97205
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
    With a long history of World Records, including the most number of people eating breakfast in bed and the Longest Yoga Chain, we’re excited to be back to break the record for Most People in Inflatable Dinosaur Costumes!
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
 <Button styling="orange" align="center" to="/be-there" style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Early registration begins April 6th</Button>

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
    ## T-Rex Takeover Details

    - Break a world record and make history!
    - Includes a full size, inflatable WDS T-Rex Costume (key item!) for you to take home
    - Batteries and T-Rex hands also included 
    - Dino Dance party in Pioneer Courthouse Square, the heart of Portland
    - On-stage antics and entertainment

     <p><b>Important details:</b> Tickets are reserved through WDS and your credit card will be charged at purchase. Tickets are non-refundable. </p> 
  </Block>
 
<Image src="https://el-files-wds.s3.amazonaws.com/images/photos/t-rex-party.jpg" width="400" height="266" margin="-50px -60px 40px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />
  
<div className="clear" />

    </Section>
<Section color="white">
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
      ## Let's Do This!
      Here’s how to reserve your spot in the WDS T-Rex Takeover!
      
      ##### Step #1: Buy Your Ticket
      Don't delay, history has its eyes on you
     
      ##### Step #2: Review the details and FAQ sections
  <p>We’ll send out more info to participants, but this is a great place to learn the basics</p>
  
      ##### Step #3: Get ready to be 7 feet tall with tiny arms!
  <p>You can pick up your suit at Pioneer Courthouse Square starting 8am on Friday, June 24th</p>
  
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
        ## T-Rex Takeover FAQs
        <Block className="bigger" width="100%" margin="30px 0 0 0" css={{ textAlign: 'left' }}>You might have some questions. We've got some answers.</Block>
        ### Will you sell out?
        We expect to sell out pretty quick. We have a long history of selling out our World Records. This event has limited space and limited dino-suits. If you want to take part of breaking this World Record, get your ticket ASAP! 
        ### Can I buy tickets for friends?
        <p>Right now, we are limiting this sale to WDS attendees, with the hope of having <i>only</i> WDS attendees. If we open it up to a wider audience, we’ll make sure you’re the first to know!</p>  
        ### Will the suit fit me?
        <p>We have tried the suits out on a wide-range of body types. Very short, and very tall. Large and small. Everyone so far has been able to fit comfortably, or at least as comfortably as you can feel in a giant costume.</p>
        ### Can I bring my own suit?
        <p>We are not allowing outside suits for this event. You will be given a full-size, WDS T-Rex costume at registration. We’ll have Ambassadors around to help you put it on, and keep you safe while you’re in it.</p>
        ### What should I bring?
        <p>Pack light. The suit is large enough for most people to wear a small backpack, purse or satchel. The event will be fenced off from the general public, but we won’t have a secure bag check area. Bring water, sunscreen, a small snack and your ID. If you have long hair, a hair tie or headband is highly recommended.</p>
        ### How long will I be in the suit?
        <p>We expect that you’ll be in the suit for 30-45 minutes as we do the official count for the record and enjoy some Dino Dancing.</p>
        ### Will I be able to take the suit home with me?
        <p>Yes, you can keep it and wear it for all special occasions. Proms, weddings, family reunions—we've got you covered. </p>
        ### What is the previous record?
        <p>You can find it here -- <a href="https://www.guinnessworldrecords.com/world-records/430985-largest-gathering-of-people-dressed-as-dinosaurs" target="_blank">Largest Gathering of People Dressed as Dinosaurs</a> . It was set in 2019 with 252 people. We expect to smash this record back to the stone age!</p>
        ### Will there be more tickets once you sell out?
        <p>Nope! We have a limited number of suits and once they’re reserved, ticket sales become extinct. Don’t wait for evolution! </p>   
        ### Not finding the answer to your question?
        <p>Contact our year-round concierge team at <a href="mailto:concierge@wds.fm" target="_blank">concierge@wds.fm.</a></p>
 </Block>
   <div className="clear" />
</Section>
