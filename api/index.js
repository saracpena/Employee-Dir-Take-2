//! This is like the table of contents for the routes
import express from "express";
export const router = express.Router();
import {employees} from "./employees.js"

//PATH is api/employees
router.use("/employees", employeesRouter);

