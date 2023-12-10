import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'

function FeedPosts() {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost 
        username= 'Jann'
        img= 'img1.png'
        avatar= 'img1.png'
      />
      <FeedPost 
        username= 'Joe'
        img= 'img2.png'
        avatar= 'img2.png'
      />
      <FeedPost 
        username= 'Jane'
        img= 'img3.png'
        avatar= 'img3.png'
      />
      <FeedPost 
        username= 'John'
        img= 'img4.png'
        avatar= 'img4.png'
      />
    </Container>
  )
}

export default FeedPosts