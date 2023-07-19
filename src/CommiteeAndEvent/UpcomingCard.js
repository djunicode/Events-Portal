import React from 'react'
import { Image } from '@chakra-ui/react'

function UpcomingCard(props) {
    return (
        <div>
            <div class="cookie-card">
                <div className="cardimage">
                    <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                        objectFit={'cover'}
                    />
                </div>
                <br />
                <span class="title">🍪 Cookie Notice</span>
                <p class="description"> Date Here </p>
                <div class="actions">
                    <button class="pref">

                    </button>
                    <button class="accept">
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpcomingCard
