import React from 'react';
const Frames=()=>{
    return(
        <div>
           <p style={{ fontSize: '32px', textAlign: 'center' }}>Frames</p>
           <div>
            <p>Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the
            parent frame, which is this window, and the two frames below</p>
           </div>
           <div id='frame1Wrapper'>
              <iframe src='https://demoqa.com/sample' id='frame1' width='500px' height='350px' />
           </div>
           <div id='frame2Wrapper'>
              <iframe src='https://demoqa.com/sample' id='frame2' width='100px' height='100px' />
           </div>
        </div>
    )
}
export default Frames