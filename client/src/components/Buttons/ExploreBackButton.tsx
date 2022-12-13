import React , { FC } from 'react'
import 'assets/stylesheets/styles.scss'
import { Navigate, useNavigate } from 'react-router-dom'



const ExploreBackButton : FC = () => {
    const nav = useNavigate()

    const handleClick = () => {
        nav(`/`)
    }

  return (
    <img onClick={() => {handleClick()}} className='exploreBack' src={'https://posh-b2.s3.us-east-2.amazonaws.com/left-arrow-in-circular-button-black-symbol.svg'}/>
  )
}

export default ExploreBackButton