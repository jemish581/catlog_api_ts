import { Request, Response } from "express";
import productCatlog from "../model/index";


type ProductDetailsDataType = {ProductId:String}
const getProductById = async (req:Request , res:Response) => {
    const inputProductsid:ProductDetailsDataType = req.params as any;
    try {
      const GetProductById = await productCatlog.findById(inputProductsid.ProductId);
      console.log(`GetProductById---->`, GetProductById);
  
      if (GetProductById) {
        res.json(GetProductById);
      } else {
        res.status(404).send("product not found");
      }
    } catch (err) {
      console.log(`product detail catch log----->`, err);
      res.status(500).json(err);
    }
  }

  export default getProductById;