import React, { FC } from 'react'
import { Event } from 'components/types'
import { useNavigate } from 'react-router-dom'



const EventCard : FC<Event> = (props) => {

  const weekday = new Date(props.eventDay).toLocaleDateString(undefined, {weekday: 'short'})
  const nav = useNavigate();

  const cardStyleProps = {
    backgroundImage: `url(${props.flyer})`,
    backgroundSize: 'cover' 
  }

  const aviStyleProps = {
    // backgroundImage: `url(${props.avi})`,
    // bakgroundSize: 'cover',
  }

  const handleClick = (url: string) => {
      window.location.href = `http://posh.vip/e/${url}`
  }

  return (
    <div className='eventCard' style={cardStyleProps} onClick={() => {handleClick(props.url)}}>
      <div className='cardGradient'></div>
      <img className='eventCardAvi' src={props.avi}></img>
      <div className='eventCardInfo'>
          <div className='eventCardDate'>{weekday}</div>
          <div>
            <div className='eventName'>{props.name}</div>
            <div className='groupName'>{props.groupName}</div>
          </div>
      </div>
    </div>
  )
}

export default EventCard