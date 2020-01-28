const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/recipe_controller");

router.get("/all", RecipeController.index);

router.post("/new", RecipeController.create);

module.exports = router;