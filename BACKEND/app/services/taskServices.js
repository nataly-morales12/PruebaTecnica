const { notFoundError } = require("../helpers/notFoundError");
const { httpError } = require("../helpers/handleError");
const Task = require("../models/Task")

const getTasksService = (req, res) => {
    const { state } = req.query;
    let filter = {};
    if (state) {
        if (state == "completed") {
            filter.completed = true;
        } else if (state == "pending") {
            filter.completed = false;
        }
    }

    Task.find(filter)
        .then((data) => res.json(data))
};


const getTaskByIdService = (req, res) =>{
    const { id } = req.params;
    Task.findById(id)
        .then((data) => 
            {
                if (!data) {
                    notFoundError(res, "The Task was not found");
                }else{
                    res.json(data)
                }
            })
        .catch((error) => httpError(res, error));

}

const postTaskService = (req, res) =>{
    req.body.createdAt = new Date()
    const task = Task(req.body);
    task.save()
        .then((data) => res.json(data))

}

const updateTaskService = (req, res) =>{
    const { id } = req.params;
    const task = Task(req.body);
    task._id = id

    Task.findById(id)
        .then((existingTask) => {
            if (!existingTask) {
                notFoundError(res, "The Task was not found");
            }else{
                const task = Task(req.body);
                Task.updateOne(
                    { _id: id },
                    { $set: task }
                    )
                    .then((data) => res.json(data))
            }

        })
        .catch((error) => httpError(res, error));

}

const deleteTaskService = (req, res) =>{ 
    const { id } = req.params;
    Task.findById(id)
        .then((existingTask) => {
            if (!existingTask) {
                notFoundError(res, "The Task was not found");
            }else{
                Task.deleteOne({ _id: id })
                    .then((data) => res.json(data))
            }

        })
        .catch((error) => httpError(res, error));

}

module.exports = { getTasksService, getTaskByIdService, postTaskService, updateTaskService, deleteTaskService}