import { Router } from "express";
import docesRoutes from "./doces.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
});

routes.use("/doces", docesRoutes);

export default routes;