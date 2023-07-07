import { Text, Image } from '@chakra-ui/react'
import React from 'react'

function CommiteeCards(props) {
    return (
        <div>
            <div class="card" style={{backgroundColor:'#f1f1f3',width:'210px',marginLeft:'25px'}}>
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
                <h3 class="card__title">{props.title}
                </h3>
                <p class="card__content"></p>
                <div class="card__date">
                    100k Followers
                </div>
                <div class="card__arrow">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default CommiteeCards
