import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CommiteeCards from './CommiteeCards'
import UpcomingCard from './UpcomingCard'
import PastEvents from './PastEvent'
import WithSubnavigation from '../Navbar/NavMain'

function CommiteeAndEvent() {
  return (
    <div>
      <WithSubnavigation/>
      <br />
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Commitees</Heading>
          <div className="scrolling-wrapper-flexbox" style={{marginTop:'1.4%'}}>
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
      <br />
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Upcoming Events</Heading>
          <div className="scrolling-wrapper-flexbox" style={{marginTop:'1.4%'}}>
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
      <br />
      <Box className='boxcom' fontFamily={'Inter'}>
        <div className="commitees">
          <Heading className='commitees' fontFamily={'Inter'} >Past Events</Heading>
          <div className="scrolling-wrapper-flexbox" style={{marginTop:'1.4%'}}>
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
