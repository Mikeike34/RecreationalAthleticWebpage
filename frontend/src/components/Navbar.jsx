import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const blue = '#afd6e6';
    const offWhite = '#f7f5e7';

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
                minW = {{base: '50%', md: '75%', lg: '75%', xl: '50%'}}
            >
                <HStack justify = 'space-between' align = 'center' w = '100%'>
                    <Text 
                        color = 'black' 
                        as = {Link} to = '/' 
                        _hover = {{
                            px: '2px',  
                            fontWeight: 'semibold', 
                            bg: offWhite, borderRadius: 'full', 
                            transform: 'scale(1.05)'
                        }}
                        _active = {{
                            px: '2px',
                            fontWeight: 'semibold',
                            bg: offWhite, borderRadius: 'full',
                            transform: 'scale(1.05)'
                        }}
                        transition = 'all 0.5'
                    >
                        Home
                    </Text>
                    <Text 
                        color = 'black' 
                        as = {Link} to = '/about'
                        _hover = {{ 
                            px: '2px', 
                            fontWeight: 'semibold', 
                            bg: offWhite, borderRadius: 'full', 
                            transform: 'scale(1.05)'
                        }}
                        _active = {{
                            px: '2px',
                            fontWeight: 'semibold',
                            bg: offWhite, borderRadius: 'full',
                            transform: 'scale(1.05)'
                        }}
                        transition = 'all 0.5'
                    >
                        About
                    </Text>
                    <Text 
                        color = 'black'
                        as = {Link} to = '/pricing'
                        _hover = {{ 
                            px: '2px', 
                            fontWeight: 'semibold', 
                            bg: offWhite, borderRadius: 'full', 
                            transform: 'scale(1.05)'
                        }}
                        _active = {{
                            px: '2px',
                            fontWeight: 'semibold',
                            bg: offWhite, borderRadius: 'full',
                            transform: 'scale(1.05)'
                        }}
                        transition = 'all 0.5'
                    >
                        Pricing
                    </Text>
                    <Text 
                        color = 'black'
                        as = {Link} to = '/schedule'
                        _hover = {{ 
                            px: '2px', 
                            fontWeight: 'semibold', 
                            bg: offWhite, borderRadius: 'full', 
                            transform: 'scale(1.05)'
                        }}
                        _active = {{
                            px: '2px',
                            fontWeight: 'semibold',
                            bg: offWhite, borderRadius: 'full',
                            transform: 'scale(1.05)'
                        }}
                        transition = 'all 0.5'
                    >
                        Schedule
                    </Text>
                </HStack>
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar