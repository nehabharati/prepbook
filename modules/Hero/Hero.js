import styles from './Hero.module.css';
import { Header } from '../Header';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <img
            className="lg:w-3/12 md:w-1/5 w-1/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Introducing prepbook
            </h1>
            <p className="mb-8 leading-relaxed">
              Your one-stop to track your interview prep all at one place
            </p>
            <div className="flex justify-center">
              <button className={`${styles.glowHover} rounded-lg`}>
                <Link href="dsa">Get Started</Link>
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
