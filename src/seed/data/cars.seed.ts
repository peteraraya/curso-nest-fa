import { Car } from "../../cars/interfaces/car.interface.js";
import { v4 as uuid } from "uuid"


export const CARS_SEED : Car[] = [
  {
    id: uuid(),
    model: "Ford",
    brand: "Ford",
    year: "2019",
  },
  {
    id: uuid(),
    model: "Ford",
    brand: "Ford",
    year: "2020",
  },
  {
    id: uuid(),
    model: "Toyota",
    brand: "Toyota",
    year: "2019",
  },
];