import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Description = () => {
  return (
    <Box 
        maxW = '994px' 
        margin = 'auto' 
        mt = {{base: '-180px', md:'-256px'}} 
        boxShadow= 'md'
        borderRadius = '12px'
        overflow = 'hidden'  
    >
        <Flex direction = {{base: 'column', md: 'row'}}>
            <Box 
                bg = '#f5d27c' pl = '40px' 
                flex = {{base: '100%', md: '1'}}
                p = {{base: '20px', md: '40px'}}
                display = 'flex'
                alignItems = 'center'
                justifyContent = 'center'
               
            >
                <Heading as = 'h3' fontSize = {{base: '20px', md: '40px'}} m = '0' color = 'black' lineHeight = '1.3' textAlign = 'center'>It's Playtime With Purpose!</Heading>
            </Box>
            <Box 
                bg = '#f4ebe2' 
                flex = {{base: '100%', md: '2'}}
                p = {{base: '20px', md: '60px'}}
                fontSize = {{base: '16px', md: '18px'}}
            >
                <Text color = 'black'>
                    This is the perfect class for your little athlete to learn the basic skills of the sport in a fun-filled environment! 
                    All participants will learn how to play the game - whether its kicking a goal in soccer, making a basket on the court, or even hitting the ball off the tee. 
                    After doing these classes, your athlete will know what sports they want to play!
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Description