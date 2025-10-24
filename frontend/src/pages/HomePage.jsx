import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const blue = '#afd6e6';
    const orange = '#e88f25';
    const pink = '#e2a7d0';
    const offWhite = '#f7f5e7';


    const navigate = useNavigate();


  return (
    <Flex minH = '100vh' align = 'center' justify = 'center' bgColor = {offWhite} >
        <VStack flexDir = {'column'} w= '100%' align = 'stretch' spacing = {{base: 8, md: 16}}>
            {/*Header Section */}
            <Box pt = '10px'>
                <HStack justify = 'center'>
                    <Heading fontWeight = 'bold' fontSize = '2xl' color = {orange}>MINI</Heading>
                    <Heading fontWeight = 'bold' fontSize = '2xl' color = 'black'>SPORTS SKILLS</Heading>
                </HStack>
            </Box>

            <Navbar />

            {/* Title and Picture */}
            <Box pb = {{base: '80px', md: '112px'}} as = 'section'>
                <Box  
                    bg = {offWhite} 
                    pt = {{base: '60px', md: '90px'}}
                    pb = {{base: '50px', md: '40px'}} 
                    px = {{base: '16px', md: '175px'}}
                >
                    <Flex
                        direction = {{ base: 'column', md: 'row'}}
                        justify = 'space-between'
                        align = 'center'
                        mx = {{base: '24px', md: '200px'}}
                        gap = {{base: '32px', md: '0'}}
                    >
                        <VStack
                            align = {{ base: 'center', md: 'flex-start'}}
                            spacing = {2}
                            textAlign = {{base: 'center', md: 'left'}}
                        >
                            <Heading fontWeight = '800' fontSize = {{base: '32px', md: '48px'}} py = {{base: '5px', md: '10px'}} color = 'black'>Coach Janet</Heading>
                            <Box bg = {orange} borderRadius = '20px'>
                                <Heading px = '10px' py = '5px' fontWeight = '500' fontSize = {{base: '18px', md: '24px'}} color = {offWhite}>Physical Education</Heading>
                            </Box>
                        </VStack>

                        <Image 
                            src = '..\images\headerPhoto.jpg'
                            boxSize = {{base: '250px', md: '450px'}}
                            borderRadius = 'full'
                            objectFit = 'cover'
                        />
                    </Flex>
                </Box>
            </Box>
            {/*Blue banner section*/}
            <Flex justify = 'center'>
                <Box display = 'flex' w = '100vw' minH = '150px' bg = {blue}  alignItems = 'center' justifyContent={'center'}>
                    <Text 
                        fontWeight = 'semibold' 
                        fontSize = {{base: 'xl', md: '5xl'}} 
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
                    w = '100vw'
                    minH = '300px'
                    bg = {offWhite}
                    display = 'flex'
                    alignItems = 'center'
                    justifyContent= 'center'
                    px = {{base: '50px', md: '500px'}}
                >
                    <VStack>
                        <Heading fontWeight = 'bold' fontSize = {{base: 'lg', md: '3xl'}} color = {orange}>My Goal</Heading>
                        <Text color = 'black' textAlign= 'center'>
                            This is the perfect class for your little athlete to learn the basic skills of the sport in a fun-filled environment! 
                            All participants will learn how to play the game - whether its kicking a goal in soccer, making a basket on the court, or even hitting the ball off the tee. 
                            After doing these classes, your athlete will know what sports they want to play!
                        </Text>
                    </VStack>

                </Box>
            </Flex>

            {/*Sports balls divider */}
            <Flex justify = 'center'>
                <Box  w = '100vw' minH = '200px' bg = {offWhite}>
                    <HStack justify = 'space-between' margin = {{base: '20px', md: '40px'}} >
                        <Image src = '..\images\Soccerball.png' boxSize = {{base: '80px', md: '120px'}} objectFit = 'cover' />
                        <Image src = '..\images\Basketball.png' boxSize = {{base: '80px', md: '100px'}} objectFit = 'cover' />
                        <Image src = '..\images\Baseball.png' boxSize = {{base: '80px', md: '100px'}} objectFit = 'cover' />
                    </HStack>
                </Box>
            </Flex>

            {/*Profile Section*/}
            <Box
                bg = {orange}
                w = '100vw'
                py = {{base: '40px', md: '80px'}}
                px = {{base: '16px', md: '80px'}}
            >
                <Flex
                    justify = 'center'
                    align = 'center'
                    direction = {{base: 'column', md: 'row'}}
                    gap = {{base: '20px', md: '0px'}}
                    position = 'relative'
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
                            w = {{ base: '200px', md: '400px'}}
                            h = {{base: '200px', md: '400px'}}
                            objectFit = 'cover'
                            objectPosition = 'center'
                            borderRadius = '8px'
                        />
                    </Box>
                    <Box
                        bg = {offWhite}
                        borderRadius = '12px'
                        p = {{base: '16px', md: '32px'}}
                        maxW = {{base: '100%', md: '60%'}}
                        position = 'relative'
                        left = {{base: '0', md: '-40px'}}
                        zIndex = '1'
                        boxShadow = 'md'
                        display = 'flex'
                        alignItems = 'center'
                        justifyContent= 'center'
                    >
                        <VStack>
                            <Heading
                                color = 'black'
                            >
                                Meet Coach Janet
                            </Heading>
                            <Text
                                color = 'black'
                                fontSize = {{base: '16px', md: '18px'}}
                                lineHeight = '1.6'
                                textAlign = 'left'
                                maxW = {{base: '100%', md: '60%'}}
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
                h = {{base: '400px', md: '700px'}}
                display = 'flex'
                alignItems= 'center'
                justifyContent = 'center'
            >
                <Image objectFit = 'contain' w = {{base: '90%', md: '60%'}} h = 'auto'  src = '..\images\kidsplayingsports.png' />
            </Box>

            {/*Contact */}
            <Box bg = {pink} display = 'flex' justifyContent={'center'} p = '10px'>
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

export default HomePage