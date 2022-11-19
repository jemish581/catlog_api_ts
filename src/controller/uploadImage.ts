import { Request, Response } from "express";
import multer from "multer";
import productCatlog from "../model/index";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {},
  }),
});
