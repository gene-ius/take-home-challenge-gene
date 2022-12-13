import TabButton from 'components/Buttons/TabButton'
import React , { FC }from 'react'



const TimeframeTabContainer: FC = () => {
  return (
    <div className='exploreTabs'>
        <TabButton tag={'week'} text={'THIS WEEK'} selected={true}></TabButton>
        <TabButton tag={'today'} text={'TODAY'} selected={true}></TabButton>
    </div>
  )
}

export default TimeframeTabContainer