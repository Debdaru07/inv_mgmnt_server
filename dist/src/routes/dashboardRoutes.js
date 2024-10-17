"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
// ************************ IMPORTANT ANNOUNCEMENT BELOW ***********************************************
// The following line should be laid the highest importance upon, parallely you can see that 
// ----> '/' here is equivalent to the route which we used to define in the index.ts i.e. http://localhost:8000/dashboard
// Similarly here if we use, get("/key-metrics") , this would be duplicated as besides :- http://localhost:8000/dashboard/key-metrics ... and so on ...  
// Also the router has .post() , .update() , .put() methods to use whenever needed . 
router.get("/", dashboardController_1.getDashboardMetrics); // http://localhost:8000/dashboard
exports.default = router;
