import prisma from '../../../lib/prisma';

// DELETE /api/problem/:id
export default async function handle(req, res) {
  const portfolioId = req.query.id;
  const { name, image, link, technologies } = req.body;
  if (req.method === 'DELETE') {
    try {
      const deletedPortfolio = await prisma.portfolioDetails.delete({
        where: { id: parseInt(portfolioId) },
      });

      return res.status(200).json(deletedPortfolio, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error deleting portfolio', success: false });
    }
  } else if (req.method === 'PUT') {
    try {
      const updatedPortfolio = await prisma.portfolioDetails.update({
        where: { id: parseInt(portfolioId) },
        data: {
          name,
          image,
          link,
          technologies,
        },
      });

      return res.status(200).json(updatedPortfolio, { success: true });
    } catch (error) {
      console.error('Request error', error);
      res
        .status(500)
        .json({ error: 'Error updating portfolio', success: false });
    }
  }
}
