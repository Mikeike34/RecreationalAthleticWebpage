import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Navbar from '@/components/Navbar';

const Schedule = () => {

    const blue = '#afd6e6';
    const orange = '#e88f25';
    const pink = '#e2a7d0';
    const offWhite = '#f7f5e7';

  return (
    <Flex
        minH = '100%' 
        align = 'center' 
        justify = 'center'
        bgColor = {offWhite}
    >
        <VStack
            flexDir = 'column' 
            w = '100%'
            align = 'stretch'
            spacing = {{base: 8, md: 16}}
        >
            {/*Header*/}
            <Box pt = '10px' >
                <HStack justify = 'center'> 
                    <Heading 
                        fontWeight = 'bold' 
                        fontSize = {{base: 'xl', md: '2xl'}} 
                        color = {orange}
                    >
                        MINI
                    </Heading>
                    <Heading 
                        fontWeight = 'bold' 
                        fontSize = {{base: 'xl', md: '2xl'}} 
                        color = 'black'
                    >
                        SPORTS SKILLS
                    </Heading>
                </HStack>
                <Navbar />
            </Box>
            {/* Title and Image*/}
            
            <Box pb = {{base: '60px', md: '100px'}} as = 'section'>
                <Box  
                    bg = {offWhite} 
                    pt = {{base: '40px', md: '90px'}}
                    pb = {{base: '40px', md: '60px'}} 
                    px = {{base: '20px', md: ' 60px', lg: '300px'}}
                >
                    <Flex
                        direction = {{ base: 'column', md: 'column', xl: 'row'}}
                        justify = 'space-between'
                        align = 'center'
                        mx = 'auto'
                        gap = {{base: 8, md: 16}}
                        w = '100%'
                    >
                        <Image 
                            src = '..\images\pickleball.jpg'
                            boxSize = {{base: '250px', sm: '300px', md: '400px', lg: '450px'}}
                            borderRadius = '12px'
                            objectFit = 'cover'
                        />
                        <VStack
                            align = {{ base: 'center', md: 'flex-start'}}
                            spacing = {2}
                            textAlign = {{base: 'center', md: 'left'}}
                            pr = {{xl: '300px'}}
                        >
                            <Heading 
                                fontWeight = '800' 
                                fontSize = {{base: '28px', sm: '32px', md: '40px', lg: '48px'}}
                                py = {{base: '5px', md: '10px'}} 
                                color = 'black'
                            >
                                Schedule
                            </Heading>
                            <Box bg = {orange} borderRadius = '20px'>
                                <Heading 
                                    px = '10px' 
                                    py = '5px' 
                                    fontWeight = '500' 
                                    fontSize = {{base: '16px', sm: '18px', md: '24px'}}
                                    color = {offWhite}
                                >
                                    Physical Education
                                </Heading>
                            </Box>
                        </VStack>
                        
                    </Flex>
                </Box>
            </Box>

            {/*Schedule*/}
            <Flex justify = 'center' w = '100%'>
                <Box
                    bg = {offWhite}
                    w = '100%'
                    display= 'flex'
                    justifyContent='center'
                    mb = {{base: '30px', md: '50px'}}
                >
                    <HStack
                        direction = 'row'
                        flexWrap = 'wrap'
                        w = {{base: '100%', md: '90%', lg: '70%'}}
                        spacing = {{base: 4, md: 6, lg: 8}}
                        justify = 'center'
                        align = 'stretch'
                    >
                        <Box
                            bg = {blue}
                            borderRadius = '12px'
                            h = 'auto'
                            flex = {{base: '1 1 100%', md: '1 1 30%'}}
                            display = 'flex'
                            alignItems = 'center'
                            justifyContent = 'center'
                            p = '10px'
                            mx = {2}                           
                        >
                            <VStack my = '20px' textAlign = {{base: 'center', md:'left'}}>
                                <Heading color = 'black'>Monday Mornings</Heading>
                                <Text color = 'black'>10:00 A.M. - 10:45 A.M. </Text>
                                <Heading color = 'black'>Soccer</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>October 6th - 20th</Text>
                                <Text color = 'black'>January 12th - 26th</Text>

                                <Heading color = 'black'>Basketball</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>November 3rd - 17th</Text>
                                <Text color = 'black'>February 2nd - 23rd</Text>

                                <Heading color = 'black'>T - Ball</Heading>
                                <Text color = 'black'>(4 Weeks)</Text>
                                <Text color = 'black'>December 1st - 22nd</Text>
                                <Text color = 'black'>March 2nd - 23rd</Text>
                            </VStack>
                        </Box>
                        <Box
                            bg = {pink}
                            borderRadius = '12px'
                            h = 'auto'
                            flex = {{base: '1 1 100%', md: '1 1 30%'}}
                            display = 'flex'
                            alignItems = 'center'
                            justifyContent = 'center'
                            p = '10px'
                            mx = {2}                             
                        >
                            <VStack my = '20px' textAlign = {{base: 'center', md:'left'}}>
                                <Heading color = 'black'>Monday Afternoon</Heading>
                                <Text color = 'black'>4:00 P.M. - 4:45 P.M. </Text>
                                <Heading color = 'black'>Soccer</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>October 6th - 20th</Text>
                                <Text color = 'black'>January 12th - 26th</Text>

                                <Heading color = 'black'>Basketball</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>November 3rd - 17th</Text>
                                <Text color = 'black'>February 2nd - 23rd</Text>

                                <Heading color = 'black'>T - Ball</Heading>
                                <Text color = 'black'>(4 Weeks)</Text>
                                <Text color = 'black'>December 1st - 22nd</Text>
                                <Text color = 'black'>March 2nd - 23rd</Text>
                            </VStack>
                        </Box>
                        <Box
                            bg = {orange}
                            borderRadius = '12px'
                            h = 'auto'
                            flex = {{base: '1 1 100%', md: '1 1 30%'}}
                            display = 'flex'
                            alignItems = 'center'
                            justifyContent = 'center'
                            p = '10px'
                            pt = '20px'
                            pb = '20px'
                            mx = {2}                           
                        >
                            <VStack my = '20px' textAlign = {{base: 'center', md:'left'}}>
                                <Heading color = 'black'>Tuesday Morning</Heading>
                                <Text color = 'black'> 10:00 A.M. - 10:45 A.M. </Text>
                                <Heading color = 'black'>T - Ball</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>October 7th - 21th</Text>
                                <Text color = 'black'>January 13th - 27th</Text>

                                <Heading color = 'black'>Soccer</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>November 4th - 18th</Text>
                                <Text color = 'black'>February 3rd - 24rd</Text>

                                <Heading color = 'black'>Basketball</Heading>
                                <Text color = 'black'>(3 Weeks)</Text>
                                <Text color = 'black'>December 2nd - 16th</Text>
                                <Text color = 'black'>March 3rd - 24th</Text>
                            </VStack>

                        </Box>
                    </HStack>
                </Box>
            </Flex>

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

export default Schedule