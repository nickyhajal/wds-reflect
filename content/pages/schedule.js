<Section
  headerImage="v2/hero/schedule.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="v2/headings/schedule.png" width="421" height="151" className="scriptHeader" preload/>
<Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
    ## How the WDS Schedule Works
    As we've done since year one, the main events (main-stage keynotes and celebrations) take place during the weekend of WDS. Additionally, every attendee will have the ability to add events and activities throughout the entire week using the WDS mobile app to create their own personalized schedule. 

You decide if you'll join us for the weekend or come for the entire week. Regardless, a WDS ticket gives you access to it all: main events, special discounts, bonuses, and surprises.  
        </Block>
 <Image src="photos/audience.png"
    width="426" height="263"
    margin="0 0 -100px -50px"
    mobile={{ phone: { margin: '0 0 -100px -20px', width: '100%' } }}
    preload
  />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px', position: 'relative', zIndex:'4' }} clip="top_rl_1.6">
    ## A Week of WDS: June 21 - June 26, 2022

    - **Tuesday (6/21)** Activities at WDS HQ and Attendee-Led Meetups
    - **Wednesday (6/22)** Academies, Activities at WDS HQ and Attendee-Led Meetups
    <ul><li><b className="highlight highlight-2">Thursday (6/23)</b> Academies, Activities, and Attendee-Led Meetups, and Opening Party</li></ul>
    <ul><li><b className="highlight highlight-2">Friday (6/24)</b>  Academies, Activities, Attendee-Led Meetups, World Record Attempt</li></ul>
    <ul><li><b className="highlight highlight-2">Saturday(6/25)</b> Main Stage Keynotes, Attendee-Led Meetups, and Evening Activities</li></ul>
    <ul><li><b className="highlight highlight-3">Sunday (6/26)</b> Main Stage Keynotes, Attendee-Led Meetups, and the Closing Party</li></ul>
    - **Monday (6/27)** Attendee-Led Meetups & Final Farewells
      <div className="note">Can't come for the whole time? No problem, but you don't want to miss the main events taking place on Thursday (evening), Friday, Saturday, and Sunday. For the best possible WDS experience we recommend arriving no later than Thursday afternoon, and leaving no earlier than Monday morning.</div>
  </Block>
<Image src="photos/jellyfish.png" width="426" height="263" margin="-50px -60px 100px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />
  <div className="clear" />
<Block cols="6" bleed={false} textAlign="center" margin="80px 0 80px">
## Registered for WDS? Start here!
Click on the button for a step-by-step guide on how to prepare and maximize your WDS experience.
<Button to="" style={{ fontSize: '22px', padding: '18px 100px', marginTop: '80px', marginBottom: '40px' }} fitToText>WDS X Guide (coming soon)</Button>
</Block>
</Section>
  <Section color="canvas">
  <Block>## Speakers and Special Guests For WDS</Block>
  <Block cols="6" className="bigger">
    Every year we're excited to invite several friends of WDS living extraordinary lives and working to build a better world. Our keynote speakers are bestselling authors, leading activists, and in-demand storyteller and they come to WDS to share their stories, experiences, and lessons with our community. 
    
    _**Check back later in the year for WDS speaker lineup announcements and profiles.**_
  </Block>
  <div class="clear" />
</Section>  
   
<Section
  color="white"
>
    
  <SpeakerList title="Alumni Speakers" year="alumni" />
  <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/Portland-Oregon.png" label="Portlandia">
      ## Portland
      Our home base since year one. Learn more about our beloved city and confirm whether or not all the fun things you've heard is true (they probably are).
      <Button to="/location">Learn More</Button>
    </Block>
    <Block type="image" src="photos/JoinUs/image-academies.jpg" label="Coming Soon">
      ## Academies
      These half-day workshops feature some of our favorite alumni speakers and select WDS community members that are experts in their fields.
      <Button to="/academies">Learn More</Button>
    </Block>
  </Grid>
  <Block type="padded" background="bgry">
    <Image src="v2/icon/outline-bed.png" width="100" height="100"  align="center" margin="0 0 40px 0" />
        <Block cols="5">
      ## How Can We Help? 
      Have questions about WDS? Trying to find the best donut in Portland? Looking for a high-five? Let our concierge team know how we can help make your WDS experience great.
           <Button to="https://worlddominationsummit.com/contact-us" newWindow={true} styling="orange" fitToText>Contact Us</Button> 
    </Block>
  </Block>
</Section>
<Import id="join-us" />
<Import id="wait-list" />
