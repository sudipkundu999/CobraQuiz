import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Neog",
    lastName: "Guest",
    email: "neog@cobratube.com",
    password: "neogcamp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sudip",
    lastName: "Kundu",
    email: "sudipkundu@cobratube.com",
    password: "sudipkundu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
