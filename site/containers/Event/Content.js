import styled from 'styled-components';

export default styled.div`
  padding: 16px 96px 16px 16px;
  flex: 1;
  @media 

  (max-device-width: 800px) 
  and (orientation: portrait) { 
    width: 100%;
    flex: auto;
    padding: 16px;
  }

  h2 {
    font-family: Vitesse;
    font-size: 38px;
    margin-bottom: 8px;
  }
  .details {
    font-size: 22px;
    margin-bottom: 32px;
    font-family: KarlaItalic;
    font-weight: bold;
    color: #8e8376;

    .sub {
      margin-top: 2px;
      font-family: Karla;
      font-size:18px;
      font-weight: normal;
    }
  }
  h3 {
    text-transform: uppercase;
    font-family: Vitesse;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 18px;
    line-height: 160%;
    font-size: 16px;
  }

  .section {
    margin-bottom: 48px;
  }

  li {
    font-size: 18px;
    line-height: 160%;
    margin-bottom: 12px;
    list-style-position: outside;
    margin-left: 18px;
  }
`;
