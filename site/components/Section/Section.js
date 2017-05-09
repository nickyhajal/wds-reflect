import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import _ from 'lodash';
import cx from 'classnames';
import styles from './Section.css';
import Image from '../Image/Image';
import widther from '../../utils/widther';
import colorize from '../../utils/colorize';
import angler from '../../utils/angler';
import actions from '../../actions';
import is from '../../utils/is';
import fillScreen from '../../utils/fillScreen';

const LocationMap = withGoogleMap(props => {
  if (props.center.lat === undefined) return <div />;
  return (
    <GoogleMap
      defaultZoom={17}
      onMapLoad={props.onLoad}
      options={{ scrollwheel: false, draggable: false, disableDefaultUI: true }}
      defaultCenter={{ lat: +props.center.lat, lng: +props.center.lon }}
    >
      <Marker position={{ lat: props.center.lat, lng: props.center.lon }} />
    </GoogleMap>
  );
});

const renderMap = ({ lat, lon }, ref, mapClip) => {
  const clip = angler(mapClip);
  const css = {
    clipPath: clip,
    WebkitClipPath: clip,
    marginTop: '-60px',
  };
  return (
    <div style={css}>
      <LocationMap
        center={{ lat, lon }}
        onLoad={map => (ref = map)}
        containerElement={
          is.phone()
            ? <div style={{ height: '220px', width: '260px' }} />
            : <div style={{ height: '300px', width: '100%' }} />
        }
        mapElement={
          is.phone()
            ? <div style={{ height: '220px', width: '260px' }} />
            : <div style={{ height: '300px', width: '100%' }} />
        }
      />
    </div>
  );
};
const openVideo = (act, headerVideo) => {
  if (headerVideo) {
    act.setModalData('video', { id: headerVideo });
    act.openModal('video');
  }
};
const renderHeader = ({
  headerImage,
  headerVideo,
  headerClip,
  headerSize,
  headerMapRef,
  headerPosition,
  act,
  headerMap,
}) => {
  let out = '';
  if (headerImage !== undefined) {
    let height = is.phone() ? '300px' : '524px';
    if (headerSize !== undefined) {
      if (headerSize === 'thin') {
        height = '300px';
      }
    }
    height = is.phone() ? '220px' : height;
    const position = headerPosition === undefined ? 'bottom' : headerPosition;
    out = (
      <div styleName="header">
        {headerVideo !== undefined && headerVideo
          ? <button
              styleName="playbtn"
              onClick={() => openVideo(act, headerVideo)}
            />
          : ''}
        {headerMap !== undefined && headerMap
          ? renderMap(headerMap, headerMapRef, headerClip)
          : ''}
        {headerMap === undefined
          ? <Image
              src={headerImage}
              onClick={() => openVideo(act, headerVideo)}
              clip={headerClip}
              width="100%"
              height={height}
              position={position}
              styleName="headerImage"
            />
          : ''}
      </div>
    );
  }
  return out;
};

const Section = props => {
  const p = colorize(props);
  let shellCss = {
    backgroundColor: p.color,
  };
  const contentCss = {
    width: widther(props),
  };
  if (props.clip) {
    const clip = angler(props.clip);
    shellCss.clipPath = clip;
    shellCss.WebkitClipPath = clip;
  }
  if (props.margin) {
    shellCss.margin = props.margin;
  }
  shellCss.overflow = props.overflow;
  if (props.padding) {
    shellCss.padding = props.padding;
  }
  shellCss = _.defaults(props.css, shellCss);
  if (is.mobile()) {
    if (!is.set('width', props.mobile)) {
      contentCss.width = '100%';
    }
    shellCss.paddingRight = '20px';
    shellCss.paddingLeft = '20px';
  }
  const fullScreen = props.fillScreen ? 'fillScreen' : '';
  if (fullScreen) {
    setTimeout(() => {
      fillScreen();
    }, 100);
  }
  return (
    <section
      className={cx(props.className, `section-${props.color}`, fullScreen)}
      styleName="shell"
      style={shellCss}
    >
      {renderHeader(p)}
      {props.bound
        ? <div className="contentainer" style={contentCss}>
            {p.children}
          </div>
        : p.children}
    </section>
  );
};

Section.propTypes = {
  color: PropTypes.string,
  clip: PropTypes.string,
  mobile: PropTypes.objectOf(PropTypes.string),
  margin: PropTypes.string,
  padding: PropTypes.string,
  overflow: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string),
  bound: PropTypes.bool,
};
Section.defaultProps = {
  color: 'white',
  overflow: '',
  mobile: { all: {}, phone: {}, tablet: {} },
  bound: true,
};

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}
export default connect(null, mapDispatchToProps)(CSSModules(Section, styles));
