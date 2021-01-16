import React from "react";
import { Box } from "@chakra-ui/react";
import { useProxy } from 'valtio';
import ItemCart from "./ItemCard";
import { MFE_BORDER } from "../constants";
import store, {load} from 'container/store';

load();

const Items = () => {
  const { filterItems } = useProxy(store);

  return (
    <Box border={MFE_BORDER}>
      {filterItems.map((item) => (
        <ItemCart
          key={item.id}
          item={item}
        />
      ))}
    </Box>
  );
};

export default Items;
