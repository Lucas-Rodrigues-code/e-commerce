import { Variation } from "../protocols";
import { variationService } from "../services/variation-service";
import { Request, Response } from "express";
async function handleRequest(
  promise: Promise<any>,
  res: Response,
  successCode: number
) {
  try {
    const data = await promise;
    res.status(successCode).send(data);
  } catch (error) {
    if (error.name === "Error") return res.status(401).send(error.message);
    if (error.name === "NotFoundError")
      return res.status(404).send(error.message);
    res.status(500).send("Internal server error");
  }
}

export async function getVariationByIdProduct(req: Request, res: Response) {
  const id = parseInt(req.query.productId.toString());
  handleRequest(variationService.getVariationByIdProduct(id), res, 200);
}

export async function createVariation(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const body: Variation = req.body;
  handleRequest(variationService.createVariation(id, body), res, 201);
}

export async function getVariationById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  handleRequest(variationService.getVariationById(id), res, 200);
}

export async function updateVariation(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const body: Variation = req.body;
  handleRequest(variationService.updateVariation(id, body), res, 200);
}

export async function deleteVariation(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(variationService.deleteVariation(id), res, 200);
  }
  
