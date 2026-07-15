import express from "express";
import employees from "../db/employees.js";

export const employeesRouter = express.Router();

employeesRouter.get("/", (req, res) => {
  res.send(employees);
});

employeesRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee);
});

employeesRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send("ID must be a number.");
  }

  const employee = employees.find((employee) => {
    return employee.id === +id;
  });

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});

employeesRouter.post("/", (req, res) => {
  const { name } = req.body ?? {};

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).send("A valid name is required.");
  }

  const newEmployee = {
    id: employees.length + 1,
    name: name.trim(),
  };

  employees.push(newEmployee);

  res.status(201).send(newEmployee);
});