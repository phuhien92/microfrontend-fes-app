import React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useProxy } from "valtio";
import store, {setSearchText} from "container/store"; 
import { MFE_BORDER } from "./../constants";

const Search = () => {
  const { searchText } = useProxy(store);

  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input type="text" value={searchText} onChange={(evt) => setSearchText(evt.target.value)}/>
      </FormControl>
    </Box>
  );
};

export default Search;
