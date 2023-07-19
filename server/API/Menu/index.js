//Libraries

import express from "express";

//Database Model
import {MenuModel, ImageModel} from "../../databse/allModels";

const Router = express.Router();

/*
Route          /r
Des            Get the list of menu based on id
Params         id
Access         Public
Method         GET
*/

Router.get("/r/ :id", async(req,res) => {
    try{
        const { id} = req.params;
        const menus = await MenuModel.findOne(id);

        return res.json({menus});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /list
Des            Get the list of menu based on id
Params         id
Access         Public
Method         GET
*/

Router.get("/list/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const menus = await MenuModel.findOne(id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/*
Route          /image
Des            Get menu image based on id
Params         id
Access         Public
Method         GET
*/

Router.get("/image/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const menus = await ImageModel.findOne(id);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;