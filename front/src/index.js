import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './util/apollo-client';
import { ApolloProvider } from '@apollo/client';
import App from './component/App/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


