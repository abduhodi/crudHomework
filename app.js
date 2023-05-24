const express = require("express");
const morgan = require("morgan");
const { createViewPath } = require("./helpers/createViewPath");
const categoryRout = require("./routes/categories");
const productRout = require("./routes/products");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(morgan("dev"));

app.use(express.static("styles"));

app.use("/categories", express.static("styles"));

app.use("/categories/:id", express.static("styles"));

app.use("/product/:id/delete", express.static("styles"));

app.use(categoryRout);

app.use(productRout);

app.use((req, res) => {
  res.status(404).render(createViewPath("error"));
});
