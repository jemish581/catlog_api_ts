import { Request, Response } from "express";
import productCatlog from "../model/index";
import multer from "multer";

function onlyNumbers(str: any) {
  return /^[0-9]+$/.test(str);
}

type modelDataType = {
  name: String;
  price: Number;
  image: any;
  description: string;
  isDeleted: boolean;
};

const addProduct = async (req: Request, res: Response) => {
  const inputPerameter: modelDataType = req.body as any;

  try {
    if (!inputPerameter.name) {
      return res.send("name are require");
    }

    if (!inputPerameter.price) {
      return res.send("Price are require");
    }

    if (onlyNumbers(inputPerameter.price)) {
      const Addproduct = await productCatlog.create(inputPerameter);

      res.send("product added succsessfully added");
    } else {
      res.send("only number are allowed");
    }
  } catch (error) {
    console.log(`add product catch error--->`, error);

    res.status(500);
  }
};

export default addProduct;
