import React , { FC } from 'react'
import 'assets/stylesheets/styles.scss'

interface ButtonProps {
    text: string
    location: string
    highlight: boolean
}

const LandingButton : FC<ButtonProps> = (props: ButtonProps) => {

    const handleClick = (location: string) => {
        //TODO Update Query for specific location
    }

  return (
    <div className='landingButton' onClick={() => {handleClick(props.location)}}>
        {props.text}
    </div>
  )
}

export default LandingButton