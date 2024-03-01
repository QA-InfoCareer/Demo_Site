import React,{useState} from 'react';

import './slider.css';
const MySlider = () => {
  const [sliderValue, setSliderValue] = React.useState(25);
  const [bubble,setBubble] = useState('')
  const handleHover = () => {
    setBubble(true);
  };

  const handleHoverExit = () => {
    setBubble(false);
  };
  return (
   <div>
    <p style={{fontSize:'32px'}}>Slider</p>
    <div style={{display:'flex',flexDirection:'row',marginTop:'7%'}}>
      
    
      <input type='range' value={sliderValue} onChange={(e)=>setSliderValue(e.target.valueAsNumber)}  max={100} className='input'/>
      <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {bubble ? sliderValue : ""}
    </div>
       <input value={sliderValue} style={{marginLeft:'1%',border:'1px solid black',marginTop:'-1%'}}></input>
    </div>
  </div>  
  );
};

export default MySlider;