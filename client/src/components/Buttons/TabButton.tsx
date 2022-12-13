import React, { FC } from 'react'


interface TabButtonProps {
    selected: boolean
    text: string
    tag: string
}


const TabButton : FC<TabButtonProps> = (props) => {

  const handleClick = (tag: string) => {
    console.log('clicked')
  }

  return (
    <div className='tabButton' onClick={() => {handleClick(props.tag)}}>{props.text}</div>
  )
}

export default TabButton