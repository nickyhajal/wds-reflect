import styled from 'styled-components';
import C from '../../constants';

export default styled.div`
  display: flex;

  @media 
  (max-device-width: 800px) 
  and (orientation: portrait) { 
    flex-direction: column;

  }

  .name {
    width: 180px;
    text-align: center;
    font-family: Vitesse;
    color: ${C.color.orange};

    @media 
    (max-device-width: 800px) 
    and (orientation: portrait) { 
      width: 100%;
      margin-bottom: 20px;
    }

    .avatar {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      border-radius: 50%;
      @media(--phone) {
        width: 40px;
        height: 40px;
        margin-right: 0;
      }
    }
  }
  .about {
    flex: 1;
    a {
      color: ${C.color.orange};
    }
  }
`;
