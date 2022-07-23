// import styles from '../styles/Home.module.css';
import { Hero } from '../modules';
import prisma from '../lib/prisma';

export default function Home({ feed }) {
  return (
    <div>
      {/* <Sidebar /> */}
      <Hero />
    </div>
  );
}

// index.tsx
export const getStaticProps = async () => {
  const feed = await prisma.problemDetails.findMany();
  return {
    props: { feed },
    revalidate: 10,
  };
};
