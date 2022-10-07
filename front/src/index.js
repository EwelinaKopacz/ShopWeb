import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import client from './util/apollo-client';
import { ApolloProvider } from '@apollo/client';
import App from './component/App';

import { Provider } from 'react-redux';
import store from './store';

console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
    </ApolloProvider>
  </React.StrictMode>
);


