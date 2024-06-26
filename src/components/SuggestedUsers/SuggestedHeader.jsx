import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="As a Programer" size={"lg"} src="profilepic.JPG" />
                <Text fontSize={12} fontWeight={"bold"}>
                    asaprogramer
                </Text>
            </Flex>
            <Link
            as={RouterLink}
            to={"/auth"}
            fontSize={14}
            fontWeight={"medium"}
            style={{textDecoration: "none"}}
            color={"blue.400"} cursor={"pointer"}> Log Out</Link>
        </Flex>
    );
}

export default SuggestedHeader;
