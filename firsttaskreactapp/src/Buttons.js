import React, { useState } from 'react';



const Buttons = () => {
    const [clickInfo, setClickInfo] = useState('');

    const handleClick = () => {
        setClickInfo('you have done a dynamic click');
    };

    const handleRightClick = (e) => {
        e.preventDefault(); // Prevent default context menu
        setClickInfo('you have done right click');
    };
    const handleDoubleClick = () => {
        setClickInfo('you have done a double  click');
    };

    return (
        <div style={{textAlign:"left"}}> 
            <div>           
          <button 
        style={{
            height: '40px',
            width: '200px',
            backgroundColor:"#0086b3",
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign:'center',
            border:"none"
        }}
        onDoubleClick={handleDoubleClick}
    >
        Double Click Me
    </button>
    </div>
    <br></br>
    <div>
    <button
     style={{
        height: '40px',
        width: '150px',
        backgroundColor: '#0086b3',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:"center",
        border:"none"
                        
        }}
        onContextMenu={handleRightClick}
                >
                    Right Click me
                </button>
                </div>
                <br></br>

                <div>
            <div>
                <button
                    style={{
                        height: '40px',
                        width: '100px',
                        backgroundColor: '#0086b3',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign:"center",
                        border:"none"
                    }}
                    onClick={handleClick}
                >
                    Click Me
                </button>
                </div>
            </div>
            <p>{clickInfo}</p>
        </div>
    );
};



export default Buttons;