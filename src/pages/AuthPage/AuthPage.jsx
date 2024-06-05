import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone image" />
          </Box>
          
          {/* Right hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            
            {/* Playstore and Microsoft icons */}
            <Box textAlign={"center"}>
              <Flex gap={5} justifyContent={"center"}>
                <Image src="/playstore.png" h={"10"} alt="play icon" />
                <Image src="/microsoft.png" h={"10"} alt="microsoft icon" />
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;