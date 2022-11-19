import express from "express";
import { FilterQuery } from "mongoose";
import productCatlog from "../model/index";
const router = express.Router();

//----------add products--------------------
import addProduct from "../controller/addProduct";

router.post("/add_product", addProduct);

//---------edit products----------------------
import editProduct from "../controller/editPoducts";
router.put("/edit_product/:ProductId", editProduct as any);

//---------delete products--------------------
import deleteData from "../controller/deleteData";
router.delete("/delete_product/:ProductId", deleteData as any);

//---------list of all products----------------
import listAllProducts from "../controller/listAllProduct";
router.get("/list_all_products", listAllProducts as any);

//----------get product by id------------
import getProductById from "../controller/getProductById";
router.get("/product_details/:ProductId", getProductById as any);

//-----------is deleted true------------------------
import isDeleted from "../controller/isDeleted";
import uploadImage from "../controller/uploadImage";
router.delete("/isDelete/:ProductId", isDeleted as any);
//---------------------------min max soring-------------------
router.post("/uploadImage", uploadImage);

export default router;
