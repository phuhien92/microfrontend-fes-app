import { Grid, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import MiniCart from '../MiniCart';

const Header = () => {
    return (
        <React.Fragment>
            <Flex>
                <Box p="2">
                    <Heading size="md">Fallback Pokedex Header</Heading>
                </Box>
                <Spacer/>
                <Box>
                    <MiniCart/>
                </Box>
            </Flex>
        </React.Fragment>
    )
}

export default Header;