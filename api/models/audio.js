import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const audioSchema = new Schema({
	id: { type: String },
	title: { type: String },
	description: { type: String },
	province: { type: String },
	audio: { type: String },
})

audioSchema.plugin(uniqueValidator)
audioSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('audio', audioSchema);
