
import { v4 as uuid } from "uuid"
import { Brand } from "../../brands/entities/brand.entity.js";


export const BRANDS_SEED : Brand[] = [
  {
    id: uuid(),
    name: "Audi",
    createdAT: new Date().getTime()
  },
  {
    id: uuid(),
    name: "BMW",
    createdAT: new Date().getTime()
  },
  {
    id: uuid(),
   name: "Honda",
   createdAT: new Date().getTime()
  },

];