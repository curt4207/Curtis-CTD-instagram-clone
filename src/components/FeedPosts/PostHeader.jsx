import { Avatar, Box, Container, Flex, Text, border } from "@chakra-ui/react";

import React from "react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="IMG_E1775.JPG" alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          asaprogramer
          <Box color={"gray.500"}>1w</Box>
        </Flex>
      </Flex>
      <Box 
      cursor={"pointer"}>
      
        <Text
        fontSize={12}
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{
            color: "white"
        }}
        transition={"0.2s ease-in-out"}
        >Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
