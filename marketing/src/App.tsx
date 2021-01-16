import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Landing from './components/Landing';
import {ChakraProvider } from '@chakra-ui/react';

export default ({history}) => {
    return (
        <ChakraProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Landing/>
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    )
}