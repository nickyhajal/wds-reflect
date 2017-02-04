import { PropTypes } from 'react';

const types = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  auth: PropTypes.shape({
    me: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
  actions: PropTypes.objectOf(PropTypes.func),
  location: PropTypes.objectOf(PropTypes.string),
  app: PropTypes.shape({
    navOpen: PropTypes.bool,
    assets: PropTypes.shape({
      interests: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
export default types;
