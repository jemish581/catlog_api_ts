import { Request, Response } from "express";
import productCatlog from "../model/index";
type isDeletedDataType = { ProductId: String };

const isDeleted = async (req: Request, res: Response) => {
  const inputDataType: isDeletedDataType = req.query as any;
  try {
    const Product = await productCatlog.findById(inputDataType.ProductId);
    console.log(`Product--->`, Product);
    const FoundDeletedProduct = await productCatlog.findOne({
      _id: inputDataType.ProductId,
      isDeleted: true,
    });
    console.log(`Found Deleted Product:-`, FoundDeletedProduct);
    if (FoundDeletedProduct) {
      res.status(400).send("product already deleted");
    } else {
      const isDeleted = await productCatlog.updateOne(
        { _id: inputDataType.ProductId },
        { isDeleted: true }
      );
      console.log(`isDeleted`, isDeleted);
      res.send(`product is deleted`).status(200);
    }
  } catch (error) {
    console.log(`is delete catch-`, error);
    res.status(500).send(error);
  }
};

export default isDeleted;
