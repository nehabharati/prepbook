import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addPortfolio(req, res);
  } else if (req.method === 'GET') {
    return await getPortfolio(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function getPortfolio(req, res) {
  try {
    const notes = await prisma.portfolioDetails.findMany();
    return res.status(200).json(notes, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addPortfolio(req, res) {
  const body = req.body;
  const { name, image, link, technologies } = body;
  try {
    const newEntry = await prisma.portfolioDetails.create({
      data: {
        name,
        image,
        link,
        technologies,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new portfolio', success: false });
  }
}
