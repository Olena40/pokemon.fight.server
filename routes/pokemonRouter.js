import express from "express";
import {
  pokemons,
  pokemonId,
  pokemonInfo,
} from "../controllers/myController.js";

const router = express.Router();

router.get("/", pokemons);
router.get("/:id", pokemonId);
router.get("/:id/:info", pokemonInfo);

export default router;
