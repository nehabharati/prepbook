import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addProblem(req, res);
  } else if (req.method === 'GET') {
    return await readProblems(req, res);
  } else if (req.method === 'UPDATE') {
    return await updateProblem(req, res);
  } else if (req.method === 'DELETE') {
    return await deleteProblem(req, res);
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

async function updateProblem(req, res) {
  const { body } = req;
  const { difficulty, category, solved, name } = body;
  try {
    const updatedProblem = await prisma.problemDetails.update({
      where: { id },
      data: {
        name: name,
        difficulty: difficulty,
        category: category,
        solved: solved,
      },
    });
    return res.status(200).json(updatedProblem, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new platform', success: false });
  }
}

async function deleteProblem(req, res) {
  const { body } = req;
  const { id } = body;
  try {
    const deletedProblem = await prisma.problemDetails.delete({
      where: { id },
    });

    return res.status(200).json(deletedProblem, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new platform', success: false });
  }
}
