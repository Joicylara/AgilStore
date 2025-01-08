import express from "express";
import { rota } from "./routes/agilStore.routes.js";


const app = express();
const port = 3000;

app.use(express.json());
app.use(rota);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});