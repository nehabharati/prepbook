import prisma from '../../../lib/prisma';

// DELETE /api/problem/:id
export default async function handle(req, res) {
  const problemId = req.query.id;
  const { difficulty, category, solved, name } = req.body;
  if (req.method === 'DELETE') {
    try {
      const deletedProblem = await prisma.problemDetails.delete({
        where: { id: parseInt(problemId) },
      });

      return res.status(200).json(deletedProblem, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error deleting platform', success: false });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedProblem = await prisma.problemDetails.update({
        where: { id: parseInt(problemId) },
        data: {
          name,
          difficulty,
          category,
          solved,
        },
      });

      return res.status(200).json(updatedProblem, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error updating platform', success: false });
    }
  }
}
