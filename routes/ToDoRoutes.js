const {Router} = require("express");

const router = Router();

const {getToDo,saveToDo,deleteToDo,updateToDo} = require("../controllers/ToDoController")

router.get("/get-todo", getToDo);
router.get("/save-todo", saveToDo);
router.get("/delete-todo", deleteToDo);
router.get("/update-todo", updateToDo);


module.exports = router;