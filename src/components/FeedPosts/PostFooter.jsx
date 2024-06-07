import React, { useState } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, Text, Button } from '@chakra-ui/react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/contants';

// This is a functional component called PostFooter
const PostFooter = ({username}) => {
  // State variables to track whether post is liked and the number of likes
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  
  // Function to handle like/unlike functionality
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  
 
  return (
    <Box mb={10}>
      {/* Like/Unlike button */}
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2} >
        <Box cursor={"pointer"} fontSize={18} onClick={handleLike}>
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        {/* Comment button */}
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      
      {/* Display number of likes */}
      <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>
      
      {/* Post caption */}
      <Text fontSize="sm" fontWeight={700}>
        {username} {""}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      
      {/* View all comments */}
      <Text fontSize="sm" color={"gray"}>
        View all 1,000 comments
      </Text>
      
      {/*  flex container */}
      <Flex 
      alignItems={"center"}
      gap={2}
      justifyContent={"space-between"}
      w={"full"}
      >
        <InputGroup>
            <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
            <InputRightElement>
                <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{color: "white"}}
                bg={"transparent"}
                >Post</Button>
            </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;