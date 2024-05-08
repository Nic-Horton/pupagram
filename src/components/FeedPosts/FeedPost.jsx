import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

function FeedPost({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  
  return (
    <>
      <PostHeader post={post} creator={userProfile}/>
      <Box borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"Feed post image"}/>
      </Box>
      <PostFooter post={post} creator={userProfile}/>
    </>
  )
}

export default FeedPost