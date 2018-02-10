import { ApolloClient, createNetworkInterface } from 'react-apollo';

import C from '../constants';

const apollo = new ApolloClient({
  networkInterface: createNetworkInterface({
    opts: {
      credentials: 'include',
    },
    uri: C.graphUrl,
  }),
});

export default apollo;
