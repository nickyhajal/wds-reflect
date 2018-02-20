import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pages from '../../core/pages';

const Pageloader = ({ app }) => {
  let page = 'home';
  const uri = window.location.pathname.substr(1);

  if (uri.length) {
    if (uri.indexOf('~') === 0) {
      page = 'profile';
    } else {
      const { pages: remotePages } = app.assets;
      if (remotePages) {
        const contentPages = remotePages.map(r => r.slug);
        page = uri.replace(/-/g, '__');
        if (contentPages.includes(uri)) {
          page = 'contentPage';
        }
        else if (pages[page] === undefined) {
          page = 'page404';
        }
      }
      else { page = false; }
    }
  }
  return (
    page &&
    <div>
      {React.createElement(pages[page])}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

export default connect(mapStateToProps)(Pageloader);
