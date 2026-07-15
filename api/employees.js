import express from "express";
export const employeesRouter = express.Router();
import { employees } from "../db/employees.js";


employeesRouter.get("/", (req, res, next) => {
  res.send(employees);
});

employeesRouter.get("/random", (req, res, next) => {
  res.send(employees);
});

employeesRouter.get("/:id", (req, res, next) => {
  const { id } = req.params;
  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  if(isNaN(+id)) {
    return res.status(500).send("not a number");
  }
  const employee = employee.fin((employee) =>{
    return employee.id === +id;
  });
  if (!employee) {
    return res.status(500).send(`Employee #${id} not found.`);
  }
  res.send(employee);
});