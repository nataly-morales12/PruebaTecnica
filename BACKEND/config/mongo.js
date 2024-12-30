const mongoose = require("mongoose");

const dbConnect = () => {
    const db_url = process.env.MONGODB_URI
    //conexion a mongo db
    mongoose
    .connect(db_url)
    .then(() => console.log("Conectado a Mongo DB"))
    .catch((error) => console.error(error));

}

module.exports = {dbConnect}
