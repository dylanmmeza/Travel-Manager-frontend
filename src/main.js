// @flow

//App is an instance of FusionApp class exported from fusion-react. Responsible for client and server side renderng as well as handeling.

import App from 'fusion-react';
import { FetchToken } from 'fusion-tokens';
import Styletron, { AtomicPrefixToken } from 'fusion-plugin-styletron-react';
import Router from 'fusion-plugin-react-router';

//Redux
import ReactReduxPlugin, { ReduxToken, ReducerToken } from 'fusion-plugin-react-redux';

//RPC
import RPC, { RPCToken, RPCHandlersToken } from 'fusion-plugin-rpc-redux-react';
import { RPCHandlersConfigToken } from 'fusion-plugin-rpc';
import UniversalEvents, { UniversalEventsToken } from 'fusion-plugin-universal-events';

//List of routes
import root from './root';

//reducer
import reducer from './reducers/index';

//Node only import 
let handlers = {};
if (__NODE__) {
  handlers = require('./rpc/index').default;
}

export default () => {
  const app = new App(root);

  //Register Styletron and _ to prevent issue with font awesome 
  app.register(Styletron);
  app.register(AtomicPrefixToken, '__');

  //Register Router
  app.register(Router);

  // RPC and UET dependency 
  app.register(RPCToken, RPC);
  app.register(UniversalEventsToken, UniversalEvents);

  if (__NODE__) {
    //RPC Handler
    app.register(RPCHandlersToken, handlers);

  }


  // Register redux and the global reducer
  app.register(ReduxToken, ReactReduxPlugin);
  app.register(ReducerToken, reducer);

  // Register the fetch token (used under-the-covers by fusion-plugin-rpc)
  if (__BROWSER__) {
    app.register(FetchToken, fetch);
  }

  return app;

}


