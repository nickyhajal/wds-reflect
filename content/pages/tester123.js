<Section
  headerImage="v2/hero/location.png"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="https://el-files-wds.s3.amazonaws.com/images/heading/picnic.png" width="446px" height="156px" className="scriptHeader" preload/>
  <Block cols="8" bleed={false} margin="0 0 80px">
    <Image src="https://el-files-wds.s3.amazonaws.com/images/wds.picnic.png" width="100%" height="302" />
    <Block cols="6" bleed={false} textAlign="left" margin="80px 0 80px">
      ## Preorder your WDS Picnic Meal
      This year we're teaming up with **Giraffe Japanese Deli** to provide 3 incredibly delicious bentos for the WDS picnic.   
      <p>Why should you preorder your meal?</p>
      <p><ul>
         <li>The food is amazing! Each bento box holds different compartments of yummy dishes.</li>
         <li>Convenience and easy pickup! Just show up to the event and we'll have your order ready for you. </li>
         <li>Special, limited edition swag bonus! The first 400 to preorder meals get a surprise gift.</li>
         <li>Did we mention, the food is amazing! Learn more about the 3 bento options below.</li></ul></p>
    </Block>
  </Block>
  <Block cols="6" css={{ padding: '50px 0 20px' }} textAlign="left">
      ## Let's Do This!
      Here's how to preorder your bento box for the WDS Picnic
      ##### Step #1: Choose your bento option (descriptions below)
      We've got three great options to meet a variety of appetites and needs.
      ##### Step #2: Review the details and FAQ sections
      It's the little details that can make a huge difference in your experience.
      ##### Step #3: Pay for your bento
      Make your bento selection. We'll send an email confirming your selection and purchase.
      ##### Step #4: Pick up your bento at the event and enjoy
      One final step between you and your delicious bento. 
  </Block>
  <Image src="https://el-files-wds.s3.amazonaws.com/images/Giraffe-Deli-pics.jpg" width="100%" height="348" />
  <Block margin="100px 0 50px 0">
      <Block cols="6" css={{ padding: '10px 0 20px' }} textAlign="left">
        ## Choose Your Bento
      Each bentos is packed with multiple items in one container. _Please note there are no substitutions and come exactly as described. The pictures below are for example purposes only and might vary from the actual bento box._ 
      </Block>
      <Grid numCols="3" tabletCols="2" width="968">
        <Block type="image-overlay" anchor="right" src="wds-hotel/suite-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Sandwich Bento Box 
         - Combo sando: half egg-salad, half pork-katsu sandwich. The best of both worlds in one sandwhich!
         - Kinpira vegetable salad: sweet marinated vegetable medley marinated with a touch of sake
         - Potato salad: Japanese style. 
        </Block>
        <Block type="image-overlay" anchor="left" src="wds-hotel/standard-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Veggie Bento Box (Gluten free and Vegan)
         - Sautéed seasonal mushrooms
         - Vegetable stir fry
         - Green beans & tofu
         - Kinpira vegetable salad: sweet marinated vegetable medley marinated with a touch of sake
         - Pickled greens onigiri: rice, vegan furikake    
        </Block>
        <Block type="image-overlay" anchor="right" src="wds-hotel/Bunk-room1.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Chicken Bento Box (keto and gluten free)
         - Yuzu chicken: chicken thighs, yuzu, salt, pepper 
         - Sautéed seasonal mushrooms 
         - Green beans & tofu
         - Hard boiled egg: sake, mirin, tamari, konbu 
          </Block>
     </Grid>
    </Block>
    <Block cols="8" bleed={false} margin="0 0 80px">
    <Grid numCols="3" tabletCols="2" width="968">
      <BlockWithLiveLabel type="caption" src="wds-hotel/suite-room1.jpg" path="hotels.suite" mobile={{marginBottom: '100px'}}>
        ### Sandwich Bento Box ($12.97)
        Private bathroom
        <PurchaseButton 
        price="94700" product="WDS Hotel Suite" description="Suite at the WDS Hotel" redirect="complete-booking" code="hotelsuite"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.suite">Book Your Suite!</PurchaseButton>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="wds-hotel/standard-room1.jpg" path="hotels.room" mobile={{marginBottom: '100px'}}>
        ### Veggie Bento Box ($12.97)
        Shared bathroom
        <PurchaseButton 
        price="74700" product="WDS Hotel Standard Room" description="Standard Room at the WDS Hotel" redirect="complete-booking" code="hotelroom"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.room">Book Your Room!</PurchaseButton>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="wds-hotel/Bunk-room1.jpg" path="hotels.bunk" mobile={{marginBottom: '100px'}}>
        ### Chicken Bento Box ($12.97)
        Shared bathroom
        <PurchaseButton 
        price="34700" product="WDS Hotel Bunk" description="Bunk at the WDS Hotel" redirect="complete-booking" code="hotelbunk"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.bunk">Book Your Bunk!</PurchaseButton>
      </BlockWithLiveLabel>
    </Grid>
    </Block>
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
        Because of our arrangement with the Society Hotel, WDS is handling reservations for all rooms during the WDS weekend (arriving Thursday, June 28th, checking out Monday, July 2nd). All rooms will be sold as 4-night packages.   
        ### What is your refund/transfer policy for WDS Hotel™ packages?
        <p>All WDS Hotel packages are <b>non-refundable</b>. You can, however, transfer your package to another attendee for a $50 fee until June 27th by contacting the WDS concierge team (not the Society Hotel) at <b>concierge@wds.fm</b>.</p>  
        ### How do I book additional nights before or after the WDS package dates?
        <p>Once you've reserved your WDS Hotel™ package, please contact the Society Hotel by phone (avoid their online reservation system) to set up any additional dates by calling their front desk at <b>503-445-0444</b>. You may be able to stay in the same room type as your WDS Hotel™ package, but that will depend on the hotel's room availability.</p>
        ### When will my credit card be charged?
        Your card will be immediately charged for the full amount when you book a WDS Hotel™ package. You'll also need to provide a credit card upon check-in for an incidental hold. This will also allow you to charge any hotel services, like buying a coffee or cocktail, directly to your room.
        ### Can I book a room with another WDS attendee?
        <p>Yes! Similar to any hotel reservation, one person is responsible for the reservation itself and only that person will be able to make any changes. <i>Bunks require individual reservations.</i></p>
        ### Can I book a partial stay or split days with a friend?
        Once you've booked a package, you get the room or bunk for the entire 4 nights regardless of how many days you plan to use. Like any hotel reservation, you are ultimately responsible for any other guests that you let stay in your room. For example, if your friend charges 20 craft microbrews and one bag of Skittles to the room, you'd be responsible for paying the bill.
        ### Can I book a private room with another person who isn’t attending WDS?
        <p>We'd love for everyone staying at the WDS Hotel™ to be part of WDS. However, we understand if you’ve booked a private room and you have a significant other or dependent staying with you who is not attending WDS. <i>For the bunk section of the hotel, all guests need to be registered WDS attendees.</i></p>
        ### What kinds of facilities are in the hotel?
        <p>There is an excellent cafe that serves light fare for breakfast and lunch, which you'll be able to charge to your room/bunk. Additionally, as a registered guest you'll have access to the amazing rooftop lounge. Please note there is not a fitness center onsite.</p>    
        ### How do I get to the hotel from the airport? 
        <p>For just $2.50, you can take the MAX red line train from the airport towards "City Center/Beaverton" and get off at the "Old Town/Chinatown" stop. Walk two blocks west on Davis St. and you'll see the hotel at the corner of Davis and 3rd Ave. <Link to="https://goo.gl/maps/93LythVvQEG2">(Google directions).</Link> Taxis and ride share options are also available.</p>
        ### How far is the hotel from the WDS Main Stage?
        <p>The hotel is less than a mile (0.8) walk through downtown <Link to="https://goo.gl/maps/v6kK2y4xsN82">(Google directions)</Link>. You can also make the trip by bike, light rail (MAX) system, or ride share.</p>
        ### It looks like you're sold out but I'd really like to stay at the WDS Hotel™. What are my options?
        <p>Reach out to our concierge team at <b>concierge@wds.fm</b> to see if there are any cancellations and openings. <i>Do not contact the Society Hotel regarding WDS packages.</i></p>
        ### Not finding the answer to your question?
        <p>Contact our year-round concierge team at <b>concierge@wds.fm</b>. They’ll get back to you at lightning speed!</p>
 </Block>
   <div className="clear" />
</Section>
<Section color="white">
  <Block margin="100px 0 50px 0">
      <Block cols="6" css={{ padding: '10px 0 20px' }} textAlign="left">
        ## Reserve Your WDS Hotel™ Package 
      Once we run out of rooms/packages that's it! We literally cannot add any extra rooms so make sure to book your package asap. 
      </Block>
    </Block>
    <Block cols="8" bleed={false} margin="0 0 80px">
    <Grid numCols="3" tabletCols="2" width="968">
      <BlockWithLiveLabel type="caption" src="wds-hotel/suite-room1.jpg" path="hotels.suite" mobile={{marginBottom: '100px'}}>
        ### Private Suites ($947)
        Private bathroom
        <PurchaseButton 
        price="94700" product="WDS Hotel Suite" description="Suite at the WDS Hotel" redirect="complete-booking" code="hotelsuite"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.suite">Book Your Suite!</PurchaseButton>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="wds-hotel/standard-room1.jpg" path="hotels.room" mobile={{marginBottom: '100px'}}>
        ### Standard Room ($747)
        Shared bathroom
        <PurchaseButton 
        price="74700" product="WDS Hotel Standard Room" description="Standard Room at the WDS Hotel" redirect="complete-booking" code="hotelroom"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.room">Book Your Room!</PurchaseButton>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="wds-hotel/Bunk-room1.jpg" path="hotels.bunk" mobile={{marginBottom: '100px'}}>
        ### Bunks ($347)
        Shared bathroom
        <PurchaseButton 
        price="34700" product="WDS Hotel Bunk" description="Bunk at the WDS Hotel" redirect="complete-booking" code="hotelbunk"
        style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="hotels.bunk">Book Your Bunk!</PurchaseButton>
      </BlockWithLiveLabel>
    </Grid>
    </Block>
    <div className="clear" />
</Section>
<Import id="join-us" />
