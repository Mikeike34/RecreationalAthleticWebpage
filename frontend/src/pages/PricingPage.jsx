import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
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

            {/*Pricing*/}

            <Flex
                minH = '50vh'
                align = 'center'
                justify = 'center'
                bg = {offWhite}
            >
                <Box
                    bg = {pink}
                    mt = '30px'
                    borderRadius = '12px'
                    overflow = 'hidden'
                    minH = {{base: '400px', md: '500px'}}
                    minW = {{base: '300px', md: '400px'}}
                >
                    <VStack py = '50%'>
                        <Heading color = 'black' pb = '10px'>Pricing:</Heading>
                        <Text fontSize = 'lg' color = 'black'>Three Week Classes:</Text>
                        <Text color = 'black' pb = '30px'>$30</Text>
                        <Text fontSize = 'lg' color = 'black'>Four Week Classes:</Text>
                        <Text color = 'black'>$40</Text>
                    </VStack>

                </Box>
            </Flex>

            {/*Footer (contact Info) */}
            <Box
                bg = {offWhite}
                h = {{base: '400px', md: '700px'}}
                display = 'flex'
                alignItems= 'center'
                justifyContent = 'center'
            >
                <Image objectFit = 'contain' w = {{base: '90%', md: '60%'}} h = 'auto'  src = '..\images\kidsplayingsports.png' />
            </Box>
            
            {/*Contact */}
            <Box 
                bg = {pink} 
                display = 'flex' 
                justifyContent={'center'} 
                p = '10px'
            >
                <Flex>
                    <VStack>
                        <Heading color = 'black'>Contact</Heading>
                        <HStack>
                            <Text pb = '20px' color = 'black'>Email: Fitness2143@gmail.com</Text>
                            <Text></Text>
                        </HStack>

                    </VStack>
                </Flex>
            </Box>
        </VStack>
    </Flex>
  )
}

export default PricingPage