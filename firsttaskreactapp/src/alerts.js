import React, { useState } from 'react';

function Alert() {
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const show = () => {
    const timer = setTimeout(() => {
      alert('This alert appeared after 5 seconds');
    }, 5000);
    return timer;

  }
  const handleConfirm = () => {

    const result = window.confirm('Do you confirm action?');

    if (result) {
      // User clicked "OK" in the confirmation box
      // Perform the desired action here
      setMessage('You Selected Ok');

    } else {
      // User clicked "Cancel" in the confirmation box
      setMessage('You Selected Cancel');
    }


  };
  const handlePrompt = () => {
    const userInput = window.prompt('Please enter your name');
    if (userInput !== null) {
      // User entered a value in the prompt box
      // Perform the desired action here
      console.log('User entered:', userInput);
      setMessage1(userInput);
    } else {
      // User clicked "Cancel" in the prompt box or left it empty
      console.log('User cancelled or did not enter any value.');
      setMessage1('');
    }
  };
  return (
    <div>
      <p style={{ fontSize: '32px', textAlign: 'center' }}>Alerts</p>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }} >
        <span>Click Button to see alert</span>
         <button style={{ backgroundColor: 'blue', borderRadius: '5px', height: '30px', color: 'white',marginLeft:'65%' }} onClick={() => alert('You clicked a button')}>Click me</button> 
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span>On button click, alert will appear after 5 seconds</span>
        <button style={{ backgroundColor: 'blue', borderRadius: '5px', height: '30px', color: 'white',marginLeft:'51%' }} onClick={show}>Click me</button>
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span>
          On button click, confirm box will appear

        </span>
        {message && <p style={{ marginLeft: '0.5%' }} className='text-success'>{message}</p>}


         <button style={{ backgroundColor: 'blue', borderRadius: '5px', height: '30px', color: 'white' ,marginLeft:'56%'}} onClick={handleConfirm}>Click me</button> 
      </div>
      <div style={{ marginTop: '1%', display: 'flex', flexDirection: 'row' }}>
        <span>On button click, prompt box will appear</span>
        {message1 && <p style={{ marginLeft: '0.5%' }} className='text-success'>You entered {message1}</p>}
        <button style={{ backgroundColor: 'blue', borderRadius: '5px', height: '30px', color: 'white',marginLeft:'56.5%' }} onClick={handlePrompt}>Click me</button> 
      </div>
    </div>
  )
}
export default Alert;   