import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
	id: { type: String },
	name: { type: String }
})
categorySchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('category', categorySchema);
