
const { httpError } = require("../helpers/handleError");
const { getTasksService, getTaskByIdService, postTaskService, updateTaskService, deleteTaskService } = require("../services/taskServices")

const getTasks = (req, res) =>{
    try{
        res.status(200)
        getTasksService(req, res)
    }catch(error){
        httpError(res, error)
    }
            
}

const getTaskById = (req, res) =>{
    try{
        getTaskByIdService(req, res)
    }catch(error){
        httpError(res, error)
    }

}

const postTask = (req, res) =>{
    try{
        postTaskService(req, res)
    }catch(error){
        httpError(res, error)
    }

}

const updateTask = (req, res) =>{
    try{
        updateTaskService(req, res)
    }catch(error){
        httpError(res, error)
    }

}

const deleteTask = (req, res) =>{ 
    try{
        deleteTaskService(req, res)

    }catch(error){
        httpError(res, error)
    }

}

module.exports = { getTasks, getTaskById, postTask, updateTask, deleteTask}