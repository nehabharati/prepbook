// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const { id, name, difficulty, category, solved } = req.body;
  try {
    const updateProblem = await prisma.problemDetails.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        difficulty,
        category,
        solved,
      },
    });
    res.status(200).json(updateProblem, { success: true });
  } catch (error) {
    res
      .status(403)
      .json(
        { err: 'Error occurred while updating a food item.' },
        { success: false }
      );
  }
};
