import mongoose, { Mongoose } from 'mongoose'

const eventSchema = new mongoose.Schema({
    name: String,
    flyer: String,
    groupAvi: String,
    timezone: String,
    startUtc: Date,
    endUtc: Date,
    url: String,
    venueName: String,
    groupName: String,
    location: {
        type: {
            String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})

export default mongoose.model('Event' , eventSchema)