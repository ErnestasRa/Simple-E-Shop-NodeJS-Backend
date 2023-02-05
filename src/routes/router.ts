import express from "express";
import testRequest from "../controllers/test.js";
const router = express.Router();

router.get('/test', testRequest)

export default router;