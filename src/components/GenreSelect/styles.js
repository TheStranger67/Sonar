export default function styles (state) {
  const styles = {
    control: (styles, { isFocused }) => ({ 
      ...styles, 
      width: '100%',
      color: 'white',
      backgroundColor: '#212023',
      borderRadius: '25px',
      border: 'none',
      paddingLeft: '1.2rem',
      height: '37px',
      cursor: 'pointer',
      boxShadow: isFocused
      ? '0 0 0 1px #2684ff' 
      : state === 'error' ? '0 0 0 1px #D63230' : 'none',
    }),

    singleValue: styles => ({
      ...styles, 
      color: '#ffffff',
    }),
  
    valueContainer: styles => ({ 
      ...styles,
      padding: '0',
      height: 'inherit',
    }),
  
    placeholder: styles => ({ 
      ...styles,
      color: '#acacac',
    }),
  
    dropdownIndicator: styles => ({
      ...styles,
      color: '#acacac',
      paddingRight: '1rem',
      ':hover': {
        ...styles[':hover'],
        color: 'white',
        cursor: 'pointer',
      }
    }),
  
    indicatorSeparator: styles => ({
      ...styles,
      backgroundColor: 'transparent',
    }),
  
    menu: styles => ({
      ...styles,
      width: '100%',
      backgroundColor: '#212023',
      borderRadius: '3px',
    }),
  
    menuList: styles => ({
      ...styles,
      borderRadius: '3px',
    }),
  
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected 
          ? '#0062cc' 
          : isFocused ? 'rgba(0, 98, 204, 0.5)' : '#212023',
        color: isSelected ? 
        '#ffffff' : isFocused ? '#ffffff' : '#acacac',
        paddingLeft: '1.2rem',
        ':active': {
          ...styles[':active'],
          backgroundColor: isSelected ? 'rgba(0, 98, 204, 0.5)' : '#0062cc',
        },
      };
    },
  
    noOptionsMessage: styles => ({
      ...styles,
      color: '#ffffff',
    }),
  
    input: styles => ({
      ...styles,
      color: '#ffffff',
    }),
  }

  return styles;
}
