const express = require("express");
const router = express.Router();
const productRoutes = require("./products/productRoute");

router.use("/product", productRoutes);

module.exports = router;
