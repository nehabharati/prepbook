import { Sidebar, Hero } from '../modules';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Sidebar /> */}
      <Hero />
    </div>
  );
}
