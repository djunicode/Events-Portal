import React from 'react';
import WithSubnavigation from '../Navbar/NavMain'
import Image1 from '../utils/image1.png'
import Image2 from '../utils/Rectangle 39.jpg'
import Image3 from '../utils/Rectangle 41.jpg'
import Image4 from '../utils/Rectangle 40.jpg'
import Image5 from '../utils/Rectangle 45.jpg'
import FormComponent from '../Form.tsx';
import Body from '../Reviews.tsx';
import SocialProfileWithImage from './CommitteeFooter';
// import BasicStatistics from './CommitteeFooter';

import './CommiiteeDetails.css'

const CommitteeDetail = () => {
    return (
        <div>
            <WithSubnavigation />
            <div className='outline'>
                <h2 className='heading'>helloo</h2>

                <div>
                    <img src={Image1} alt="img" />
                </div>
                <div>
                    <h2 className='heading'>about the heading</h2>
                    <p>HackPrep 3.0 returned in 2022 again to get the FEs into development. The aim this year was to provide freshers a head-start to their journey of hackathons. This was done by holding interactive lectures that spanned 2 days, covering all important topics from programming fundamentals to app, front and back end development. Even the basics of git and version control were introduced to the freshers. Via Hackprep, Unicode ensures that freshers get a clear idea on how to go about exploring the vast world of development, navigate through a plethora of resources, and eventually start building their own projects.
                    </p>
                </div>
                <div >
                    <h2 className='heading'>Past Events</h2>
                    <div className='box'>
                        <div className='image-box'>
                            <div className='left'>
                                <div className='left-box'>
                                    <div>
                                        <img src={Image2} alt="" />
                                    </div>
                                    <div>
                                        <img src={Image3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={Image4} alt="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Image5} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Body />
            <FormComponent />

            <div className='com-footer'>
                <div className='card1'> 
                    <h3>2000 participant</h3>
                </div>
                <div className='card1'> 
                    <h3>2000 participant</h3>
                </div>
                <div className='card1'> 
                    <h3>2000 participant</h3>
                </div>
            </div>
            <SocialProfileWithImage />
            
        </div>
    )
}

export default CommitteeDetail;