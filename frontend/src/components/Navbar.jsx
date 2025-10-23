import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const blue = '#afd6e6';

  return (
    <Box >
        <Flex
            justify = 'center'
            mt = '10px'
        >
            <Box 
                display = 'flex'
                bg = {blue}
                borderRadius = '12px'
                px = '50px'
                py = '3px'
                minW = '50%'
            >
                <HStack justify = 'space-between' align = 'center' w = '100%'>
                    <Text color = 'black'>Home</Text>
                    <Text color = 'black'>About</Text>
                    <Text color = 'black'>Pricing</Text>
                    <Text color = 'black'>Schedule</Text>
                </HStack>
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar