import prisma from '../../../lib/prisma';

// DELETE /api/problem/:id
export default async function handle(req, res) {
  const noteId = req.query.id;
  const { title, description } = req.body;
  if (req.method === 'DELETE') {
    try {
      const deletedNote = await prisma.noteDetails.delete({
        where: { id: parseInt(noteId) },
      });

      return res.status(200).json(deletedNote, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error deleting note', success: false });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedNote = await prisma.noteDetails.update({
        where: { id: parseInt(noteId) },
        data: {
          title,
          description,
        },
      });

      return res.status(200).json(updatedNote, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error updating note', success: false });
    }
  }
}
