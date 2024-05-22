import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(async connection => {
    console.log("Connected to the database");
    console.log("conection sucefull to the database");
   

}).catch(error => console.log(error)
        console.log("Error al conectar la base de datos"));
