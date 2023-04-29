import React from 'react'
import { Image } from '@chakra-ui/react'
import './Like.css'
import { FcLike } from 'react-icons/fc'
import { FaShare } from 'react-icons/fa'

function FavCard() {
    return (
        <div>
            <div class="cardfav">
                <div class="imge">
                    <div class="Usericon">
                        <Image
                            boxSize='110px'
                            objectFit='cover'
                            src='https://static.toiimg.com/thumb/msid-98147969,width-1280,resizemode-4/98147969.jpg'
                        />
                        <br />
                    </div>
                    <p class="UserName"></p>
                    <p class="Id"></p>
                </div>
                <div className="sharelist"><FcLike/><FaShare/></div>
            </div>
            
        </div>
    )
}

export default FavCard
