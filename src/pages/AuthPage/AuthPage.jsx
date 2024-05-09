import { Image, Box, Container, Flex, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} bg={"#0B0B0B"}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left hand side */}
          <Box display={{base:"none", md:"block"}}>
            <Image src="/furiends.png" borderRadius='full'  alt="Phone image"/>
          </Box>
          {/* right hand side */}
          <VStack spacing={4} align={"stretch"} >
            <AuthForm/>
            {/* <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore logo"/>
              <Image src="/microsoft.png" h={10} alt="Microsoft logo"/>
            </Flex> */}
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage