const express = require("express");
const tasks = require("./src/tasks");

const app = express();
app.use(express.json());

app.get("/tasks", (req, res) => res.json(tasks.all()));
app.post("/tasks", (req, res) => res.json(tasks.create(req.body.title)));
app.put("/tasks/:id", (req, res) => res.json(tasks.update(req.params.id, req.body.title)));
app.delete("/tasks/:id", (req, res) => res.json(tasks.remove(req.params.id)));

app.listen(3000, () => console.log("TaskManager läuft auf Port 3000"));
