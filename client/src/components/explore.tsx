import React , {useEffect, useState, FC} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


interface Event  {
    name: string
    groupName: string 
    eventDay:string
    flyer: string
    avi:string
    url:string
}



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

    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        fetchEvents(location, timeframe).then((res) => {
            const eventData = res ?? []
            console.log("Should Be event Data",eventData)
            setEvents(eventData)
        })

    }, [])

    console.log('events state,', events)

  return (
    <div className='landingHead'>{events[0] !== undefined ? events[0].name : 'No events here' }</div>
  )
}

export default Explore