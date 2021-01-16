import React from "react";
import { SimpleGrid, Text, Button, Box } from "@chakra-ui/react";
import {addToCart} from 'container/store';

const ItemCard = ({ item }) => (
  <SimpleGrid
    columns={2}
    templateColumns="2fr 7fr"
    gap={1}
    border="1px"
    borderColor="gray.200"
    padding={3}
    mt={3}
  >
    <div>
      <img src={item.image} alt={`${item.name} logo`} />
    </div>
    <div>
      <Text fontSize="2xl">
        {item.name}
      </Text>
      <Box
        style={{
          display: "inline-block",
          minWidth: "1.5rem",
          minHeight: "0.8rem",
          marginRight: "0.5rem"
        }}
      >
        &nbsp;
      </Box>
      <Box mt={3} align="right">
        <Button onClick={() => addToCart(item)}>Add To Cart</Button>
      </Box>
    </div>
  </SimpleGrid>
);

export default ItemCard;
