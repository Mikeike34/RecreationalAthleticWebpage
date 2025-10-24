import { Box, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react'
import Navbar from '@/components/Navbar';

const PricingPage = () => {

     const blue = '#afd6e6';
    const orange = '#e88f25';
    const pink = '#e2a7d0';
    const offWhite = '#f7f5e7';

  return (
    <Flex
        minH = '100vh'
        align = 'center'
        justify = 'center'
        bg = {offWhite}
    >
        <VStack
            flexDir = 'column'
            w = '100%'
            align = 'stretch'
            spacing = {{base: 8, md: 16}}
        >
            {/*Header*/}
            <Box pt = '10px'>
                <HStack justify = 'center'>
                    <Heading
                        fontWeight = 'bold'
                        fontSize = '2xl'
                        color = {orange}
                    >
                        MINI
                    </Heading>
                    <Heading
                        fontWeight = 'bold'
                        fontSize = '2xl'
                        color = 'black'
                    >
                        SPORTS SKILLS
                    </Heading>
                </HStack>
                <Navbar />
            </Box>
        </VStack>
    </Flex>
  )
}

export default PricingPage