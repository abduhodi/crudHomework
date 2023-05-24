const express = require("express");
const {
  addProduct,
  showAddProductCard,
  deleteProduct,
} = require("../controllers/products");

const router = express.Router();

router.route("/categories/:id/add").get(showAddProductCard);
router.route("/categories/:id/new").post(addProduct);
router.route("/product/:id/delete").get(deleteProduct);

module.exports = router;
