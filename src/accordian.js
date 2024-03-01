import React,{useState} from 'react';
import { CiCircleChevDown } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
const MyAccordion = () => {
  const [show,setshow] = useState(false)
   const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;
   return (
     <div>
      <React.Fragment>
      <p style={{ fontSize: '32px' }}>Accordian</p>
      <div className="accordion" style={{height:'28px',width:'50%',marginLeft:'16%'}}>
        <div className="accordion-item">
          <div className="accordion-title" style={{display:'flex',flexDirection:'row'}}>
            <div>{title}</div>
            <CiCircleChevDown style={{marginLeft:'83%',marginTop:'1%'}} onClick={()=>setshow(!show)} />
          </div>
          {show &&
          <div className="accordion-content">{content}</div>
          }
        </div>
      </div>
    </React.Fragment>



     </div> 
   )
 }
 
 export default MyAccordion;