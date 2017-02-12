import { PropTypes } from 'react';

const types = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  auth: PropTypes.shape({
    me: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
  checkout: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }).isRequired,
  funcOrBool: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  stringOrBool: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  numOrBool: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  actions: PropTypes.objectOf(PropTypes.func),
  location: PropTypes.objectOf(PropTypes.string),
  app: PropTypes.shape({
    navOpen: PropTypes.bool,
    assets: PropTypes.shape({
      interests: PropTypes.arrayOf(PropTypes.object),
      questions: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
export default types;
