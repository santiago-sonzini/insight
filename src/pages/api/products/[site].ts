import { NextApiRequest, NextApiResponse } from "next";
import { fetchProducts } from "~/utils/products";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = await fetchProducts();
  res.status(200)
  res.json(products)
}