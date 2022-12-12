import express from 'express'
import eventsRouter from './routes/events'


import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/events', eventsRouter)






export default app

