import React , { FC, useState } from 'react'
import 'assets/stylesheets/styles.scss'
import { Navigate, useNavigate } from 'react-router-dom'
import Confetti from 'react-dom-confetti'

interface ButtonProps {
    text: string
    location: string
    highlight: boolean
}

const LandingButton : FC<ButtonProps> = (props: ButtonProps) => {
    const nav = useNavigate()
    const [isActive, setActive] = useState(false)

    const config: any = {
      angle: 90,
      spread: "325",
      startVelocity: 40,
      elementCount: "125",
      dragFriction: 0.12,
      duration: "2500",
      stagger: "10",
      width: "10px",
      height: "10px",
      perspective: "500px",
      colors: [ '#FFCC00' ],
      
      
    };

    const handleClick = (location: string) => {
        setActive(true)
        setTimeout(()=> {
          nav(`/events/${props.location}/week`)
        }, 2600)
        
    }

  return (
    <div className='landingButton' onClick={() => {handleClick(props.location)}}>
        {props.text}
        <div className='fetti'>
            <Confetti active={isActive} config={config}></Confetti>
        </div>
    </div>
  )
}

export default LandingButton