
nodemon: command not found

=> install nodemon npm i nodemon

Cannot find module '../db'

=> require("./db");

Cannot find module 'mongoose'

=> instal mongoose npm i mongoose

Cannot find module './../../db/models/todos'

=> const todoModel = require("./../../db/models/todo");


Cannot find module 'mongose'

=> const mongoose = require("mongoose");

mongoose.module is not a function

=> mongoose.model("Todo", todoSchema);

Route.get() requires a callback function but got a [object Undefined] module.export

=> in controller module.exports


Route.put() requires a callback function but got a [object Undefined] 


=> exports updateTodo function


morgan is not defined


=> const morgan = require("morgan"); move it to up before  const app = express();

 

 const todo = req.body.todo;

  const newTodo = new todoModel({
    todo,
  });

  => change todo => task


  address already in use 4000;

  =>  remove ; from .env file 


  task: { type: Boolean, required: true }

  => change type to String

  // const todoModel = mongoose.model("Todo", todoSchema);


=> module.exports = mongoose.model("Todo", todoSchema);


app.use(cors);


=> app.use(cors());


