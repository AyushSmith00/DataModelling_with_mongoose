import mongoose from 'mongoose';
import express from 'express';
import { SubTodo } from "./todos/sub_todo.models.js";

mongoose.connect('mongodb://127.0.0.1:27017/test');

const app = express()

const port = 3000


app.get("/", async(req, res) => {
    res.send("you are here")
    const todo = new SubTodo({
        content: "yooo"
    })
   await todo.save();

    const todos = await SubTodo.find({});
    console.log(todos)
})

app.listen(port, () => {
    console.log("The server is online")
})