import { useState } from 'react';
import { Form } from '../Form';
import { CirclePicker } from 'react-color';
import { colorArray } from './constants';
import { CustomInput } from '../CustomInput';

export const PlatformForm = ({ closeModal }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [name, setName] = useState('');
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });
  const handleClick = () => setDisplayColorPicker(!displayColorPicker);
  const handleChange = (color) => setColor(color.rgb);
  const handleName = (e) => setName(e.target.value);
  const handleSubmit = async (e) => {
    const { r, g, b, a } = color;
    let colorCode = `rgba(${r}, ${g}, ${b}, ${a})`;
    e.preventDefault();
    const body = { name, colorCode };
    try {
      const response = await fetch('/api/platform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        resetForm();
        console.log('form submitted successfully !!!');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const resetForm = () => {
    setName('');
    setColor('');
  };
  return (
    <div className="relative flex-auto">
      <Form>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput label={'Name'} handleEntry={handleName} />
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="color"
              >
                Color
              </label>
              <div>
                <div
                  className="p-2 bg-white border border-1 shadow-md inline-block cursor-pointer"
                  onClick={handleClick}
                >
                  <div
                    style={{
                      backgroundColor: ` rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                    }}
                    className={`w-10 h-6 border border-gray-500 mb-4`}
                  />
                  <CirclePicker
                    color={color}
                    colors={colorArray}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end py-4 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-white mr-4 rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => closeModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-white rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
