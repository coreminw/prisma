import { Router } from "express";

import { RunController } from "../controller";

const router: Router = Router();

//유저 달리기 정보
router.get("/:userId", RunController.getRunInfo);

export default router;
