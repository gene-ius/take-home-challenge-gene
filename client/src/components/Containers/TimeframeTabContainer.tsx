import TabButton from 'components/Buttons/TabButton'
import React , { FC }from 'react'


interface NavbarProps {
    selected:string
    clickHandler: (tag :string)=> void
}

const TimeframeTabContainer: FC<NavbarProps> = (props) => {

   const selected = props.selected
   console.log(selected)

  return (
    <div className='exploreTabs'>
        <TabButton tag={'week'} text={'THIS WEEK'} selected={selected} clickHandler={props.clickHandler}></TabButton>
        <TabButton tag={'today'} text={'TODAY'} selected={selected} clickHandler={props.clickHandler}></TabButton>
    </div>
  )
}

export default TimeframeTabContainer