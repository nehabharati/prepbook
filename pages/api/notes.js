import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addNote(req, res);
  } else if (req.method === 'GET') {
    return await getNotes(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function getNotes(req, res) {
  try {
    const notes = await prisma.noteDetails.findMany();
    return res.status(200).json(notes, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addNote(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.noteDetails.create({
      data: {
        title: body.title,
        description: body.description,
        link: body.link,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding new note', success: false });
  }
}
