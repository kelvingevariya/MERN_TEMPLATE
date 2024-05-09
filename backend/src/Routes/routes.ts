import e from "express";
const router = e.Router();

import { Request, Response } from "express";

router.get("/home", (req: Request, res: Response) => {
  res.send(200).json({ message: "Test Message " });
});
router.post("/", () => {});
router.put("/", () => {});
router.delete("/", () => {});

export default router;
