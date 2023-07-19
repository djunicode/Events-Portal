import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    Divider,
    InputRightElement,
    Center,
    InputGroup,
    Box,
    Image,
    useToast
} from '@chakra-ui/react';
import Peope from '../utils/people.png'
// import { useToast } from "@chakra-ui/core";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Nav from './Navbar'
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const nav = useNavigate();
    const navifun = () => {
        nav('/login')
    }
    return (
        <>
            <Nav />
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} className='sidelog' color={'white'} justifyContent={'center'} alignItems={'center'} borderRadius={' 0px 15px 15px 0px'} flexDirection={'column'} >
                    <Heading>Hello Friends..</Heading>
                    <br />
                    <Text textAlign={'center'} fontWeight={500} fontSize={'19.62px'} lineHeight={'23.74px'}>"Are you tired of missing out on all the fantastic events?
                        <br />
                        Sign up now and never miss a beat again!"</Text>
                    <br />
                    <br />
                    <Image
                        boxSize='250px'
                        objectFit='cover'
                        src={Peope}
                        alt='People'
                        background={'transparent'}
                    />
                    <br />
                    <Button background={'#FFFFFF'} border={'1.23927px solid #0A2D28'} borderRadius={'48px'} width={'232.98px'} height={'60px'} fontSize={'24.9323px'} color={'black'} className='signupbtn' onClick={navifun}>Sign In</Button>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'5xl'} textAlign={'center'}>Create Account </Heading>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder='Enter your Name' />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>SAP ID</FormLabel>
                            <Input type="number" placeholder='Enter your SAP ID' />
                        </FormControl>
                        <FormControl id="password" >
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'right'}>
                                <Link color={'blue.500'}>Forgot password?</Link>
                            </Stack>
                            <Button backgroundColor={'#CE7777'} color={'white'} _hover={{ color: 'black' }} variant={'solid'} onClick={() =>
                                toast({
                                    title: "Account created.",
                                    description: "We've created your account for you.",
                                    status: "success",
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }>
                                Sign Up
                            </Button>
                            <Flex align="center" direction={'row'}>
                                <Divider />
                                <Text padding="2" textAlign={'center'}>Or Continue With</Text>
                                <Divider />
                            </Flex>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Button
                                    width={12}
                                    variant={'outline'}
                                    colorScheme={'facebook'}
                                    borderColor={'transparent'}
                                >
                                    <Center>
                                        <FaFacebook />
                                    </Center>
                                </Button>
                                <Button
                                    width={12}
                                    variant={'outline'}
                                    marginLeft={'12'}
                                >
                                    <Center>
                                        <FcGoogle />
                                    </Center>
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Flex>

            </Stack>
        </>
    );
}
