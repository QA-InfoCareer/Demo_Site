import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DateTimePicker = () => {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
      console.log('Selected Date:', date);
    };
    const handleDateTimeChange = (date) => {
      setSelectedDateTime(date);
    };
    
    return (
      <div>  
       <p style={{fontSize:'32px'}}>Date Picker</p>  
       <div style={{display:'flex',flexDirection:'row'}}>
       <label for="date" style={{marginTop:'2%',marginLeft:'4%'}}>Select Date</label>  
       <div style={{marginTop:'2%',marginLeft:'20%'}}>
      <DatePicker
        selected={selectedDate}
        
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        
      />
      </div>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
       <label for="date&time" style={{marginTop:'2%',marginLeft:'4%'}}>Date And Time</label>  
       <div style={{marginTop:'2%',marginLeft:'17.5%'}}>
      <DatePicker
        selected={selectedDateTime}
        onChange={handleDateTimeChange}
        showTimeSelect
        dateFormat="MMMM dd,yyyy h:mm aa"
        timeIntervals={15}
        timeCaption="Time"
        />
      </div>
      </div>
     </div> 
    );
  };
  
  export default DateTimePicker;