import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addProblem(req, res);
  } else if (req.method === 'GET') {
    return await readProblems(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function readProblems(req, res) {
  try {
    const problems = await prisma.problemDetails.findMany();
    return res.status(200).json(problems, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addProblem(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.problemDetails.create({
      data: {
        name: body.name,
        link: body.link,
        platform: body.platform,
        difficulty: body.difficulty,
        category: body.category,
        solved: body.solved,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new platform', success: false });
  }
}
