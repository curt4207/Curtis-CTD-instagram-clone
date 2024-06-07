import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="As a Programer" size={"lg"} src="profilepic.png" />
                <Text fontSize={12} fontWeight={"bold"}>
                    asaprogramer
                </Text>
            </Flex>
        </Flex>
    );
}

export default SuggestedHeader;
