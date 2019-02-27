import styled from 'styled-components';
import C from '../../constants';

export default styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 800px;
  display: block;
  background: ${C.color.white};
  padding: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  transition: 0.2s all 0.1s;
  font-family: Lato;


h2 {
  background: rgb(242, 242, 234) none repeat scroll 0% 0%;
  padding: 20px 60px 18px;
  font-size: 16px;
  margin-left: -60px;
  margin-right: -60px;
  margin-top: 0px;
  margin-bottom: 43px;
  text-transform: uppercase;
}

button {
  background: rgb(253, 112, 33);
  border: 0;
  font-size: 16px;
  color: #fff;
  padding: 11px 46px;
  font-weight: normal;
}
button.modal-close {
  content: "X";
width: auto;
height: auto;
background-size: 100% auto;
position: absolute;
right: 2px;
top: 2px;
background: ${C.color.sea};
color: $white;
opacity: 0.8;
font-size: 26px;
padding: 4px 11px;
border-radius: 50%;
cursor: pointer;
transition: 0.2s all;
&:hover {
  opacity: 1;
};

}

@media screen and (max-width: 1024px) {
    width: 100% !important;
    height: 100% !important;
      padding: 0px 20px;
    margin-left: 0;
    box-sizing: border-box;
    overflow: auto;

  .modal-close {
    margin-top: 17px;
    margin-bottom: 20px;
  }
  h2, h3 {
    width: 100% !important;
  }
  p {
    width: 100% important
  }
}

`;


// @media (--tablet) {
//   top: 0 !important;
//   padding-top: 80px;
//   button.modal-close {
//     top: 10px;
//     right: 10px;
//   }
// }
