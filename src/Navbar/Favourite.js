import React from 'react'
import WithSubnavigation from './NavMain'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import FavCard from './FavCard'

function Favourite() {
  return (
    <div>
      <WithSubnavigation />
      <br />
      <Heading className='favhead' >Favourite</Heading>
      <br />
      <Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box ><FavCard /></Box>
          <Box ><FavCard /></Box>
          <Box ><FavCard /></Box>
          <Box ><FavCard /></Box>
          <Box ><FavCard /></Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Favourite
