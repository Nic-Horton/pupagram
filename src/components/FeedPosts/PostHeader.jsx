import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { timeAgo } from "../../utils/timeAgo"
import useFollowUser from "../../hooks/useFollowUser"

function PostHeader({ post, creator}) {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy)

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
      {creator ? (
					<Link to={`/${creator.username}`}>
						<Avatar src={creator.profilePicURL} alt='user profile pic' size={"sm"} />
					</Link>
				) : (
					<SkeletonCircle size='10' />
				)}

      <Flex fontSize={12} fontWeight={"bold"} gap='2'>
					{creator ? (
						<Link to={`/${creator.username}`}>{creator.username}</Link>
					) : (
						<Skeleton w={"100px"} h={"10px"} />
					)}

					<Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
			</Flex>

      </Flex>
      <Box cursor={"pointer"}>
        <Button 
        fontSize={12} 
        bg={"transparent"}
        color={"blue.500"} 
        fontWeight={"bold"} 
        _hover={{color:"white"}}
        transition={"0.2s ease-in-out"}
        onClick={handleFollowUser}
				isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  )
}

export default PostHeader