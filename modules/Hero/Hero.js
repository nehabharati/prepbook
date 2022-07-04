import styles from './Hero.module.css';
import { Header } from '../Header';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 items-center justify-center flex-col">
          <img
            class="lg:w-3/12 md:w-1/5 w-1/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Introducing prepbook
            </h1>
            <p class="mb-8 leading-relaxed">
              Your one-stop to track your interview prep all at one place
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <Link href="dsa">Get Started</Link>
              </button>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
