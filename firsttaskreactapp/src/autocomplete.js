import React, { useState } from 'react';
import Select from 'react-select'
const AutocompleteExample = () => {
  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'pink', value: 'pink' },
    { label: 'White', value: 'white' },
    { label: 'Purple', value: 'purple' },
    { label: 'Violet', value: 'violet' },
    { label: 'Orange', value: 'orange' },
    { label: 'Black', value: 'black' },
    // Add more colors as needed...
  ];
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return colorOptions.filter(
      (color) => color.label.toLowerCase().includes(inputValueLowerCase)
    );
  };
  const onChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setSuggestions(getSuggestions(inputValue));
  };
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
  };
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange1 = (selectedOptions) => {
    setSelectedColors(selectedOptions);
  };

 return (
    <div>
      <p style={{ fontSize: '32px' }}>Auto Complete</p>
      <span style={{ margin: '2%' }}>Type multiple color names</span>
      <div style={{ height: '28px', width: '50%',textAlign:'center' }}>
       <Select
         value={selectedColors}
         onChange={handleColorChange1}
         options={colorOptions}
         isClearable
         isSearchable
         isMulti
      />
       
      </div>
      <span style={{ margin: '2%' }}>Type single color name</span>
      <div style={{ height: '28px', width: '50%',textAlign:'center' }}>
      <Select
        value={selectedColor}
        onChange={handleColorChange}
        options={colorOptions}
        isClearable
        isSearchable
        isMulti={false}
      />
       </div>
    </div>
  )

};

export default AutocompleteExample;