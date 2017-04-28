<Section color="orange" overflow="hidden">
  <Block margin="60px 0 30px">## Tickets are On Sale!</Block>
  <Block cols="5" css={{ color: 'white', margin: '50px auto' }} className="bigger">
    This the final chance to get your ticket for WDS 2017! Are you ready to be part of an experience that will change your life forever?
  </Block>
  <Button styling="white" align="center" to={(
    window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us'
  )} style={{ width: '260px', margin: '60px auto 110px', padding: '20px 0', fontSize: '21px', fontFamily: 'VitesseBold' }}>Get Your Ticket!</Button>
  <Block width="400px" align="center" margin="50px 0 90px" css={{ maxWidth: "400px" }}>
    <TicketCounter sale="sale_wave2_2017" type="countup" />
  </Block>
  <JoinUsButton />
  <div className="clear" />
</Section>