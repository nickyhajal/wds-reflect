import React from 'react';
import pages from '../../core/pages';

const Pageloader = () => {
  let page = 'home';
  const uri = window.location.pathname.substr(1);
  if (uri.length) {
    page = uri.replace('-', '__');
    if (pages[page] === undefined) {
      page = 'page404';
    }
  }
  return (
    <div>
      {React.createElement(pages[page])}
    </div>
  );
};

export default Pageloader;
