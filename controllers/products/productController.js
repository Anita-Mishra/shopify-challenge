const { Product } = require("../../models/productModel");


exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity
  });
  product
    .save()
    .then((prod) => {
      res.send({ data: prod, success: true }).status(201);
    })
    .catch((err) => {
      res.send({ error: err, success: false }).status(500);
    });
};


exports.getProductDetailsById = async (req, res) => {
    const product = await Product.findById(req.params.id);
  console.log("product"+req.params.id);
    if (!product) {
      res
        .send({ message: "No product found in the inventory with given id", success: false })
        .status(500);
    }
    res.send({ products: product, success: true }).status(200);
  };

  
exports.getProductDetails = async (req, res) => {
    const productList = await Product.find({
      isDelete:  false
    });
    if (!productList) {
      res.send({ message: "No products in the inventory" }).status(500);
    }
    res.send({ products: productList });
};


exports.updateProductDetailsById = async (req, res) => {
  const productList = await Product.findByIdAndUpdate(
    req.params.id,
    {
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity
    },
    { new: true }
  );
  if (!productList) {
    res
      .send({
        message:
          "Product not found in the inventory and hence couldn't update it",
        success: false,
      })
      .status(500);
  }
  res.send({ products: productList, success: true }).status(200);
};

exports.getDeletedProduct = async (req, res) => {
  const softDeleteProduct = await Product.find({
      isDelete:  true
    });
  if (!softDeleteProduct) {
    res
      .send({
        message:
          "No product is deleted",
        success: false,
      })
      .status(500);
  }
  res.send({ productsList: softDeleteProduct, success: true }).status(200);
};


exports.deleteProductById = async (req, res) => {
  const softDeleteProduct = await Product.findByIdAndUpdate(
    req.body.id,
    {
        isDelete:req.body.isDelete,
        addDeleteComment:req.body.addDeleteComment || ""
    },
    { new: true }
  );
  if (!softDeleteProduct) {
    res
      .send({
        message:
          "Product not found in the inventory and hence couldn't delete it",
        success: false,
      })
      .status(500);
  }

  let delStatus;
  if(req.body.isDelete){
    delStatus="deleted";
  }else{
    delStatus="undeleted";
  }
  
  res.send({ products: delStatus, success: true }).status(200);
};




