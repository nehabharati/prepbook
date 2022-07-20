import React, { useEffect, useState } from 'react';
import { CodeEditorWindow, Dropdown, Output, Input } from '../../elements';
import axios from 'axios';
import { useRouter } from 'next/router';

// import { classnames } from '../utils/general';
import classNames from 'classnames';
import { languageOptions } from '../../constants/languageOptions';
import { customStyles } from '../../constants/customStyles';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import monacoThemes from 'monaco-themes/themes/themelist';

import { defineTheme } from '../../lib/defineTheme';
// import useKeyPress from '../hooks/useKeyPress';
// import Footer from './Footer';
// import CustomInput from './CustomInput';
// import OutputDetails from './OutputDetails';

const javascriptDefault = `// some comment`;

export const Playground = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('cobalt');
  const [language, setLanguage] = useState(languageOptions[0]);
  const router = useRouter();
  //   const enterPress = useKeyPress('Enter');
  //   const ctrlPress = useKeyPress('Control');

  console.log(router);

  const onSelectChange = (sl) => {
    // console.log('selected Option...', sl);
    setLanguage(sl);
  };

  //   useEffect(() => {
  //     if (enterPress && ctrlPress) {
  //       console.log('enterPress', enterPress);
  //       console.log('ctrlPress', ctrlPress);
  //       handleCompile();
  //     }
  //   }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: 'POST',
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        console.log(response);
        setOutputDetails(response.data);
        // showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
      // showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log('theme...', theme);

    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
    );
  }, []);

  //   const showSuccessToast = (msg) => {
  //     toast.success(msg || `Compiled Successfully!`, {
  //       position: 'top-right',
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   };
  //   const showErrorToast = (msg) => {
  //     toast.error(msg || `Something went wrong! Please try again.`, {
  //       position: 'top-right',
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <Dropdown
            onChange={onSelectChange}
            placeholder="Language"
            options={languageOptions}
            defaultValue={languageOptions[0]}
            styles={customStyles}
          />
        </div>
        <div className="px-4 py-2">
          <Dropdown
            onChange={handleThemeChange}
            defaultValue={theme}
            styles={customStyles}
            placeholder="Theme"
            options={Object.entries(monacoThemes).map(
              ([themeId, themeName]) => ({
                label: themeName,
                value: themeId,
                key: themeId,
              })
            )}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <Output outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <Input customInput={customInput} setCustomInput={setCustomInput} />
            <button
              onClick={handleCompile}
              disabled={!code}
              className={classNames(
                'mt-4 bg-black z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 text-white flex-shrink-0',
                !code ? 'opacity-50' : ''
              )}
            >
              {processing ? 'Processing...' : 'Compile and Execute'}
            </button>
          </div>
          {/* {outputDetails && <OutputDetails outputDetails={outputDetails} />} */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
