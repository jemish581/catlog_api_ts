import { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import productCatlog from "../model/index";

type priceDataType = {price:Number , minPrice:Number , maxPrice:Number}
function onlyNumbers(str:any) {
    return /^[0-9]+$/.test(str);
  }


const listAllProducts = async (req:Request , res:Response) => {
    const inputPrice:priceDataType= req.query as any;
    try {
      const filter:FilterQuery<typeof productCatlog> = {
        isDeleted: false,
      };
  
      if (inputPrice.minPrice || inputPrice.maxPrice) {
        if (!inputPrice.minPrice) {
          return res.status(400).send("min price are not enterd");
        }
        if (!inputPrice.maxPrice) {
          return res.status(400).send("max price are not enterd");
        }
        if (!onlyNumbers(inputPrice.minPrice)) {
          return res.status(400).send("min price are not number");
        }
        if (!onlyNumbers(inputPrice.maxPrice)) {
          return res.status(400).send("max price are not number");
        }
  
       filter.price = { $gte: inputPrice.minPrice, $lte: inputPrice.maxPrice };
      }
  
      console.log(`filter`, filter);
  
      const allProduct = await productCatlog.find(filter);
  
      res.send(allProduct as any);
    } catch (err) {
      console.log(`list_all_product`, err);
      res.status(500).json(err);
    }
  }

  export default listAllProducts;