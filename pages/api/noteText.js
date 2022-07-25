import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addNoteText(req, res);
  } else if (req.method === 'GET') {
    return await getNoteText(req, res);
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false });
  }
}

async function getNoteText(req, res) {
  try {
    const notes = await prisma.note.findMany();
    return res.status(200).json(notes, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error reading from database', success: false });
  }
}

async function addNoteText(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.note.create({
      data: {
        title: body.title,
        text: body.text,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error('Request error', error);
    res
      .status(500)
      .json({ error: 'Error adding new NoteText', success: false });
  }
}
