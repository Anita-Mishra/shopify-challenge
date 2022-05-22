const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    default: "",
  },
  category:{
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
  addDeleteComment:{
    type: String,
    default: "",
  }
});

productSchema.virtual("id").get(function() {
  return this._id.toHexString();   // so that Object Id is changed to string in mongo to make it more readable readable
});

productSchema.set("toJSON", {
  virtuals: true,   // by default virtual id is not stored in db.. but doing dso will store it in db
});

exports.Product = mongoose.model("Product", productSchema);
