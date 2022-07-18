export const CustomInput = ({ label, handleEntry, placeholder }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
        {label}
      </label>
      <input
        id="name"
        placeholder={placeholder}
        type="text"
        required
        onChange={handleEntry}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>
  );
};
