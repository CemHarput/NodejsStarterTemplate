import { Request, Response } from "express";
import { User } from "../models/user.model";
import userService from "../services/user.service";

export const getUsers = (req: Request, res: Response) => {
  res.json(userService.getUsers());
};

export const createUser = (req: Request, res: Response): any => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser: User = userService.createUser(name);
  res.status(201).json(newUser);
};
