<Section
  headerImage="hero/schedule.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/schedule.png" width="421" height="151" className="scriptHeader" preload/>
  <Image src="photos/audience.png"
    width="426" height="263"
    margin="0 0 -100px -50px"
    mobile={{ phone: { margin: '0 0 -100px -20px', width: '100%' } }}
    preload
  />
  <Block type="padded" cols="6" bleed={false} background="canvas" className="table-list" css={{ padding: '60px 40px', position: 'relative', zIndex:'4' }} clip="top_lr_1.6">
    ## A Week of WDS: July 11th - 17th, 2017

    - **Tuesday** Small Group Activities and Attendee-Led Meetups
    - **Wednesday** Academies, Small Group Activities and Attendee-Led Meetups
    - **Thursday** Academies, Small Group Activities, and Attendee-Led Meetups
    <li><b className="highlight highlight-2">Friday</b> Big Adventure, Academies, Opening Party</li>
    <li><b className="highlight highlight-2">Saturday</b> Main Stage Keynotes, Evening Activities</li>
    <li><b className="highlight highlight-3">Sunday</b> Main Stage Keynotes, Closing Party</li>
    - **Monday** Academies and Attendee-Led Meetups
      <i>Can't come for the whole time? No problem, but you don't want to miss the main events taking place on Friday, Saturday, and Sunday. For the best possible WDS experience we recommend arriving no later than Thursday evening, and leaving no earlier than Monday morning.</i>
  </Block>
  <Image src="photos/jellyfish.png" width="426" height="263" margin="-50px -60px 100px 0" css={{ float: 'right' }} mobile={{ all: { margin: '-50px -15px 100px 0' } }} />
  <div className="clear" />
  <SpeakerList title="Alumni Speakers" />
  <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/Portland-Oregon.png">
      ## Portland
      Our home base since year one. Learn more about our beloved city and confirm whether or not all the fun things you've heard is true (they probably are).
      <Button to="/location">Learn More</Button>
    </Block>
    <Block type="image" src="photos/JoinUs/image-academies.jpg">
      ## Academies
      These half-day workshops feature some of our favorite alumni speakers and select WDS community members that are experts in their fields.
      <Button to="/academies">Learn More</Button>
    </Block>
  </Grid>
  <Block type="padded" background="sea">
    <Image src="icon/outline-bed.png" width="101" height="78"  align="center" margin="0 0 40px 0" />
    <Block cols="5">
      ## Highly Sensitive Person Lounge
      Big events with lots of people can sometimes be overwhelming. We get that because we feel that way too! Since the very first WDS we've provided a dedicated quiet space with hammocks and masseuses for attendees to break away, relax, and recharge.
    </Block>
  </Block>
</Section>
<Import id="wait-list" />
