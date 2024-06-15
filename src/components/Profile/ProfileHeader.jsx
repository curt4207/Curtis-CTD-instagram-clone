import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ProfileHeader = () => {
    return (
        <Flex gap={{base: 4, sm:10}} py={10} direction={{base: "column", sm: "row"}}>
        <AvatarGroup 
        size={{base: "xs", sm: "md"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
        >
        <Avatar name='As a Programer' src='/IMG_E1775.JPG' alt="As a Programer logo"></Avatar>
        </AvatarGroup>
           <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex gap={4} direction={{base: "column", sm:"row"}} justifyContent={{base: "center", sm: "flex-start"}}
            alignItems={"center"}
            w={"full"}>
                <Text fontSize={{base: "sm", md: "lg"}}>
                    Holden_Tudiks81
                </Text>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={"black"} _hover={{bg: "whiteAlpha.800"}} size={{base: "xs", md: "sm"}} >Edit Profile</Button>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
                <Text fontSize={{base: "xs", md: "sm"}}>
                <Text as="span" fontWeight={"bold"} mr={1}>454</Text>
                    Posts
                </Text>
                <Text>
                <Text as="span" fontWeight={"bold"} mr={1}>1149</Text>
                    Followers
                </Text>
                <Text>
                <Text as="span" fontWeight={"bold"} mr={1}>169</Text>
                    Following
                </Text>
            </Flex>
            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}> As a Programer</Text>
            </Flex>
                <Text fontSize={"sm"} >Level up programer skills</Text>
           </VStack>
        </Flex>
    );
}

export default ProfileHeader;
