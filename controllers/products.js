const { createViewPath } = require("../helpers/createViewPath");
const { readJSONFile } = require("../helpers/readData");
const { writeToJSONFile } = require("../helpers/writeData");

const addProduct = (req, res) => {
  const products = readJSONFile("products");
  const { productName, price, info } = req.body;
  const { id } = req.params;
  const product = {
    productId: products.at(-1) ? products.at(-1).productId + 1 : 1,
    productName,
    category: parseInt(id),
    price: parseInt(price),
    info,
  };
  products.push(product);
  writeToJSONFile("products", products);
  res.render(createViewPath("categories"), {
    categories: readJSONFile("categories"),
    products: products.filter((product) => product.category == id),
    categoryId: id,
    section: "products",
  });
};

const showAddProductCard = (req, res) => {
  const { id } = req.params;
  res.render(createViewPath("categories"), {
    categories: readJSONFile("categories"),
    products: [],
    categoryId: id,
    section: "addProduct",
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const products = readJSONFile("products");
  const productInd = products.findIndex((prod) => prod.productId == id);
  if (productInd != -1) {
    const deleted = products.splice(productInd, 1);
    writeToJSONFile("products", products);
    res.render(
      createViewPath("categories"),
      {
        categories: readJSONFile("categories"),
        products: [],
        categoryId: deleted[0].category,
        section: "products",
      },
      { location: "/categories" }
    );
  } else {
    res.render(createViewPath("categories"), {
      categories: readJSONFile("categories"),
      products: products.filter((product) => product.category == req.params.id),
      categoryId: id,
      section: "products",
    });
  }
};

module.exports = {
  showAddProductCard,
  addProduct,
  deleteProduct,
};
