import { Avatar, Flex, Text } from '@chakra-ui/react'

const Comment = ({ comment }) => {
  return (
    <Flex gap={4}>
      {/* <Avatar src={profilePic} name={username} size={"sm"}/> */}

      <Flex direction={"column"}>
        <Text fontWeight={"bold"} fontSize={12}>
          {/* {username} */}
        </Text>

        <Text fontSize={14}>
          {comment.comment}
        </Text>

        <Text fontSize={12} color={'gray'}>
          {/* {createdAt} */}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Comment