export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    borderRadius: '10px',
    color: '#000',
    fontSize: '0.8rem',
    lineHeight: '1.75rem',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    outline: '0px !important',
    border: '4px solid rgba(249, 168, 212,1)',
    // boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    // ':hover': {
    //   border: '2px solid #000000',
    //   boxShadow: 'none',
    // },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#fff',
      borderRadius: '10px',
      // ':hover': {
      //   backgroundColor: 'rgb(243 244 246)',
      //   color: '#000',
      //   cursor: 'pointer',
      // },
    };
  },
  // Input: (styles) => {
  //   return {
  //     ...styles,
  //     color: '#000',
  //     fontSize: '0.8rem',
  //     lineHeight: '1.75rem',
  //     width: '100%',
  //     background: '#fff',
  //     borderRadius: '10px',
  //     // ':hover': {
  //     //   backgroundColor: 'rgb(243 244 246)',
  //     //   color: '#000',
  //     //   cursor: 'pointer',
  //     // },
  //   };
  // },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      maxWidth: '14rem',
      border: '4px solid rgba(249, 168, 212,1)',
      borderRadius: '10px',
      // boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
};
