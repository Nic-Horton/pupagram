import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

function FeedPosts() {
  const {isLoading, posts} = useGetFeedPosts();

  

  return (
    <Container maxW={"container.sm"} py={10} px={2}>

      {isLoading && [0,1,2].map((_,index) => (
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10}/>
            <VStack gap={2} alignItems={"flex-start"} justifyContent={"center"}>
              <Skeleton height={'10px'} w={"200px"}/>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"400px"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

    {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
    {!isLoading && posts.length === 0 && (
				<NoFeedPosts/>
			)}
    </Container>
  )
}

export default FeedPosts

const NoFeedPosts = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={5} color={"#ec9d59"}>
			<Text fontSize={"2xl"}>Looks like you aren&apos;t following any furiends 🐶</Text>
		</Flex>
	);
};