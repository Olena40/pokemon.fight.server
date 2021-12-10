import express from "express";
import cors from "cors";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.port || 300;

app.use(cors({ origin: true }));

app.use(express.json());

import pokemonRouter from "./routes/pokemonRouter.js";
app.use("/pokemon", pokemonRouter);

app.get("/", (req, res) => {
  res.send("<h3><br>Hello Pokemony!</h3>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
