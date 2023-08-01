import React, { useState } from 'react';

const RadioButton = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1,setSelectedValue1]= useState('');
    const handleRadioChange = () => {
        setSelectedValue("you have selected yes");
    };

    const handleRadioChange1 = () =>{

        setSelectedValue1("you have selected impressive")
    }


    return (
        <div>
             <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
    
            <div style={{ textAlign: "center", color: "black" }}>
                <h3>RadioButton</h3>
            </div>
        <div style={{textAlign:"left",width:"70%",fontSize:"20px"}}>Do you like this site?</div>
            <div style={{ display: "flex" ,justifyContent:"space-evenly"}}>
                <div >
                    <input
                        type="radio"
                        id="option1"
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="option1">yes</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="option2"
                        onChange={handleRadioChange1}
                    />
                    <label htmlFor="option2">Impressive</label>
                </div>
                <div style={{cursor:"not-allowed"}}>
                    <input
                        type="radio"
                        id="option3"
                        value="Option 3 (Disabled)"
                        checked={selectedValue === 'Option 3 (Disabled)'}
                        onChange={handleRadioChange}
                        disabled
                    />
                    <label htmlFor="option3">No(Disabled)</label>
                </div>
            </div>
            {selectedValue && (
                <div>
                    <p>{selectedValue}</p>
                    <p>{selectedValue1}</p>
                </div>
            )}
        </div>
    );
};



export default RadioButton;