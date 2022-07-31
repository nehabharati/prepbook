import React, { useEffect, useState } from 'react';
import { CodeEditorWindow, Dropdown, Output, Back } from '../../elements';
import { Header } from '../Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { languageOptions } from '../../constants/languageOptions';
import { customStyles } from '../../constants/customStyles';
import monacoThemes from 'monaco-themes/themes/themelist';
import { defineTheme } from '../../lib/defineTheme';
const javascriptDefault = `// some comment`;

export const Playground = ({ codeText }) => {
  const [codeValue, setCodeValue] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('cobalt');
  const [language, setLanguage] = useState(languageOptions[0]);
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    setCodeValue(codeText);
  }, []);

  const onSelectChange = (sl) => {
    setLanguage(sl);
  };

  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCodeValue(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(codeValue),
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

    let title = code?.split('-').join(' ');
    const body = { title, code: codeValue };

    try {
      const response = await fetch('/api/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
      } else {
        // window.location.reload();
        console.log('form submitted successfully !!!');
      }
    } catch (error) {
      console.log('there was an error submitting', error);
    }
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
  console.log(code);
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

  return (
    <>
      <Header />
      <Back />
      <div className="flex flex-col w-full px-6">
        <h1 className="mb-4 capitalize">{code?.split('-').join(' ')}</h1>
        <div className="flex md:flex-row flex-col">
          <div className="bg-black w-full rounded-t-lg">
            <div className="flex flex-col md:flex-row w-full">
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
            <div className="w-full h-full justify-start items-end">
              <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme.value}
              />
            </div>
          </div>
          <div className="right-container flex flex-shrink-0 w-full md:w-[30%] flex-col">
            <Output outputDetails={outputDetails} />
            <div className="flex flex-col items-end">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!code}
                className={classNames(
                  'mt-4 bg-black z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 text-white flex-shrink-0',
                  !code ? 'opacity-50' : ''
                )}
              >
                {processing ? 'Processing...' : 'Compile and Execute'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
