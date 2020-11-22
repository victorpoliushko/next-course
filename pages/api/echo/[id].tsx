import { NextApiRequest, NextApiResponse } from "next";

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id?: number
  }
}

export default function getById(req: IdNextApiRequest, res: NextApiResponse) {
  res.json({'id: ': req.query.id})
}