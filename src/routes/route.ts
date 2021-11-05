import * as ArrayController from "../controllers/arrays"

import { Router } from "express";
const router = Router();


router
.get('/array',ArrayController.getVassels)

export default router;