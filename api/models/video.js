import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const videoSchema = new Schema({
	id: { type: String },
	title: { type: String },
	description: { type: String },
	category: { type: String },
	videoUrl: { type: String },
})

videoSchema.plugin(uniqueValidator)
videoSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('video', videoSchema);
