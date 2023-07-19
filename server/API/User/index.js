import express from "express";


import {UserModel} from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Des            Get a user data
Params         id
Body           none
Access         Public
Method         GET
*/

Router.get("/: id", async(req, res) => {
    try{
        const { id } = req.params;
        const getUser = await UserModel.findById(id);
        
        return res.json({user: getUser});
        

    } catch (error) {
        return res.status(500).json({error: error.message});
      
    }
});

/*
Route          /update
Des            Update a user data
Params         userId
Body           User data
Access         Public
Method         PUT
*/

Router.get("/update/: id", async(req, res) => {
    try{
        const { userid } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData
            },
            {
                new: true
            },
        );
        
        return res.json({user: updateUserData});
        

    } catch (error) {
        return res.status(500).json({error: error.message});
      
    }
});

export default Router;