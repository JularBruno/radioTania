import mongoose, { Schema } from 'mongoose'

const buySchema = new Schema({
	id: { type: String },
	dateBuy: { type: Date, default: Date.now },
	products: [
		{
			product: { type: Object },
			price: { type: Number }, // precio del producto en ese momento de la compra
			amount: { type: Number }
		}
	],
	bill: { type: Boolean, default: false },
	notes: { type: String },
	user: { type: Schema.Types.ObjectId, ref: 'user' },
	order: { type: String },
	total: { type: Number }
})

buySchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('buy', buySchema);
