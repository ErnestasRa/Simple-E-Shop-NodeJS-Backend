import express from "express";
import { getItems, postItem, getItemsByCategory } from "../controllers/test.js";
const router = express.Router();
router.get('/getitems', getItems);
router.post('/postitem', postItem);
router.post('/categoryitem', getItemsByCategory);
export default router;
//# sourceMappingURL=router.js.map