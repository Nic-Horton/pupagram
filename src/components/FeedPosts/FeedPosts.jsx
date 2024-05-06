import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

function FeedPosts() {
  const [isLoading, setIsLoading] = useState('true');

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1500)
  },[])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,index) => (
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10}/>
            <VStack gap={2} alignItems={"flex-start"} justifyContent={"center"}>
              <Skeleton height={'10px'} w={"200px"}/>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {!isLoading && (
        <>
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
        </>
      )}
      
    </Container>
  )
}

export default FeedPosts