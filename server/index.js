//env variable
require("dotenv").config();

import express from 'express';
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import routeConfig from "./config/route.config";
//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/Reviews";


//Database Connection
import connectioDB from "./database/connection";


const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.inialize());
zomato.use(password.session());
zomato.use("/image", Image);



//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);


zomato.get("/", (req, res) => res.json({message: "Setup Success Yay!!!"}));

zomato.listen(4000, () =>
connectioDB().then(()=> console.log("Sever is up an running"))
.catch(()=>console.log("DB connection failed")));

