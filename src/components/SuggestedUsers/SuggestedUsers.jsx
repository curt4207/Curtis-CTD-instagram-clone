import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
import { Link } from 'react-router-dom';

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
          <Flex alignItems={"center"}
          justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12}
            fontWeight={"bold"}
            color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See all
            </Text>
          </Flex>  
          <SuggestedUser name="Dan doe" followers={1200} avatar="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/10-spawn-90s-comics.jpg" />
          <SuggestedUser name="Axel portter" followers={1000} avatar="https://static.wixstatic.com/media/0f4471_4d64f43b54484647ab29f4040483e7c1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0f4471_4d64f43b54484647ab29f4040483e7c1~mv2.jpg" />
          <SuggestedUser name="Axel portter" followers={1050} avatar="https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8459983-rco031_1650495781.jpg" />
          
          <Box fontSize={12} color={"gray.500"} mt={5}>
            2024 Built By{""}
            {/* Link not working  */}
            <Link href="https://github.com/curt4207" target='blank' color='blue.500' fontSize={14}> Curtis Clayton</Link>
          </Box>
        </VStack>
    );
}

export default SuggestedUsers;
