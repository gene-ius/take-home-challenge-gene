import React, { FC } from 'react'
import LandingButton from 'components/Buttons/LandingButton'


const CitySelectorContainer: FC = () => {
  return (
    <div className='landing'>
      <h4 className='landingHead'>WHERE ARE YOU LOOKING FOR EXPERIENCES?</h4>
      <LandingButton text='🗽 NEW YORK' location='nyc' highlight={false}/>
      <LandingButton text='🌴 MIAMI' location='mia' highlight={false}/>
      <LandingButton text='🌞 LOS ANGELES' location='la' highlight={false}/>
      <LandingButton text='📍 NEAR ME' location='near' highlight={false}/>
    </div>
  )
}



export default CitySelectorContainer