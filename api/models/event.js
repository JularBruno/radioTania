import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const eventSchema = new Schema({
	id: { type: String },
    miniature: { type: String }, // events
    resume: { type: String }, // events
    
    title: { type: String },
    firstImage: { type: String },
    //
    description: { type: String },
    logo: { type: String },
    //
    secondImage: { type: String },
    //
    titleVideo: { type: String },
    videoUrl: { type: String },
    //
    titlePhotos: { type: String },
    photosRow: [{ type: String }],
    //
    titleCarrousel: { type: String },
    carrouselPhotos: [{ type: String }],
    //
    titleLink: { type: String },
    link: { type: String },
    linkText: { type: String },
    //
    textBottom: { type: String },
    bottomImages: [{ type: String }],
})

eventSchema.plugin(uniqueValidator)
eventSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('event', eventSchema);
