//! This is like the table of contents for the routes
import express from "express";
import { employeesRouter } from "./employees.js"
export const router = express.Router();

//PATH is api/employees
router.use("/", employeesRouter);

export default employeesRouter;