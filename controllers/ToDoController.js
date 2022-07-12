const ToDoModule = require("../models/ToDoModels");

module.exports.getToDo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  TodoModel.create({ text })
    .then(() => res.set(201).send("Added succesfully.."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  TodoModel.findByIdAndRemove(id)
    .then(() => res.set(201).send("Deleted succesfully.."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  TodoModel.findByIdAndUpdate(id, { text })
    .then(() => res.set(201).send("Updated succesfully.."))
    .catch((err) => console.log(err));
};
