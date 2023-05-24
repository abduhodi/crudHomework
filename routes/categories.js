const express = require("express");
const {
  getCategories,
  getCategoryItems,
} = require("../controllers/categories");

const router = express.Router();

router.route("/categories").get(getCategories);
router.route("/categories/:id").get(getCategoryItems);

module.exports = router;
