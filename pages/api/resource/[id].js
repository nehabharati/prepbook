import prisma from '../../../lib/prisma';

// DELETE /api/problem/:id
export default async function handle(req, res) {
  const resourceId = req.query.id;
  const { link, name } = req.body;
  if (req.method === 'DELETE') {
    try {
      const deletedResource = await prisma.resourceDetails.delete({
        where: { id: parseInt(resourceId) },
      });

      return res.status(200).json(deletedResource, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error deleting resource', success: false });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedResource = await prisma.resourceDetails.update({
        where: { id: parseInt(resourceId) },
        data: {
          name,
          link,
        },
      });

      return res.status(200).json(updatedResource, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error updating resource', success: false });
    }
  }
}
