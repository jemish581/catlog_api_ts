import { Request, Response } from "express";
import { UpdateWithAggregationPipeline, UpdateQuery } from "mongoose";
import productCatlog from "../model/index";


type editProductDataType = {ProductId:String}

const editProduct = async (req:Request , res:Response) => {
    
  const inputProductId:editProductDataType = req.params as any;
    
  try {
      const ProductIdd = await productCatlog.findById(inputProductId.ProductId);
  
      console.log(`productidd log--->`, ProductIdd);
  
      const updatedProduct = await productCatlog.updateOne(
        { _id: inputProductId.ProductId },
        req.body
      );
  
      console.log(`updatedProduct log---->`, updatedProduct);
      if (updatedProduct){
        res.send(`${updatedProduct.modifiedCount} Document Modified`)
      }

       else {
        res.status(404).send("Product Not Found for update");
      }

    } 
    catch (err) {
      res.status(500).json(err);
      console.log(`edit product error : `, err);
    }
  };

  export default editProduct; 