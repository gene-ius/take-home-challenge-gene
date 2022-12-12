import React , { FC } from 'react'
import 'assets/stylesheets/styles.scss'

interface ButtonProps {
    text: string
    location: string
    highlight: string
}

const LandingButton : FC<ButtonProps> = (props: ButtonProps) => {

    const handleClick = (location) => {
        //TODO Update Query for specific location
    }

  return (
    <button onClick={() => {handleClick(props.location)}} style={}>
        {props.text}
    </button>
  )
}

export default LandingButton