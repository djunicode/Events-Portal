import { Heading,Box,SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from '../../Navbar/NavMain'
import ParticipantCard from './ParticipantCard'

function Participant() {
  return (
    <div>
        <WithSubnavigation/>
      <Heading ml={'48px'}>Participants</Heading>
      <br />
      <Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box  ><ParticipantCard/></Box>
          <Box  ><ParticipantCard/></Box>
          <Box  ><ParticipantCard/></Box>
          <Box  ><ParticipantCard/></Box>
          <Box  ><ParticipantCard/></Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Participant
