import React from 'react';
import { useProxy } from 'valtio';
import store from 'container/store';
import { Box } from '@chakra-ui/react';

const MiniCart = () => {
    const {cart} = useProxy(store);
    console.log(cart)
    return (
        <Box>
            Cart Items {cart.length}
        </Box>
    )
}

export default MiniCart;