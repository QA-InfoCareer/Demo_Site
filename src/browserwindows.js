import React from 'react';

function BW(){
    const handleOpenNewTab = () => {
        window.open('https://demoqa.com/sample', '_blank');
      };
      const handleOpenNewWindow = () => {
        const newWindow = window.open('https://demoqa.com/sample', '_blank', "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
        if (newWindow) {
          newWindow.focus();
        }
      };
      const handleOpenNewWindowmessage = () => {
        const newWindows = window.open('', '_blank', "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
        newWindows.document.write('<p>Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.</p>');
        newWindows.document.close();
      };
    return(
         <div>
            <p style={{fontSize:'32px',textAlign:'center'}}>Browser Windows</p>
            <div><button style={{backgroundColor:'blue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewTab}>New Tab</button></div>
            <div><button style={{backgroundColor:'blue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewWindow}>New Window</button></div>
            <div><button style={{backgroundColor:'blue',margin:'1%',borderRadius:'5px',height:'30px'}} onClick={handleOpenNewWindowmessage}>New Window Message</button></div>
         </div>
    )
}
export default BW;