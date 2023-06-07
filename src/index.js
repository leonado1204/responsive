import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";

import { Provider } from 'react-redux'
import App from "App";
// Soft UI Context Provider
import { AuthProvider } from 'context/auth';
import { QueryClient, QueryClientProvider } from 'react-query';
// react-perfect-scrollbar component
import PerfectScrollbar from "react-perfect-scrollbar";
import store from './store/store'
import history from 'store/history';

// react-perfect-scrollbar styles
import "react-perfect-scrollbar/dist/css/styles.css";
const queryClient = new QueryClient();
ReactDOM.render(
  // <BrowserRouter>
    <Provider store={ store }>
      <BrowserRouter >
        <QueryClientProvider client={queryClient}>
            <PerfectScrollbar>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </PerfectScrollbar>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
