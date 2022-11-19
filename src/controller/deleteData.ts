import { Request, Response } from "express";
import productCatlog from "../model/index";
type productDeleteDataType = {ProductId:String}

const deleteData = async (req:Request , res:Response ) => {

    const deletedProductById:productDeleteDataType = req.params as any;
    try {
      const ProductIdd = await productCatlog.findById(deletedProductById.ProductId);
      console.log(`ProductIdd------>`, ProductIdd);
      const ProductDeleted = await productCatlog.deleteOne({ _id: deletedProductById.ProductId });
  
      console.log(`ProductDeleted`, ProductDeleted);
  
      if (ProductIdd) {
        res.send(`Product Deleted`);
      } else {
        res.status(404).send(`Product Not Deleted`);
      }
    } catch (err) {
      console.log(`delete product error------->`, err);
      res.status(500);
    }
}

export default (deleteData);