// @flow
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import C from '../constants';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: C.graphUrl,
  }),

});

export default client;
