import React, { useState } from 'react';
import Select from 'react-select';
import { button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
const StudentRegistrationForm = () => {

  const [dropdown1Value, setDropdown1Value] = useState([]);
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value] = useState('');
  const [showModal, setShowModal] = useState(false);


  const [Name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [address, setAddress] = useState("");
  const [file, setFile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const dropdown1Options = [
    { value: 'Tamil', label: 'Tamil' },
    { value: 'English', label: 'English' },
    { value: 'maths', label: 'maths' },
    { value: 'chemistry', label: 'chemistry' },
    { value: 'Biology', label: 'Biology' },
    // Add more options for dropdown1
  ];

  const dropdown2Options = [
    { value: 'TamilNadu', label: 'TamilNadu' },
    { value: 'kerla', label: 'kerla' },
    // Add more options for dropdown2
  ];
  const dropdown3Options = [
    { value: 'Madurai', label: 'Madurai' },
    { value: 'Trichy', label: 'Trichy' },
    { value: 'kolam', label: 'kolam' },
    { value: 'kottyam', label: 'kottyam' },
    // Add more options for dropdown2
  ];


  const handleDropdown1Change = (event) => {
    console.log(event,"mkk")
    setDropdown1Value(event);
    // setSubjects(event.value)
    const data = event.map((e)=>{
      return e.value
    })
    setSubjects(data.join(", "))
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event);
    setState(event.value)
  };

  function handleChange(e) {
    if (e.target.checked) {
      setHobbies([...hobbies, e.target.value]);
    } else {
      setHobbies(hobbies.filter((item) => item !== e.target.value));
    }
  }

  const handleDropdown3Change = (event) => {
    setDropdown3Value(event);
    setCity(event.value)
  };

  const handleOpenModal = () => {
    console.log(subjects)
    setShowModal(true)
  };
  const handleCloseModal = () => {
    setShowModal(false)
    setName("");
    setLastname("");
    setAddress("");
    setCity("");
    setState("");
    setGender("");
    setMobile("");
    setSubjects("");
    setHobbies([]);
    setFile("");
  };
  return (
    <form>
      {/* <h1><left>StudentRegistrationForm</left></h1> */}
      <div>
        <Modal show={showModal} onHide={handleCloseModal} className='modal-lg'>
          <Modal.Header>
            <Modal.Title>Thanks for submitting the form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className='my_table' style={{width:"100%"}}>
              <tr>
                <td>Lable</td>
                <td>Value</td>
              </tr>
              <tr>
                <td>Student Name</td>
                <td>{Name} {lastname}</td>
              </tr>
              <tr>
                <td>Student Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>{mobile}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{dob}</td>
              </tr>
              <tr>
                <td>Subjects</td>
                <td>{subjects}</td>
              </tr>
              <tr>
                <td>Hobbies</td>
                <td>{hobbies}</td>
              </tr>
              <tr>
                <td>Picture</td>
                <td>{file}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>State and City</td>
                <td>{state},{city}</td>
              </tr>
            </table>

          </Modal.Body>
          <Modal.Footer><button id='closebtn' onClick={handleCloseModal}>Close</button></Modal.Footer>
        </Modal>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "left", color: "black" }}>
            <text style={{ fontWeight: 'bold' }}>StudentRegistrationForm</text>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30", textAlign: "left" }}></div>
          <text>Name</text>
          <div style={{ width: "70%", border: "5px" }}>
            <input type='text' style={{ width: "30%" }} onChange={(e) => setName(e.target.value)} placeholder='First Name'></input>
            <input type='text' style={{ width: "30%", marginLeft: "10px" }} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name'></input>
          </div>
        </div></div>
      <br></br>

      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>Email</text>
        </div>
        <div style={{ border: "5px", width: "43%" }}>
          <input type='email' onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} placeholder='name@example.com' marginLeft></input>
        </div>
      </div>
      <br></br>
      <div>
        <div style={{ display: "flex", textAlign: "left" }}>
          <div style={{ width: "18%" }}>
            <text>Gender</text>
          </div>
          <div>
            <input name="male" value="male" type='radio' onChange={(e) => setGender(e.target.value)} /><label style={{ marginRight: "20px" }}>Male </label>
            <input name='male' value="female" type='radio' onChange={(e) => setGender(e.target.value)} /><label style={{ marginRight: "20px" }}>Female</label>
            <input name='male' value="others" type='radio' onChange={(e) => setGender(e.target.value)} /><label style={{ marginRight: "20px" }}>others</label>
          </div>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>MobileNumber<br />(10Digits)</text>
        </div>
        <div style={{ border: "5px", width: "43%" }}>
          <input type='tel' onChange={(e) => setMobile(e.target.value)} maxLength={10} style={{ width: "100%" }} placeholder='MobileNumber' marginLeft></input>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>Date of Birth</text>
        </div>
        <div style={{ border: "5px", width: "18%" }}>
          <input type='date' onChange={(e) => setDob(e.target.value)} style={{ width: "100%" }} placeholder='18 jul 2023' marginLeft></input>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>Subject</text>
        </div>
        <div style={{ border: "1px solid", width: "43%", }}>
          <Select
            value={dropdown1Value}
            options={dropdown1Options}
            onChange={handleDropdown1Change}
            placeholder="Select subjects"
            isMulti={true}
          />
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "18%" }}>
            <text>Hobbies</text>
          </div>
          <div>
            <input name="sport" type='checkbox'  value="Sports" onChange={(e) => handleChange(e)} /><label style={{ marginRight: "20px" }}>Sports </label>
            <input name='sport' type='checkbox' value="Reading" onChange={(e) => handleChange(e)} /><label style={{ marginRight: "20px" }}>Reading</label>
            <input name='sport' type='checkbox' value="Music" onChange={(e) => handleChange(e)} /><label style={{ marginRight: "20px" }}>Music</label>
          </div>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>Picture</text>
        </div>
        <div>
          <div style={{}}>
            <label style={{ marginRight: "20px" }}>Select Picture </label>
          </div>
          <input type='file' onChange={(e)=>{setFile(e.target.files[0].name);console.log(e.target.files[0])}}></input>
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>Current Address</text>
        </div>
        <div style={{ border: "5px", width: "43%" }}>
          <textarea onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", height: "150px"}} placeholder='Current Address' marginLeft />
        </div>
      </div>
      <br></br>
      <div style={{ textAlign: "left", display: "flex" }}>
        <div style={{ width: "18%" }}>
          <text>State and City</text>
        </div>
        <div style={{border:"1px solid"}}>
          <Select
            value={dropdown2Value}
            options={dropdown2Options}
            onChange={handleDropdown2Change}
            placeholder="Select state"
          />
        </div>
        <div style={{border:"1px solid"}}> 
          <Select
            value={dropdown3Value}
            options={dropdown3Options}
            onChange={handleDropdown3Change}
            placeholder="Select city"
          />
        </div>

      </div>
      <br></br>

      <button type="button" onClick={handleOpenModal} className='button'>Submit</button>
    </form>
  );
};

export default StudentRegistrationForm;
