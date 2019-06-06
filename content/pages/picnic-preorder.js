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
    <Image src="https://el-files-wds.s3.amazonaws.com/images/picnic.header.jpg" width="100%" height="302" />
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
      
      ### BONUS: the first 200 to order receive a limited edition swag gift!
      
  </Block>
  <Image src="https://el-files-wds.s3.amazonaws.com/images/Giraffe-Deli-pics.jpg" width="100%" height="348" />
  <Block margin="100px 0 50px 0">
      <Block cols="6" css={{ padding: '10px 0 20px' }} textAlign="left">
        ## Choose Your Bento
      Each bentos is packed with multiple items in one container. _Please note there are no substitutions and come exactly as described. The pictures below are for example purposes only and might vary from the actual bento box._ 
      </Block>
      <Grid numCols="3" tabletCols="2" width="968">
        <Block type="image-overlay" anchor="right" src="https://el-files-wds.s3.amazonaws.com/images/bentosandwich.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Sandwich Bento Box (omnivore's delight)
         - Combo sando: half egg-salad, half pork-katsu sandwich. The best of both worlds in one sandwhich!
         - Kinpira vegetable salad: sweet marinated vegetable medley marinated with a touch of sake
         - Potato salad: Japanese style. 
        </Block>
        <Block type="image-overlay" anchor="left" src="https://el-files-wds.s3.amazonaws.com/images/bentoveg.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Veggie Bento Box (gluten-free and vegan)
         - Sautéed seasonal mushrooms
         - Vegetable stir fry
         - Green beans & tofu
         - Kinpira vegetable salad: sweet marinated vegetable medley marinated with a touch of sake
         - Pickled greens onigiri: rice, vegan furikake    
        </Block>
        <Block type="image-overlay" anchor="right" src="https://el-files-wds.s3.amazonaws.com/images/bentochicken.jpg" imageClip="tr:0,+10%;" clip="tr:0,+10%;">
          ## Chicken Bento Box (keto friendly and gluten-free)
         - Yuzu chicken: chicken thighs, yuzu, salt, pepper 
         - Sautéed seasonal mushrooms 
         - Green beans & tofu
         - Hard boiled egg: sake, mirin, tamari, konbu 
          </Block>
     </Grid>
    </Block>
    <Block cols="8" bleed={false} margin="0 0 80px">
      <Grid numCols="3" tabletCols="2" width="968">
        <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentosandwich.jpg" path="meals.sandwich" mobile={{marginBottom: '100px'}}>
          ### Sandwich Bento Box ($12.97)
          omnivore delight
          <PurchaseButton
              price="1297" product="Sandwich Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealsandwich"
              style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="meals.sandwich">
                Purchase
            </PurchaseButton>
        </BlockWithLiveLabel>
        <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentoveg.jpg" path="meals.veggie" mobile={{marginBottom: '100px'}}>
          ### Veggie Bento Box ($12.97)
          gluten-free and vegan
          <PurchaseButton
              price="1297" product="Veggie Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealveggie"
              style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-65px'}} path="meals.veggie">
                Purchase
            </PurchaseButton>>
        </BlockWithLiveLabel>
        <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentochicken.jpg" path="meals.chicken" mobile={{marginBottom: '100px'}}>
          ### Chicken Bento Box ($12.97)
          keto friendly and gluten-free
          <PurchaseButton
              price="1297" product="Chicken Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealchicken"
              style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="meals.chicken">
                Purchase
            </PurchaseButton>
        </BlockWithLiveLabel>
      </Grid>
    </Block>
    <div className="clear" />
</Section>
<Section color="sea" css={{ padding: '90px 0 45px 0' }} mobile={{ phone: { padding: '20px 0 40px 0' } }}>
  <div className="clear"></div>
    <Block type="padded" cols="6" textAlign="left" bleed={false} background="canvas" className="has-checklist" css={{ padding: '60px 40px' }} mobile={{ phone: { padding: '60px 25px 60px 10px' }}} clip="top_lr_1.6" >
        ## Bento Preorder FAQs
        <Block className="bigger" width="100%" margin="30px 0 0 0" css={{ textAlign: 'left' }}>You might have some questions. We've got some answers.</Block>   
        ### What is your refund/transfer policy for bento orders?
        <p>All bento preorders are <b>non-refundable</b>.</p>  
        ### Can I modify or request different items in any of the bentos?
        <p>No substitutions can be made. We've worked really hard with the caterer to provide a delicious menu that also meets as many dietary needs as possible.</p>
        ### Can I order multiple bento options?
        <p>Yes, but you must complete the process for each additional order.</p>  
        ### When will my credit card be charged?
        <p>Your card will be immediately charged for your bento order.</p>  
        ### Can I order a bento for another WDS attendee?
        <p>Yes... well sort of. You could technically order multiple bentos and give anyone your extras.</p>
        ### When will I receive my bento?
        <p>When you check-in at the event, Friday June 28th starting at 5pm. You cannot pickup your bento after the event finishes.</p>
        ### Can someone else pick-up my bento for me?
        <p>No. Bentos will only be delievered to the original purchaser.</p>
        ### What about drinks and dessert?
        <p>Glad you asked. There will be drinks and dessert available for additional purchase on site at the picnic.</p>    
         ### Why bentos?
        <p>They are the perfect meal for picnics. You get lots of different dishes and it can be transported in one container. It's also a fun word to say!</p>
        ### Not finding the answer to your question?
        <p>Contact our year-round concierge team at <b>concierge@wds.fm</b>. They’ll get back to you at lightning speed!</p>
 </Block>
   <div className="clear" />
</Section>
<Section color="white">
  <Block margin="100px 0 50px 0">
      <Block cols="6" css={{ padding: '10px 0 20px' }} textAlign="left">
        ## Order your bento today! 
      Don't forget, the first 200 attendees to preorder their bento get a limited edition swag gift! 
      </Block>
    </Block>
    <Block cols="8" bleed={false} margin="0 0 80px">
    <Grid numCols="3" tabletCols="2" width="968">
      <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentosandwich.jpg" path="meals.sandwich" mobile={{marginBottom: '100px'}}>
        ### Sandwich Bento Box ($12.97)
        omnivore delight
        <PurchaseButton
            price="1297" product="Sandwich Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealsandwich"
            style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="meals.sandwich">
              Purchase
          </PurchaseButton>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentoveg.jpg" path="meals.veggie" mobile={{marginBottom: '100px'}}>
        ### Veggie Bento Box ($12.97)
        gluten-free and vegan
        <PurchaseButton
            price="1297" product="Veggie Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealveggie"
            style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-65px'}} path="meals.veggie">
              Purchase
          </PurchaseButton>>
      </BlockWithLiveLabel>
      <BlockWithLiveLabel type="caption" src="https://el-files-wds.s3.amazonaws.com/images/bentochicken.jpg" path="meals.chicken" mobile={{marginBottom: '100px'}}>
        ### Chicken Bento Box ($12.97)
        keto friendly and gluten-free
        <PurchaseButton
            price="1297" product="Chicken Bento Box" description="Your WDS Picnic Meal" redirect="picnic-order-confirmed" code="mealchicken"
            style={{width: '100%', position: 'relative', top: '30px', marginBottom: '-50px'}} path="meals.chicken">
              Purchase
          </PurchaseButton>
      </BlockWithLiveLabel>
    </Grid>
    </Block>
    <div className="clear" />
</Section>
<Import id="join-us" />
