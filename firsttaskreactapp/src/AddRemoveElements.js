import React, { useState } from 'react';

// const Addremoveelements = () => {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
//   const addItem = () => {
//     const newItem = `Item ${items.length + 1}`;
//     setItems([...items, newItem]);
//   };

//   return (
//     <div>
//       <h3>Add/Remove Elements</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

const Addremoveelements= ()=>{

// const [list, setList] = React.useState([]);

//   const handleAdd = () => {
//       const items = list;
//       setList([...items, `item-${items.length}`]);
//   };

//   const handleRemove = () => {
//       const items = list;
//       if (items.length > 0) {
//           const lastIndex = items.length - 1;
//           setList(items.filter((item, index) => index !== lastIndex));
//       }
//   };

//   return (
//     <div>
//       <h3>AddRemoveElements</h3>
//       <div style={{fontSize:"20px", fontFamily:"initial"}}>List: {list.length} total items.</div>
//       <div style={{textAlign:"left"}}>
//       <button onClick={handleAdd}style={{textAlign:"center",color:"white",backgroundColor:"blue",height:"30px",width:"100px"}}>Add</button>
//       <br></br>
//       <br></br>
//       <button onClick={handleRemove} style={{textAlign:"center",color:"white",backgroundColor:"blue",height:"30px",width:"100px"}}>Remove</button>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
      
        <form  onSubmit={handleSubmit}>
          
          <h3>AddRemoveElements</h3>
          <br></br>
          <br></br>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <br></br>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Email</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
        
};


export default Addremoveelements;
