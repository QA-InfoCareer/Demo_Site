import React from 'react';
const NestedFrames=()=>{
    return(
        <div>
           <p style={{ fontSize: '32px', textAlign: 'center' }}>Nested Frames</p> 
           <div>
            <p>
            Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. 
            In total you can switch between the parent frame and the nested child frame.
            </p>
           </div>
           <div id='frame1Wrapper'>
            
             <iframe src='https://demoqa.com/sampleiframe'  id='frame1' width='500px' height='350px'></iframe>
              
           </div>
        </div>
        )
    }
    export default NestedFrames