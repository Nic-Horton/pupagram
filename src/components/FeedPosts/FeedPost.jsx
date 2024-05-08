import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Image, Flex } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

function FeedPost({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  
  return (
    <>
      <PostHeader post={post} creator={userProfile}/>
      <Flex my={2} borderRadius={4} overflow={"hidden"} justifyContent={"center"} alignItems={"center"}>
        <Image src={post.imageURL} alt={"Feed post image"}/>
      </Flex>
      <PostFooter post={post} creator={userProfile}/>
    </>
  )
}

export default FeedPost