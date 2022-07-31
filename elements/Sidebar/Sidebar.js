import { navLinks } from './constants';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'next/router';

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => navLinks.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );
  console.log(showNav);
  return (
    <>
      <button
        className="md:hidden visible absolute top-10 left-10"
        onClick={() => setShowNav(!showNav)}
      >
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
      <div
        className={`${
          showNav ? 'flex' : 'hidden'
        }  flex-col h-screen py-8 w-full md:w-2/12 bg-white border-r dark:bg-gray-800 dark:border-gray-600`}
      >
        {/* <Link href="/"> */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          prepbook
        </h2>
        {/* </Link> */}

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
            Neha
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
            Neha@example.com
          </p>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            {navLinks.map((nav) => (
              <a
                className={`flex items-center px-4 py-2 text-gray-700 rounded-md border-2 cursor-pointer
              ${activeMenu?.id === nav.id ? 'border-blue-600' : 'border-none'}
               dark:bg-gray-700 dark:text-gray-200`}
                key={nav.id}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(nav.link);
                }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mx-4 font-medium">{nav.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
