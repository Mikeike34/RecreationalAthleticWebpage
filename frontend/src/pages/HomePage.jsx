import { Box, Button, Card, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Description from '@/components/Description'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about');
    };

  return (
    <Flex minH = '100vh' align = 'center' justify = 'center' bgColor = {'#f4ebe2'}>
        <VStack flexDir = {'column'} w= '100%' align = 'stretch' spacing = {{base: 8, md: 16}}>

            {/*Header Section */}
            <Box pb = {{base: '80px', md: '112px'}} as = 'section'>
                <Box  
                    bg = '#5c92ac' 
                    pt = {{base: '60px', md: '90px'}}
                    pb = {{base: '120px', md: '150px'}} 
                    px = {{base: '16px', md: '32px'}}
                >
                    <VStack>
                        <Heading fontWeight = '800' fontSize = {{base: '32px', md: '48px'}} color = 'black'>Coach Janet</Heading>
                        <Heading fontWeight = '500' fontSize = {{base: '18px', md: '24px'}} color = 'black'>Physical Education</Heading>
                    </VStack>
                </Box>
            </Box>
            <Box w = '100%'>
               <Description /> 
            </Box>
            <Flex justify = 'center'>
                <Box  w = '100vw' minH = '200px' bg = '#f4ebe2'>
                    <HStack justify = 'space-between' margin = {{base: '20px', md: '40px'}} >
                        <Image src = '..\images\Soccerball.png' boxSize = {{base: '80px', md: '120px'}} objectFit = 'cover' />
                        <Image src = '..\images\Basketball.png' boxSize = {{base: '80px', md: '100px'}} objectFit = 'cover' />
                        <Image src = '..\images\Baseball.png' boxSize = {{base: '80px', md: '100px'}} objectFit = 'cover' />
                    </HStack>
                </Box>
            </Flex>

            {/*Pricing card and Coach Profile Card*/}
            <Flex 
                bg = '#f4ebe2' 
                direction = {{base: 'column', md: 'row'}}
                wrap = 'wrap'
                justify = {{base: 'center', md: 'space-between'}}
                align = 'flex-start'
                paddingRight = '20px'
                paddingLeft = '20px'
            >
                {/*Pricing Card*/}
                <Box 
                    m = {{base: '20px', md: '40px'}}
                    maxW = {{base: '90%', md: 'lg'}}
                    w = '100%'
                    bg = '#f4ebe2' 
                    shadow = 'md' 
                    borderRadius = 'lg' 
                    overflow = 'hidden'
                >
                        <Heading fontWeight = '500' fontSize = {{base: '18px', md: '24px'}} color = 'black' margin = '20px' textAlign = 'center'>Pricing</Heading>
                        <Text fontSize = {{base: '16px', md: '20px'}} color = 'black' margin = '10px'>3 week classes: $30</Text>
                        <Text fontSize = {{base: '16px', md: '20px'}} color = 'black' margin = '10px'>4 week classes: $40</Text>
                        <Image src = '..\images\Baseball Player.png' w = '100%' h = '400px' objectFit = 'cover' mx = 'auto' />
                </Box>
                {/*Coach Profile Card*/}
                <Card.Root maxW = {{base: '90%', md: 'lg'}}  overflow= 'hidden' m = {{base: '20px', md: '40px'}} shadow = 'md' bg = '#f5d27c'>
                    <Image src= '..\images\Janet.jpg' w = '100%' h = '400px' objectFit = 'cover' objectPosition='top'/>
                    <Card.Body gap = '2'>
                        <Card.Title color = 'black'>Janet Carbajal</Card.Title>
                        <Card.Description color = 'black'>
                            Meet Coach Janet, the ultimate fun-maker on the field! With her endless energy and big smile, Coach Janet helps young athletes discover just how exciting being active can be. 
                            Whether it's trying something new for the first time or if you have some experience already, she makes every activity feel like an adventure.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer gapt = '2'>
                        <Button 
                            bg  = '#5c92ac' 
                            color = '#f4ebe2' 
                            _hover ={{bg: '	#335584'}} 
                            shadow={'sm'}
                            onClick={handleButtonClick}
                        >
                            About Me
                        </Button>
                    </Card.Footer>
                </Card.Root>

            </Flex>

        </VStack>
    </Flex>
  )
}

export default HomePage