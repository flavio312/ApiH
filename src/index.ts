import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(async connection => {
    console.log("Connected to the database");

   

}).catch(error => console.log(error));
