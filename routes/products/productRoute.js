const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/products/productController");

router.post("/createProduct", productsController.createProduct);
router.get("/getProductLists", productsController.getProductDetails);
router.get("/getProductById/:id", productsController.getProductDetailsById);
router.put("/updateProductById/:id", productsController.updateProductDetailsById);
router.put("/deleteProduct", productsController.deleteProductById);
router.get("/getDeletedProduct", productsController.getDeletedProduct);


module.exports = router;
