import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const productCatlog = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    data: buffer,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("productCatlog", productCatlog);
