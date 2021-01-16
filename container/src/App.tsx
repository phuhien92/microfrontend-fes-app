import React, {lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { SimpleGrid, Text, ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
import HeaderWrapper from './components/Header/HeaderWrapper';

const App = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Suspense fallback={<div>loading ...</div>}>
        <HeaderWrapper/>
        <Switch>
          <Route exact path="/cart"></Route>
          <Route exact path="/">
            <MarketingLazy/>
          </Route>
        </Switch>
      </Suspense>
    </ChakraProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
