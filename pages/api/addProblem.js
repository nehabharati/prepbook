// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  try {
    const addProblem = await prisma.problemDetails.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(addProblem, { success: true });
  } catch (error) {
    res
      .status(403)
      .json(
        { err: 'Error occurred while updating a food item.' },
        { success: false }
      );
  }
};
