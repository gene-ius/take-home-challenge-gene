import React , {useEffect, useState, FC} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {usePromiseTracker, trackPromise } from 'react-promise-tracker'
import EventCard from './Cards/EventCard'
import {Event} from  './types'
import HeaderContainer from './Containers/ExploreHeader'
import TimeframeTabContainer from './Containers/TimeframeTabContainer'



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
    const {promiseInProgress} = usePromiseTracker();

    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoader] = useState(true)

    useEffect(() => {

        trackPromise(fetchEvents(location, timeframe).then((res) => {
            const eventData = res ?? []
            console.log("Should Be event Data",eventData)
            setEvents(eventData)
        }))

        return () => {}

    }, [])

    useEffect(() => {
        console.log(events)
    }, [events])


  return (
    <>
        <div className='exploreHead'>
            <HeaderContainer/>
        </div>
        <div className='exploreBody'>
            <TimeframeTabContainer/>
            <div className='cardGrid'>
                {events == null ? 'Loading' : events.map((e, i) =>{
                    return <EventCard {...e}></EventCard>
                    }) }
            </div>
        </div>
    </>
   
  )
}

export default Explore