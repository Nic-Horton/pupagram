import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers"

function SuggestedUsers() {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers()

  if(isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}> 
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © {new Date().getFullYear()} Built By{" "}
        <Link href="https://github.com/Nic-Horton" target="_blank" color={"blue.500"} fontSize={14}>
          Nic Horton
        </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers