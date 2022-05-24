;<Section
  headerClip="br:0%,-10%;"
  headerImage="photos/memories.png"
  color="canvas"
>
  <Block
    cols="8"
    bleed={false}
    textAlign="left"
    margin="80px 0 80px"
    background="white"
    type="padded"
    className="bigger"
  >
    <h2 style={{fontSize: '32px', textAlign: 'center'}}>
      Action Needed: Choose Your Own WDS Title
    </h2>
    <p>
      The best and most important part about WDS is you. Each year, every
      attendee plays an important part in creating the overall WDS experience.
    </p>
    <p>
      This year we want to commission and give everyone the opportunity to create
      their own WDS title. It can be serious or silly, or maybe a little of both. Here are some examples from our team:
    </p>
    <table className="time-table">
      <tbody>
        <tr>
          <td>Chris Guillebeau - Ringleader</td>
          <td>Jolie Guillebeau - Chief Emotional Officer</td>
        </tr>
        <tr>
          <td>Nicky Hajal - Resident Genius</td>
          <td>Wes & Tera Wages - Media Moguls</td>
        </tr>
        <tr>
          <td>Tina Hart - Viceroy of Volunteers</td>
          <td>Shauna Noah - First Lady of Fun</td>
        </tr>
        <tr>
          <td>Michelle Chang - Voice of Reason</td>
          <td>Jedd Chang - Ambassador of Aloha</td>
        </tr>
        <tr>
          <td>David Van Veen - T-Rex Tamer</td> 
          <td>Denise Ransome - Creative Catalyst</td>      
        </tr>
      </tbody>
    </table>
  
  

 <h2 style={{fontSize: '32px', textAlign: 'left'}}>What is <em>Your</em> WDS Title?</h2>
    <p>
      Every attendee will have their title proudly printed on their name badge.
      Use the space below to enter your own personal WDS title (20 character
      limit).
    </p>
    <p>
      Our goal is to have 100% participation for this activity! Because of printing deadlines,
      titles must be submitted by <b>June 8, 2022</b>. There is no one like you.
      What will you bring to WDS to help create the overall experience?
    </p>
    <div className="title-enterArea">
      <h2 style={{marginBottom: '2rem', fontSize: '1.4rem'}}>It's time... set your WDS Title below:</h2>
      <div style={{marginTop: '-20px'}}>
      <WdsTitle />
      </div>
    </div>
  </Block>
</Section>
