import ExploreBackButton from 'components/Buttons/ExploreBackButton'
import React from 'react'
import TimeframeTabContainer from './TimeframeTabContainer'

const HeaderContainer = () => {
  return (
    <>
    <div className='headContainer'>
        <ExploreBackButton/>
        <video autoPlay={true} playsInline={true} loop={true} className='exploreVideo'>
          <source src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1).mp4' type='video/mp4' />
        </video>
        <TimeframeTabContainer/>
    </div>
    </>
  )
}

export default HeaderContainer