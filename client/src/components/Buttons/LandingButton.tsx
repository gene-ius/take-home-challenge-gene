import React , { FC } from 'react'
import 'assets/stylesheets/styles.scss'
import { Navigate, useNavigate } from 'react-router-dom'

interface ButtonProps {
    text: string
    location: string
    highlight: boolean
}

const LandingButton : FC<ButtonProps> = (props: ButtonProps) => {
    const nav = useNavigate()

    const handleClick = (location: string) => {
        nav(`/events/${props.location}/week`)
    }

  return (
    <div className='landingButton' onClick={() => {handleClick(props.location)}}>
        {props.text}
    </div>
  )
}

export default LandingButton