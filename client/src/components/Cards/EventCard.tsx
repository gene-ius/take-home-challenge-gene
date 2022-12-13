import React, { FC } from 'react'
import { Event } from 'components/types'



const EventCard : FC<Event> = (props) => {

  const weekday = new Date(props.eventDay).toLocaleDateString(undefined, {weekday: 'short'})

  const cardStyleProps = {
    backgroundImage: `url(${props.flyer})`,
    backgroundSize: 'cover' 
  }

  const aviStyleProps = {
    // backgroundImage: `url(${props.avi})`,
    // bakgroundSize: 'cover',
  }

  const handleClick = (url: string) => {

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