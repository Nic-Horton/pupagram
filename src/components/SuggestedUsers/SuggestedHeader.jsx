import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom";

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="username" size={"lg"} src="/profilepic.png"/>
        <Text fontSize={12} fontWeight={"bold"}>
          username
        </Text>
      </Flex>
      <Link as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"bold"}
        color={"blue.400"}
        style={{textDecoration:"none"}}
        cursor={"pointer"}
        _hover={{color:"white"}}
      >
        Log out
      </Link>
    </Flex>
  )
}

export default SuggestedHeader