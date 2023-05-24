const { createViewPath } = require("../helpers/createViewPath");
const { readJSONFile } = require("../helpers/readData");

const getCategories = async (req, res) => {
  res.render(createViewPath("categories"), {
    categories: readJSONFile("categories"),
    products: [],
    categoryId: null,
    section: null,
  });
};

const getCategoryItems = async (req, res) => {
  const data = readJSONFile("products");
  const { id } = req.params;
  const filteredProducts = data.filter((product) => product.category == id);
  res.render(createViewPath("categories"), {
    categories: readJSONFile("categories"),
    products: filteredProducts,
    categoryId: id,
    section: "products",
  });
};

module.exports = {
  getCategories,
  getCategoryItems,
};
