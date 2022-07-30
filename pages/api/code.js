import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addCode(req, res);
  } else if (req.method === 'GET') {
    return await getCode(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function getCode(req, res) {
  try {
    const code = await prisma.code.findMany();
    return res.status(200).json(code, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addCode(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.code.create({
      data: {
        title: body.title,
        code: body.code,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding new Code', success: false });
  }
}
