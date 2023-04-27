import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CommiteeCards from './CommiteeCards'
import UpcomingCard from './UpcomingCard'
import PastEvents from './PastEvent'

function CommiteeAndEvent() {
  return (
    <div>
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Commitees</Heading>
          <div className="scrolling-wrapper-flexbox">
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
            <CommiteeCards title="hello" />
          </div>
        </div>
      </Box>
      {/* Now for upcoming events */}
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Upcoming Events</Heading>
          <div className="scrolling-wrapper-flexbox">
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
            <UpcomingCard />
          </div>
        </div>
      </Box>
      {/* Now for past events */}
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Past Events</Heading>
          <div className="scrolling-wrapper-flexbox">
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
          </div>
        </div>
      </Box>
    </div>
  )
}

export default CommiteeAndEvent
