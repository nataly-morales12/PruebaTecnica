const mongoose = require("mongoose")

const esquemaTask = new mongoose.Schema({
  
    title:{
        type: 'string',
        required: true
    },

    description:{
        type: 'string',
        required: false
    },

    completed:{
        type: 'boolean',
        required: true,
        default: false
    },

    createdAt:{
        type: 'Date',
        required: true,
    },

},
{
    versionKey: false
}
)

module.exports = mongoose.model('Task', esquemaTask, 'Task')