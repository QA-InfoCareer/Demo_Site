import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tippy from '@tippyjs/react';
const TooltipExample=()=>{ 
    return (
      
      <div>
        <p style={{ fontSize: '32px' }}>Tool Tips</p>
        <span style={{margin:'4%'}}>Practice Tool Tips</span>
       <div style={{marginTop:'4%',marginLeft:'3%'}}> 
        <Tippy content="Hover me to see">
        <button type="button" class="btn btn-success">Hover me to see</button>
        </Tippy>
        </div> 
      </div>
        
    );
  };
  
  export default TooltipExample;