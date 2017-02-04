import C from '~/constants';
import * as fire from 'firebase';

const config = {
  apiKey: C.fire_key,
  authDomain: `${C.fire_url}.firebaseapp.com`,
  databaseURL: `https://${C.fire_url}.firebaseio.com`,
};
fire.initializeApp(config);
const firedb = fire.database().ref();
export default fire;
export { firedb };

