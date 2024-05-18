import { prisma } from "@/db";
import { base } from "@/middlewares/base";
import { NextApiRequest, NextApiResponse } from "next";

const handler = base()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const data = await prisma.user.findFirst({
      where: {
        id: id as string,
      },
    });
    return res.status(200).json(data);
  })

export default handler;
