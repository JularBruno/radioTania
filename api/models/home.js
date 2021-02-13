import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const homeSchema = new Schema({
    id: { type: String },
    //
    description: { type: String },
    logo: { type: String },
    //
    slideTitle: { type: String },
    slideImages: [{ type: String }],
    // horarios
})

homeSchema.plugin(uniqueValidator)
homeSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('home', homeSchema);
