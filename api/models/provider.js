import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const providerSchema = new Schema({
	id: { type: String },
	name: { type: String },
})

providerSchema.plugin(uniqueValidator)
providerSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('provider', providerSchema);
