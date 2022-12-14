import React, { FC, useState } from 'react'


interface TabButtonProps {
    selected: string
    text: string
    tag: string
    clickHandler: (tag: string) => void
}


const TabButton : FC<TabButtonProps> = (props) => {

  const handleClick = (tag: string) => {

    props.clickHandler(tag)
  }

  return (
    <div className='tabButton' style={ props.selected == props.tag ? {border: '1px solid #FFCC00' , color:'#FFCC00'} : {}} onClick={() => {handleClick(props.tag)}}>{props.text}</div>
  )
}

export default TabButton