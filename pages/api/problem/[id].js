import prisma from '../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req, res) {
  console.log(req);
  const problemId = req.query.id;
  const { difficulty, category, solved, name } = req.body;
  console.log('name', name, difficulty, category, solved);
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

  //   if (req.method === 'DELETE') {
  //     const post = await prisma.problemDetails.delete({
  //       where: { id: problemId },
  //     });
  //     res.json(post);
  //   } else {
  //     throw new Error(
  //       `The HTTP ${req.method} method is not supported at this route.`
  //     );
  //   }
}
