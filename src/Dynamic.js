import React, { useState } from 'react';

const Dynamic = () => {
    const [isButton1Disabled, setButton1Disabled] = useState(false);
    const [isButton2Disabled, setButton2Disabled] = useState(false);
    const [isButton3Disabled, setButton3Disabled] = useState(false);

    const disableButtonsForSeconds = 5; // Number of seconds to disable the buttons

    const handleButtonClick = (buttonNumber) => {
        switch (buttonNumber) {
            case 1:
                setButton1Disabled(true);
                break;
            case 2:
                setButton2Disabled(true);
                break;
            case 3:
                setButton3Disabled(true);
                break;
            default:
                break;
        }

        setTimeout(() => {
            switch (buttonNumber) {
                case 1:
                    setButton1Disabled(false);
                    break;
                case 2:
                    setButton2Disabled(false);
                    break;
                case 3:
                    setButton3Disabled(false);
                    break;
                default:
                    break;
            }
        }, disableButtonsForSeconds * 1000); // Convert seconds to milliseconds
    };

    const buttonStyle = { margin: '5px', padding: '10px 20px', cursor: 'pointer' };

    return (
        <div>
            <h2>Timer-based Disabled Buttons</h2>
            <button
                onClick={() => handleButtonClick(1)}
                disabled={isButton1Disabled}
                style={{ ...buttonStyle, backgroundColor: isButton1Disabled ? 'gray' : 'blue' }}
            >
               Button 1
            </button>

            <button
                onClick={() => handleButtonClick(2)}
                disabled={isButton2Disabled}
                style={{ ...buttonStyle, backgroundColor: isButton2Disabled ? 'gray' : 'green' }}
            >
                Button 2
            </button>

            <button
                onClick={() => handleButtonClick(3)}
                disabled={isButton3Disabled}
                style={{ ...buttonStyle, backgroundColor: isButton3Disabled ? 'gray' : 'red' }}
            >
                Button 3
            </button>
        </div>
    );
};

export default Dynamic;