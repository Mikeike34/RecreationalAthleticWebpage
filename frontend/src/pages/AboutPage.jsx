import { Box, Flex, Heading, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Navbar from '@/components/Navbar';

const AboutPage = () => {

    const blue = '#afd6e6';
    const orange = '#e88f25';
    const pink = '#e2a7d0';
    const offWhite = '#f7f5e7';

  return (
    <Flex
        minH = '100%'
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

            {/*About*/}
            <Flex 
                direction = {{base: 'column', xl: 'row'}}
                gap = {{base: 6, md: 8, lg: 12}}
                justify = 'center'
                align = 'center'
                w = '100%'
                px = {{base: 4, md: 10, xl: 20}}
                py = {{base: 8, md: 12, xl: 16}}
            >
                <Box
                    bg = {pink}
                    px = '10px'
                    py = '10px'
                    borderRadius = '12px'
                    overflow = 'hidden'
                    order = {{base: 1, lg: 1}}
                >
                <Image 
                    src = '\Class.jpg'
                    boxSize = {{base: '350px', lg: '500px'}}
                />
                </Box>
                <Box
                    bg = {orange}
                    px = '10px'
                    py = '10px'
                    borderRadius = '12px'
                    overflow = 'hidden'
                    order = {{base: '3', xl: '2'}}
                >
                    <Image 
                        src = '\running.jpg'
                        boxSize = {{base: '350px', lg: '500px'}}
                    />

                </Box>


                <Box 
                    bg = {blue}
                    p = {{base: 4, md: 6, xl: 8}}
                    borderRadius = '12px'
                    flex = {{lg: 2}}
                    order = {{base: 2, lg: 2}}
                    textAlign = {{base: 'center', lg: 'left'}}
                >
                    <VStack
                        pt = '20px'
                        pb = '20px'
                        mx = '15%'
                        display = 'flex'
                        align = {{base: 'center', lg: 'flex-start'}}
                    >
                        <Heading color = 'black' >The Community:</Heading>
                        <Text color = 'black'>
                            I have lived in Murrieta for the past 35 years.
                            The Murrieta community has been a blessing to me 
                            and being involved in supporting and encouraging physical 
                            exercise for families in this community has shown me 
                            how much our kids and families love it here.
                        </Text>
                        <Text color = 'black'>
                            I LOVE my little kids. They are the cutest, sweetest, and most willing to learn. 
                            Kids love being outside for sports and I love that I get to encourage and support 
                            their love to play outside.
                        </Text>
                        <Heading color = 'black'>About Me:</Heading>
                        <Text color = 'black'>
                            I enjoy being active by: <br></br>
                            - Running <br></br>
                            - Power Walking <br></br>
                            - Weight Training <br></br>
                            - Hiking <br></br>
                            - Pickleball
                        </Text>
                        

                        <Heading color = 'black'>Experience:</Heading>
                        <Text color = 'black'>
                            I have over 40 years of experience in the Fitness Industry.
                            I am a certified instructor, CPR certified,
                            and I enjoy going to workshops to stay updated with current fitness trends.
                        </Text>
                        <Text color = 'black'>
                            I have worked in the Murrieta Valley Unified School District teaching 
                            a Physical Education program for Kindergarten through 5th grade for 25 years.
                        </Text>
                        <Text color = 'black' >
                            I have spent 40 years teaching at Fitness Clubs.
                            Presently, I am teaching at Powerhouse Gym located in Murrieta and Menifee.
                        </Text>
                        <Heading color = 'black'>Teaching Through The City:</Heading>
                        <Text color = 'black'>
                            My business came together when The City of Murrieta approached me 18 years ago in need 
                            of a Sports Instructor. I accepted the challenge and have been doing it ever since. 
                        </Text>
                        <Heading color = 'black'>License</Heading>
                        <Text color = 'black'>Business License Number: 22650 </Text>
                    </VStack>
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

export default AboutPage