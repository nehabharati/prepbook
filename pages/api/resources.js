import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addResource(req, res);
  } else if (req.method === 'GET') {
    return await readResources(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function readResources(req, res) {
  try {
    const problems = await prisma.resourceDetails.findMany();
    return res.status(200).json(problems, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addResource(req, res) {
  const body = req.body;
  console.log(body);
  try {
    const newEntry = await prisma.resourceDetails.create({
      data: {
        name: body.name,
        link: body.link,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new resource', success: false });
  }
}
