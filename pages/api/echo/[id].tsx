import { NextApiRequest, NextApiResponse } from "next";

// interface IdNextApiRequest extends NextApiRequest {
//   query: {
//     id: string | number
//   }
// }

const getById = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(req.query.id);
};

export default getById;
