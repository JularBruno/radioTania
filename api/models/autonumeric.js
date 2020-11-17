import mongoose, { Schema } from 'mongoose'

const autonumeric = new Schema({
    number: { type: Number }
})
autonumeric.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('autonumeric', autonumeric);