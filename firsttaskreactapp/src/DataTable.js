import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';




const DataTable = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [salary, SetSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [isEdit, setisEdit] = useState(false)



    // Function to add a new row to the data table
    const addRow = () => {
        if (firstname && lastname && age && email && salary && department) {
            setData([...data, { firstname, lastname, age, email, salary, department }]);
            setFirstName('');
            setLastName('');
            setAge('');
            setEmail('');
            SetSalary('');
            setDepartment();
            setShowModal(false);
        }
    };
    const editRow = () => {
        if (firstname && lastname && age && email && salary && department) {
            // setData([...data, { firstname, lastname, age, email, salary, department }]);
            const arr = data.map((e, i) => {
                if (i == index) {
                    return { ...e, firstname, lastname, age, email, salary, department }
                } else {
                    return e
                }
            })
            setData(arr)
            setFirstName('');
            setLastName('');
            setAge('');
            setEmail('');
            SetSalary('');
            setDepartment();
            setShowModal(false);
        }
    };
    const [index, setIndex] = useState("")
    const openModal = (row, i, ind) => {
        setIndex(ind)
        setisEdit(i)
        setFirstName(row.firstname)
        setLastName(row.lastname)
        setAge(row.age)
        setEmail(row.email)
        SetSalary(row.salary)
        setDepartment(row.department)
        setShowModal(true)
    }


    // Function to delete a row from the data table
    const deleteRow = (index) => {
        setData(data.filter((_, i) => i !== index));

    };
    const open = () =>{
        setisEdit(false)
        setFirstName("")
        setLastName("")
        setAge("")
        setEmail("")
        SetSalary("")
        setDepartment("")
        setShowModal(true)
    }

    return (
        <div>
             <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
    
            <div style={{ textAlign: "center", color: "blue" }}>
                <h2>Web Table</h2>
            </div>
            <br></br>
            {/* Add Row Button */}
            <div style={{textAlign:"left"}}>

            <Button style={{textAlign:"left"}} variant="primary" onClick={() => open()}>
            Add
            </Button>
            </div>
            <br></br>
            {/* Data Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.firstname}</td>
                            <td>{row.lastname}</td>
                            <td>{row.age}</td>
                            <td>{row.email}</td>
                            <td>{row.salary}</td>
                            <td>{row.department}</td>
                            <td>
                                <AiFillEdit size={20} onClick={() => openModal(row, true, index)} />
                                <RiDeleteBinLine color='black' size={20} onClick={() => deleteRow(index)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            {/* Modal Form */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Row</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="firstname">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="lastname">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="salary">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="number"
                                value={salary}
                                onChange={(e) => SetSalary(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    {isEdit ? <Button variant="primary" onClick={editRow}>
                        update
                    </Button> : <Button variant="primary" onClick={addRow}>
                        Add
                    </Button>}
                </Modal.Footer>
            </Modal>
        </div>
    );
};



export default DataTable;