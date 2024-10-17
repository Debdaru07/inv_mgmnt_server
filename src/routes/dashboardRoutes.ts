import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const router = Router();


// ************************ IMPORTANT ANNOUNCEMENT BELOW ***********************************************
// The following line should be laid the highest importance upon, parallely you can see that 
// ----> '/' here is equivalent to the route which we used to define in the index.ts i.e. http://localhost:8000/dashboard
// Similarly here if we use, get("/key-metrics") , this would be duplicated as besides :- http://localhost:8000/dashboard/key-metrics ... and so on ...  
// Also the router has .post() , .update() , .put() methods to use whenever needed . 
router.get("/",getDashboardMetrics); // http://localhost:8000/dashboard

export default router;