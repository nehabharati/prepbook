export const Form = () => {
  return (
    <section className="max-w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-4">
          <div>
            <label className="text-gray-700 dark:text-gray-200" for="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              for="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              for="passwordConfirmation"
            >
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              className="block w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        {/* <button className="bg-red-500">Save</button> */}
      </form>
    </section>
  );
};
