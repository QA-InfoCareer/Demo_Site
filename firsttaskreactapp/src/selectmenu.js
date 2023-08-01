import React, { useState } from 'react';
import Select from 'react-select';
const Selectmenu = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptions1, setSelectedOptions1] = useState([]);

    const options1 = [
        { value: 'Volvo', label: 'Volvo' },
        { value: 'Saab', label: 'Saab' },
        { value: 'Opel', label: 'Opel' },
        { value: 'Audi', label: 'Audi' },
        // Add more options as needed
    ];
    const handleSelectChange1 = (event) => {
        const { options } = event.target;
        const selectedValues = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }

        setSelectedOptions1(selectedValues);
    };
    const options = [
        { value: 'Green', label: 'Green' },
        { value: 'Blue', label: 'Blue' },
        { value: 'Black', label: 'Black' },
        { value: 'Red', label: 'Red' }
        // Add more options as needed
    ];
    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };
    return (
        <div>
            <p style={{ fontSize: '32px' }}>Select Menu</p>
            <div style={{ margin: '3%' }}>
                <p>Select Value</p>
                <select style={{ height: '28px', width: '50%' }}>
                    <option value="" disabled selected hidden>
                        Select Option
                    </option>
                    <option value="" disabled>Group1</option>
                    <option value="">Group1 , option1</option>
                    <option value="">Group1 , option2</option>
                    <option value="" disabled>Group2</option>
                    <option value="">Group2 , option1</option>
                    <option value="">Group2 , option2</option>
                    <option value="">A root option</option>
                    <option value="">Another root option</option>
                </select>
            </div>
            <div style={{ marginTop: '0.3%', marginLeft: '3%' }}>
                <p>Select One</p>
                <select style={{ height: '28px', width: '50%' }}>
                    <option value="" disabled selected hidden>
                        Select Title
                    </option>
                    <option value="" disabled>PICK ONE TITLE</option>
                    <option value="">Dr.</option>
                    <option value="">Mr.</option>
                    <option value="">Mrs.</option>
                    <option value="">Ms.</option>

                    <option value="">Prof.</option>
                    <option value="">Other</option>
                </select>
            </div>
            <div style={{ marginTop: '0.3%', marginLeft: '3%' }}>
                <p>Old Style Select Menu</p>
                <select style={{ height: '28px', width: '10%' }}>
                    <option value='red'>Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>

                    <option value="white">White</option>
                    <option value="violet">Violet</option>
                    <option value="indigo">Indigo</option>
                    <option value="magenta">Magenta</option>
                    <option value="aqua">Aqua</option>
                </select>
            </div>
            <div style={{ marginTop: '0.6%', marginLeft: '3%' }}>
                <p style={{ color: 'black' }}>Multiselect drop down</p>
                <div style={{ height: '28px', width: '50%',marginLeft:'26%' }}>
                    <Select
                        options={options}
                        isMulti
                        value={selectedOptions}
                        onChange={handleSelectChange}

                    />
                </div>
            </div>
            <div style={{ marginTop: '3%', marginLeft: '3%' }}>
                <p style={{ color: 'black' }}>Standard multi select</p>
                <select multiple value={selectedOptions1} onChange={handleSelectChange1}>
                    {options1.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Selectmenu