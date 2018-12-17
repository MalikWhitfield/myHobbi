let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
    content: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    authorId: { type: ObjectId, ref: 'User', required: true },
    postId: { type: ObjectId, ref: 'Task', required: true },
})



module.exports = mongoose.model(schemaName, schema)