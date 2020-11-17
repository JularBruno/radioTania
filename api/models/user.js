import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new Schema({
	id: { type: String },
	name: { type: String },
	address: { type: String },
	city: { type: String },
	user: { type: String, unique: true },
	password: { type: String },
	phone: { type: String },
	cuit: { type: String },
	social: { type: String }
})

userSchema.plugin(uniqueValidator)
userSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('user', userSchema);
