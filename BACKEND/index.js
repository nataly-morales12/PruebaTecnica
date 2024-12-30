require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const {dbConnect} = require("./config/mongo")
const swaggerUI = require("swagger-ui-express")
const specs = require("./swagger/swagger.js")

const port = process.env.PORT;
app.use(cors());
app.use(express.json());

//rutas
app.use("/api", require('./app/routes'));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.get("/", (req, res) => {
  res.send("API simmulador de tareas");
});

dbConnect()
app.listen(port, () =>
  console.log("El servidor se encuentra en el puerto: ", port)
);
