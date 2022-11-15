import { Router } from "express";

import runRouters from "./runRouter";

const router: Router = Router();

router.use("/run", runRouters);

export default router;
