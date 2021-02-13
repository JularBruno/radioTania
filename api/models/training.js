import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const trainingSchema = new Schema({
	id: { type: String },
	title: { type: String },
})

trainingSchema.plugin(uniqueValidator)
trainingSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('training', trainingSchema);
