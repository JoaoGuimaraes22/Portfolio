import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray({ hey: "hey" })) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json({ hey: "hey" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
