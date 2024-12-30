const express = require("express");
const router = express.Router();
const { getTasks, getTaskById, postTask, updateTask, deleteTask } = require("../controllers/taskContoller")
const { validateCreate } = require("../validators/taskValidator")
/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of MONGODB
 *         title:
 *           type: string
 *           description: The tittle of the Task
 *         description:
 *           type: string
 *           description: The description of the Task
 *         completed:
 *           type: boolean
 *           description: The state of the Task
 *         createdAt:
 *           type: Date
 *           description: The creation date of the Task is auto-generated. 
 *     TaskPost:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: The tittle of the Task
 *         description:
 *           type: string
 *           description: The description of the Task
 *     ObjectDelet:
 *       type: object
 *       properties:
 *         acknowledged:
 *           type: boolean
 *           description: The acknowledged, boolean value
 *         deletedCount:
 *           type: integer
 *           description: Number object remove
 */

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: The Tasks managing API
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Returns the list of all the Tasks
 *     tags: [Task]
 *     parameters:
 *       - in: query
 *         name: state
 *         description: Filter tasks by completion status ("completed" or "pending")
 *         required: false
 *         schema:
 *           type: string
 *           enum: [completed, pending]
 *     responses:
 *       200:
 *         description: The list of the Tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", getTasks);


/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 *     responses:
 *       200:
 *         description: The Task description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 */
router.get("/:id", getTaskById)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new Task
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskPost'
 *     responses:
 *       200:
 *         description: The Task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.post("/", validateCreate, postTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a Task by the id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The Task was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 *       500:
 *         description: Some error happened
 */
router.put("/:id", updateTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Remove the Task by id
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Task id
 *     responses:
 *       200:
 *         description: The Task was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ObjectDelet'
 *       404:
 *         description: The Task was not found
 */
router.delete("/:id", deleteTask)

module.exports = router;