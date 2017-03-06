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
  
  <Grid margin="60px 0 -20px 0">
    <Block type="image" src="photos/Paramount-Hotel.jpg">
      ## Paramount Hotel 
      The Paramount Hotel is a casual, intimate boutique hotel boasting oversized guestrooms and genuine hospitality. Each guestroom and suite features relaxing décor, spacious marble finished bathrooms and modern amenities. With Director Park as a front yard, the Paramount provides easy access to the very best the city has to offer.
      <p>Book online using the code (WDS2017) or call to book (503-223-9900). Be sure to tell them you're with WDS. <Link to="https://goo.gl/maps/6D6mJGAY7dv">(0.1 Mi from Base)</Link></p> 
      <Button to="http://uspor.webhotel.microsdc.us/bp/search_rooms.jsp?groupCode=WDS17" newWindow={true}>Book Online</Button>
    </Block>
    <Block type="image" src="photos/Hotel-Modera-Exterior.jpg">
      ## Hotel Modera
      A stylish luxury boutique hotel in downtown Portland, Hotel Modera is located in the center of the city's theater district, surrounded by fine restaurants, art galleries, museums and entertaining nightlife. The hotel's elegant atmosphere reflects the vibrancy and unique beauty of Portland itself. 
      <p>Book online using the group code "WDS2017" or call to book (877.484.1084). Be sure to tell them you're with WDS. <Link to="https://goo.gl/maps/T3BnDWTY9oq">(0.1 Mi from Base)</Link></p> 
<Button to="https://gc.synxis.com/rez.aspx?Chain=5173&Hotel=53439&group=WDS2017" newWindow={true}>Book Online</Button>    
</Block>
  </Grid>
  
</Section>
<Import id="wait-list" />
