import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function socialProfileWithImageHorizontal() {
    return (
      <Center py={6} >
        <Stack
            className='stack1'
        //   borderWidth="1px"
        //   borderRadius="lg"
          w={{ sm: '300px', md: '440px' }}
        //   height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
        //   bg={useColorModeValue('white', 'gray.900')}
        //   boxShadow={'2xl'}
        _hover={{
            borderWidth:'1px',
            borderRadius:"lg",
            boxShadow:'2xl',
            transition:'0.2s ease-in'
        }}
          >
          <Flex  justifyContent={'center'} >
            {/* <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
            /> */}
            <Avatar
          size={'2xl'}
          src={
            'https://cdn.mos.cms.futurecdn.net/8ZZNSej9H2oqYzpa5K422b-1200-80.jpg'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 5,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Neel Gabani
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              60004210127
            </Text>
            
          </Stack>
        </Stack>
      </Center>
    );
  }