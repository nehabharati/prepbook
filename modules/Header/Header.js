import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const isActive = (pathname) => {
    return router.pathname === pathname;
  };
  const { data: session, data, status } = useSession();
  console.log(data);
  let left = (
    <div className="left">
      <Link href="/">
        <a className="text-xl " data-active={isActive('/')}>
          prepbook
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <>
        <Link href="/">
          <a className="text-xl " data-active={isActive('/')}>
            prepbook
          </a>
        </Link>
      </>
    );
    right = (
      <button className="inline-flex items-center bg-black text-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 rounded-lg text-sm md:mt-0">
        Login
      </button>
    );
  }

  if (!session) {
    right = (
      <>
        <Link href="/api/auth/signin">
          <button className="inline-flex items-center  bg-black text-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 rounded-lg text-sm md:mt-0">
            <span data-active={isActive('/signup')}>Log in</span>
          </button>
        </Link>
      </>
    );
  }

  if (session) {
    left = (
      <>
        <Link href="/">
          <span className="text-xl " data-active={isActive('/')}>
            prepbook
          </span>
        </Link>
      </>
    );
    right = (
      <div className="flex items-center ">
        <p className="mx-2">{session.user.name}</p>

        <button
          className="inline-flex items-center bg-black text-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 rounded-lg text-sm md:mt-0"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    );
  }
  return (
    <>
      <header className="block md:hidden">
        <nav className="container mx-auto flex flex-wrap pt-10 pb-5 px-5 md:flex-row items-baseline justify-between">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {left}
          </div>
          {/* <div>
            <button onClick={() => setShowNav(!showNav)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer block order-2 md:order-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}

          <div>
            <div className="flex items-center">
              {right}

              <button className="ml-4" onClick={() => setShowNav(!showNav)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="menu-button"
                  className="h-6 w-6 cursor-pointer block order-2 md:order-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                showNav ? 'visible' : 'hidden'
              } w-full md:flex md:items-center md:w-auto`}
              id="menu"
            >
              <ul
                className="
              md:ml-auto md:mr-auto flex flex-wrap flex-col md:flex-row md:items-end md:text-base justify-center cursor-pointer
              absolute h-full top-0 right-0 left-0 bottom-0 bg-black opacity-80 text-white  text-3xl items-center z-50 leading-10
              pt-4
             md:text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
                <button
                  className="absolute top-10 right-10"
                  onClick={() => setShowNav(false)}
                >
                  x
                </button>
                <li className="list-none">
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href={`${session ? '/dsa' : '/api/auth/signin'}`}
                    onClick={() => setShowNav(false)}
                  >
                    DSA
                  </a>
                </li>
                <li className="list-none">
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href={`${session ? '/portfolio' : '/api/auth/signin'}`}
                    onClick={() => setShowNav(false)}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="list-none">
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href={`${session ? '/notes' : '/api/auth/signin'}`}
                    onClick={() => setShowNav(false)}
                  >
                    Notes
                  </a>
                </li>
                <li className="list-none">
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href={`${session ? '/resources' : '/api/auth/signin'}`}
                    onClick={() => setShowNav(false)}
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <header className="text-gray-600 body-font md:block hidden">
        <nav>
          <div className="container mx-auto flex flex-wrap pt-5 pb-5 px-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              {left}
            </div>
            <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
              <li className="list-none">
                <a
                  href={`${session ? '/dsa' : '/api/auth/signin'}`}
                  className="mr-5 hover:text-gray-900"
                >
                  DSA
                </a>
              </li>
              <li className="list-none">
                <a
                  href={`${session ? '/portfolio' : '/api/auth/signin'}`}
                  className="mr-5 hover:text-gray-900"
                >
                  Portfolio
                </a>
              </li>
              <li className="list-none">
                <a
                  href={`${session ? '/notes' : '/api/auth/signin'}`}
                  className="mr-5 hover:text-gray-900"
                >
                  Notes
                </a>
              </li>
              <li className="list-none">
                <a
                  href={`${session ? '/resources' : '/api/auth/signin'}`}
                  className="mr-5 hover:text-gray-900"
                >
                  Resources
                </a>
              </li>
            </ul>
            {right}
          </div>
        </nav>
      </header>
    </>
  );
};
