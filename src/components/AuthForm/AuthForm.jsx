import { Box, VStack, Flex, Text, Image } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth"

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} px={5} pb={5} bg={"black"}>
      <VStack spacing={4}>
        <Image src="/pupagramLogo.png" boxSize='200px' cursor={"pointer"} alt='Instagram'/>
        
        {isLogin ? <Login/> : <Signup/>}

        {/* OR text */}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"}/>
          <Text mx={1} color={"white"}>OR</Text>
          <Box flex={2} h={"1px"} bg={"gray.400"}/>
        </Flex>

        <GoogleAuth prefix={isLogin ? "Log in": "Sign up"}/>

      </VStack>
    </Box>
    
    <Box border={"1px solid gray"} borderRadius={4} py={3} bg={"black"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={() => setIsLogin(!isLogin)} color={"#ec9d59"} cursor={"pointer"}>
          {isLogin ? "Sign Up" : "Log in"}
        </Box>

      </Flex>
    </Box>
  </>
  )
}

export default AuthForm