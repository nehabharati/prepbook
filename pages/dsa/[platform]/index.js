import { QuestionList } from '../../../modules';
import prisma from '../../../lib/prisma';

export default function Platform({ feed }) {
  console.log(feed);
  return (
    <div className="relative">
      <QuestionList problems={feed} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const feed = await prisma.problemDetails.findMany();

  return {
    props: { feed },
  };
};
