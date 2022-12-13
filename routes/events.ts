import express from 'express'
const router = express.Router()
import Event from '../models/event'

//Create Get All
router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//Create Get all In City
router.get('/:city', async (req, res ) => {
    // Woulde be best practice to check if Point is in NewYork Feature Collection
    // for time sake goint to hardcode but can use d3Geo import possibly.
    if ( req.params.city == 'nyc') {
        const events = await Event.where('location.coordinates').equals([
            -73.935242,
            40.73061
          ])
        res.json(events)

    } else if (req.params.city == 'mia') {
        const events = await Event.where('location.coordinates').equals([
            -80.191788,
            25.761681
          ])
        res.json(events)

    } else if (req.params.city == 'la') {
        const events = await Event.where('location.coordinates').equals([
            -118.321495,
            34.134117
          ])
        res.json(events)
    } else if (req.params.city = 'near') {
        const events = await Event.where('location.coordinates').equals([
            -73.935242,
            40.73061
          ])
        res.json(events)
    }
})


router.get('/:city/:time', async (req, res ) => {
    // Woulde be best practice to check if Point is in NewYork Feature Collection
    // for time sake goint to hardcode but can use d3Geo import possibly.
    if ( req.params.city == 'nyc') {
        const events = await Event.where('location.coordinates').equals([
            -73.935242,
            40.73061
          ])
        res.json(events)

    } else if (req.params.city == 'mia') {
        const events = await Event.where('location.coordinates').equals([
            -80.191788,
            25.761681
          ])
        res.json(events)

    } else if (req.params.city == 'la') {
        const events = await Event.where('location.coordinates').equals([
            -118.321495,
            34.134117
          ])
        res.json(events)
    } else if (req.params.city = 'near') {
        const events = await Event.where('location.coordinates').equals([
            -73.935242,
            40.73061
          ])
        res.json(events)
    }
})




export default router