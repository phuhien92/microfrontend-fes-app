import React from 'react';
import Search from './Search';
import Items from './Items';
import { SimpleGrid, Box } from '@chakra-ui/react';
import DataComponent from 'container/DataComponent';
import Cart from './Cart';

const Landing = () => {
    return (
        <SimpleGrid columns={[1,2]} spacing="15px">
            <Box>
                <Search/>
                <DataComponent>{({cart}) => (<Cart cart={cart}/>)}</DataComponent>
            </Box>
            <Box>
                <Items/>
            </Box>
        </SimpleGrid>
    )
}

export default Landing;