import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessengerCustomerChat from "react-messenger-customer-chat";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />,
    <MessengerCustomerChat
        pageId="100015216666220"
        appId="701887770874618"
      />
  </React.StrictMode>
);

