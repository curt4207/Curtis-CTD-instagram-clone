import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  border,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setISLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setISLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((item, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            img="IMG_E1775.JPG"
            username="asaprogramer"
            avatar="IMG_E1775.JPG"
          />
          <FeedPost img="img1.png" username="Burkao" avatar="img1.png" />
          <FeedPost img="img2.png" username="josh" avatar="img2.png" />
          <FeedPost img="img3.png" username="janedoe" avatar="img3.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
