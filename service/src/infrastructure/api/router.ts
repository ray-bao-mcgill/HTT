import express, { Request, Response, Router, NextFunction } from "express";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

const getProducts = (request: Request, response: Response) => {
  response.send({
    products: [
      {
        title: "Product #1",
        description: "Test.",
      },
      {
        title: "Product #2",
        description: "Test.",
      },
    ],
  });
};

router.get("/products", getProducts);

export default router;
