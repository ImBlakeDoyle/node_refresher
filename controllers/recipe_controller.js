const RecipeModel = require("../database/models/recipe_model");

async function create(req, res) {
    const { title, url, cost, time, comments } = req.body;
    try {
        const recipe = await RecipeModel.create({ title, url, cost, time, comments });
        res.json(recipe);
    } catch(err) {
        console.log(err);
    }
}

async function index(req, res) {
    const itemList = await RecipeModel.find();
    res.json(itemList);
}

module.exports = {
    create,
    index,
};