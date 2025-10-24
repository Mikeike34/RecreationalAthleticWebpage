import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '@/components/Navbar'

const HomePage = () => {

    const blue = '#afd6e6';
    const orange = '#e88f25';
    const pink = '#e2a7d0';
    const offWhite = '#f7f5e7';


  return (
    <Flex minH = '100vh' align = 'center' justify = 'center' bgColor = {offWhite} >
        <VStack 
            flexDir = {'column'} 
            w= '100%' 
            align = 'stretch' 
            spacing = {{base: 8, md: 16}}
            overflowX = 'hidden'
        >
            {/*Header Section */}
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

            {/* Title and Picture */}
            <Box pb = {{base: '80px', md: '112px'}} as = 'section'>
                <Box  
                    bg = {offWhite} 
                    pt = {{base: '40px', md: '90px'}}
                    pb = {{base: '40px', md: '60px'}} 
                    px = {{base: '24px', md: '120px', lg: '200px'}}
                >
                    <Flex
                        direction = {{ base: 'column', md: 'row'}}
                        justify = 'space-between'
                        align = 'center'
                        gap = {{base: '32px', md: '60px'}}
                        textAlign = {{base: 'center', md: 'left'}}
                    >
                        <VStack
                            align = {{ base: 'center', md: 'flex-start'}}
                            spacing = {2}
                        >
                            <Heading 
                                fontWeight = '800' 
                                fontSize = {{base: '32px', md: '48px'}} 
                                color = 'black'
                                py = {{base: '10px', sm: '20px', md: '20px'}}
                            >
                                Coach Janet
                            </Heading>
                            <Box bg = {orange} borderRadius = '20px'>
                                <Heading 
                                    px = '10px' 
                                    py = '5px' 
                                    fontWeight = '500' 
                                    fontSize = {{base: '18px', md: '24px'}} 
                                    color = {offWhite}
                                >
                                    Physical Education
                                </Heading>
                            </Box>
                        </VStack>

                        <Image 
                            src = '..\images\headerPhoto.jpg'
                            boxSize = {{base: '220px', sm: '260px', md: '400px'}}
                            borderRadius = 'full'
                            objectFit = 'cover'
                        />
                    </Flex>
                </Box>
            </Box>

            {/*Blue banner section*/}
            <Flex justify = 'center'>
                <Box 
                    w = '100%' 
                    py = {{base: '40px', md: '60px'}} 
                    bg = {blue}  
                    textAlign = 'center'
                >
                    <Text 
                        fontWeight = 'semibold' 
                        fontSize = {{base: 'lg', ms: '2xl', md: '4xl', lg: '5xl'}} 
                        color = 'black' 
                        letterSpacing = '.2em' 
                        wordSpacing={'.3em'}
                    >
                        It's Playtime With Purpose!
                    </Text>
                </Box>
            </Flex>

            {/*Mission Statement section*/}
            <Flex justify = 'center'>
                <Box
                    w = '100%'
                    maxW = '1200px'
                    px = {{base: '24px', sm: '40px', md: '100px', lg: '200px'}}
                    py = {{base: '40px', md: '80px'}}
                    textAlign = 'center'
                >
                    <VStack spacing = {4}>
                        <Heading 
                            fontWeight = 'bold' 
                            fontSize = {{base: 'xl', md: '3xl'}} 
                            color = {orange}
                        >
                            My Goal
                        </Heading>
                        <Text 
                            color = 'black' 
                            fontSize = {{base: 'sm', md: 'md'}}
                            lineHeight = '1.6'
                        >
                            This is the perfect class for your little athlete to learn the basic skills of the sport in a fun-filled environment! 
                            All participants will learn how to play the game - whether its kicking a goal in soccer, making a basket on the court, or even hitting the ball off the tee. 
                            After doing these classes, your athlete will know what sports they want to play!
                        </Text>
                    </VStack>

                </Box>
            </Flex>

            {/*Sports balls divider */}
            <Flex justify = 'center' w = '100%'>
                <HStack 
                    justify = 'space-evenly'
                    align = 'center'
                    w = '100%'
                    maxW = '600px' 
                    py = {{base: '20px', md: '40px'}} 
                >
                    <Image src = '..\images\Soccerball.png' boxSize = {{base: '75px', md: '105px'}} />
                    <Image src = '..\images\Basketball.png' boxSize = {{base: '60px', md: '90px'}} />
                    <Image src = '..\images\Baseball.png' boxSize = {{base: '60px', md: '90px'}} />
                </HStack>   
            </Flex>

            {/*Profile Section*/}
            <Box
                bg = {orange}
                w = '100%'
                py = {{base: '40px', md: '80px'}}
                px = {{base: '16px', md: '80px', lg: '100px'}}
            >
                <Flex
                    justify = 'center'
                    align = 'center'
                    direction = {{base: 'column', md: 'column', lg: 'row'}}
                    gap = {{base: '20px', md: '40px', lg: '60px'}}
                    textAlign = {{base: 'center', md: 'center', lg: 'left'}}
                >
                    <Box
                        bg = {offWhite}
                        borderRadius = '12px'
                        p = '10px'
                        zIndex = '2'
                        boxShadow = 'md'
                        flexShrink={0}
                    >
                        <Image 
                            src = '..\images\Janet.jpg'
                            w = {{ base: '200px', sm: '250px', md: '400px'}}
                            h = {{base: '200px',sm: '250px', md: '400px'}}
                            objectFit = 'cover'
                            borderRadius = '8px'
                        />
                    </Box>
                    <Box
                        bg = {offWhite}
                        borderRadius = '12px'
                        py = {{base: '16px', md: '35px'}}
                        px = {{base: '16px', md: '50px'}}
                        maxW = {{base: '95%', md: '60%'}}
                        zindex = {1}
                        left = {{base: '0', md: '0', xl: '-80px'}}
                        position = 'relative'
                        boxShadow = 'md'
                    >
                        <VStack>
                            <Heading
                                color = 'black'
                            >
                                Meet Coach Janet
                            </Heading>
                            <Text
                                color = 'black'
                                fontSize = {{base: 'md', md: 'lg'}}
                                lineHeight = '1.6'
                                textAlign = {{base: 'center', md: 'left'}}
                            >
                                The ultimate fun-maker on the field! 
                                With her endless energy and big smile, Coach Janet helps 
                                young athletes discover just how exciting being active can be. 
                                Whether it's trying something new for the first time or if you 
                                have some experience already, she makes every activity feel like an adventure.
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>

            {/* Footer with Contact Information */}
                {/* Spacer */}
            <Box
                bg = {offWhite}
                py = {{base: '60px', md: '100px'}}
                display = 'flex'
                alignItems= 'center'
                justifyContent = 'center'
            >
                <Image 
                    objectFit = 'contain' 
                    w = {{base: '90%', md: '70%', lg: '50%'}} 
                    src = '..\images\kidsplayingsports.png' 
                />
            </Box>

            {/*Contact */}
            <Box 
                bg = {pink}
                py = '20px' 
                textAlign = 'center'
            >
                <VStack spacing = {2}>
                    <Heading 
                        color = 'black'
                        fontSize = {{base: 'lg', md: 'xl'}}
                    >
                        Contact
                    </Heading>
                        <Text 
                            color = 'black'
                        >
                            Email: Fitness2143@gmail.com
                        </Text>
                </VStack>
            </Box>
        </VStack>
    </Flex>
  )
}

export default HomePage