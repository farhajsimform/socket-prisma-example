import { prisma } from "@/db";
import { base } from "@/middlewares/base";
import { NextApiRequest, NextApiResponse } from "next";

const handler = base().post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await prisma.user.create({
      data: req.body,
    });
    return res.status(201).json(data);
  }
);

export default handler;
