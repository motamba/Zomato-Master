// Libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database Model
import {ImageModel} from "../../database/allModel";

//Utilities
import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS S3 bucket config



/* 
Route          /
Des            Uploading given image to S3 bucket, and then saving the file to mongodb
Params         None
Access         Public
Method         GET
*/

Router.post("/", upload.single("file")  ,async(req, res) => {
    try{
        const file = req.file;

        //S3 bucket options
        const bucketOptions = {
          Bucket:  "shapeaijulybatch123",
          Key: file.originalname,
          Body: file.buffer,
          contentType: file.mimetype,
          ACL: "public-read"
        };



    } catch(error) {
        return res.status(500).json({error: error.message});

    }
});
