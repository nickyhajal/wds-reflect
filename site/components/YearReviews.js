import React from 'react';
import styled from 'styled-components';
import C from '../constants';
// import Image from './Image/Image';

const Shell = styled.div`
  width: 1080px;
`;
const Wrap = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  width: 540px;
  background: #fff;
  flex-direction: column;
  h3 {
    color: #fff;
    background: ${C.color.red};
    display: flex;
    justify-content: space-between;
    font-family: karla;
    width: 100%;
    font-size: 14px;
    height: 55px;
    align-items: center;
    padding: 18px 30px;
    span {
      display: inline-block;
      font-weight: 200;
    }
    span:first-of-type {
      font-family: vitesse;
      font-weight: 400;
      font-size: 16px;
    } 
  }
  h4 {
    color: ${C.color.orange};
    font-size: 26px;
    font-family: vitesse;
    font-weight: 400;
    margin-bottom: 12px;
  }
  article {
    padding: 40px 50px;
    p {
      margin-bottom: 20px;
      font-weight: 200;
      line-height: 140%;
    }
    ul {
      margin-bottom: 20px;
      li {
        font-weight: 200;
        line-height: 140%;
      }
    }
    .speaker {
      span {
        display: block;
        color: ${C.color.orange};
      }
    }
  }
`
const Image = styled.div`
  width: 540px;
  height: 540px;
  background-size: cover;
  background-image: url(https://files.wds.fm/images/${({src}) => src}.png);
  flex: none;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto 40px;
  button {
    border-bottom: 2px solid ${C.color.orange};
    border-width: 0 0 2px 0;
    padding: 3px 0;
    color: ${({ selected }) => selected ? C.color.orange : C.color.dark};
    cursor: pointer;
  }
`;
export default class YearReviews extends React.Component {
  static defaultProps = {
    years: [],
  }
  state = {
    year: '2016',
  };
  componentDidMount() {
    this.props.years.map(({ year }) => (new Image()).src = `https://files.wds.fm/images/v2/art/legacy-${year}`);
  }
  showYear = (year) => {
    this.setState({ year });
  }
  render() {
    const ys = this.props.years;
    ys.map(({year}) => console.log(year===this.state.year));
    const yr = ys.length ? ys.find(({year}) => year === this.state.year) : false;
    if (yr) {
      const { year, title, dates, speaker: [moment, speakerName], highlights, surprise } = yr;
      return (
        <Shell>
          <Nav>
            {ys.map(({ year }) => (
              <button onClick={() => this.showYear(year)}>{year}</button>
            ))}
          </Nav>
          <Wrap>
            <Image src={`v2/art/legacy-${year}`} width="540px" height="540px" />
            <Content>
              <h3><span>{title}</span><span>{`${dates} • Portland Oregon`}</span></h3>
              <article>
                <h4>Highlights</h4>
                <ul>{highlights.map((point) => <li key={point}>{point}</li>)}</ul>
                <h4>Big Surprise</h4>
                <p>{surprise}</p>
                <h4>Speaker Moment</h4>
                <p className="speaker">{moment}{speakerName && <span>{speakerName}</span>}</p>
              </article>
            </Content>
          </Wrap>
        </Shell>
      );
    }
    return <div />
  }
}
