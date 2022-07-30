import { useRef, useState, useEffect } from 'react';

export const Image = ({ setImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileSelectedHandler = (e) => {
    setSelectedImage(e.target.files[0]);
    setImage(e.target.files[0].name);
  };
  return (
    <div className="flex flex-col relative">
      <span>Upload Image</span>
      <div className="flex items-baseline">
        <input
          type="file"
          id="actual-btn"
          hidden
          onChange={fileSelectedHandler}
        />
        <label
          className="inline-block bg-white border border-gray-200 w-full p-2 cursor-pointer rounded-lg text-center"
          for="actual-btn"
        >
          Choose File
        </label>

        <span id="file-chosen" className="mx-2">
          {selectedImage?.name}
        </span>
      </div>
    </div>
  );
};
