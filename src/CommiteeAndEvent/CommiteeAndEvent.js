import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CommiteeCards from './CommiteeCards'

function CommiteeAndEvent() {
  return (
    <div>
      <Box paddingLeft={'46px '} fontFamily={'Inter'}>
        <div className="commitees">
            <Heading fontFamily={'Inter'} >Commitees</Heading>
            <div className="cards">
                <CommiteeCards title="hello" />
            </div>
        </div>
      </Box>
    </div>
  )
}

export default CommiteeAndEvent
