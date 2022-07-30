import styles from './Hero.module.css';
import { Header } from '../Header';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className={`${styles.heroContainer} h-[calc(100vh-100px)]`}>
      <Header />
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto flex px-5 items-center justify-between flex-col h-full">
          <div className="m-8 md:w-1/5">
            <Image
              src={'/assets/Notes.png'}
              alt="Picture of the author"
              className="md:p-10"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Introducing prepbook
            </h1>
            <p className="mb-8 leading-relaxed">
              Your one-stop to track your interview prep all at one place
            </p>
            <div className="flex justify-center">
              <button className={`${styles.glowHover} rounded-lg`}>
                <Link href="/dsa">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
