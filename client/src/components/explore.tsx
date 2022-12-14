import React , {useEffect, useState, FC} from 'react'
import axios from 'axios'
import { redirect , useParams } from 'react-router-dom'
import {usePromiseTracker, trackPromise } from 'react-promise-tracker'
import EventCard from './Cards/EventCard'
import {Event} from  './types'
import HeaderContainer from './Containers/ExploreHeader'
import TimeframeTabContainer from './Containers/TimeframeTabContainer'
import { set } from 'lodash'



const fetchEvents = async (location: string, timeframe: string) => {
    try {
        const eventList = await axios.get('http://localhost:4000/events/' + location + '/' + timeframe)
        .then(({data}) => {

            const events : Event[] = data.map((ev: any) => {
                const vent : Event = {
                    name: ev.name,
                    groupName: ev.groupName,
                    flyer: ev.flyer,
                    avi: ev.groupAvi,
                    url: ev.url,
                    eventDay: ev.startUtc
                }
                return vent
            })
            return events
        }) 
        return eventList
    } catch (e) {
        console.error(e.message)
    }
}



type MyParams = {
    location: string
    timeframe: string
}

const Explore : FC = () => {
    const {location , timeframe }  = useParams<keyof MyParams>() as MyParams

    const [selected, setSelected] = useState(timeframe)
    const [events, setEvents] = useState<Event[]>([])

    const toggleTab = (tag: string) => {
        setSelected(tag)
        window.location.href = `http://localhost:3000/events/${location}/${tag}`
    }

    useEffect(() => {

        fetchEvents(location, timeframe).then((res) => {
            const eventData = res ?? []
            console.log("Should Be event Data",eventData)
            setEvents(eventData)
        })

        return () => {}

    }, [])

    useEffect(() => {
        fetchEvents(location, selected).then((res) => {
            const eventData = res ?? events
            console.log('Updated Tab Events')
            setEvents(eventData)
        })
    }, [selected])


  return (
    <>
        <div className='exploreHead'>
            <HeaderContainer/>
        </div>
        <div className='exploreBody'>
            <TimeframeTabContainer selected={selected} clickHandler={toggleTab}/>
            <div className='cardGrid'>
                {events == null ? 'Loading' : events.map((e, i) =>{
                    return <EventCard {...e}></EventCard>
                    }) }
            </div>
            {events.length == 0 ? <div className='placeHolder'>{`Damn... No Events Today...  🫠` }</div> : null}
        </div>
    </>
   
  )
}

export default Explore