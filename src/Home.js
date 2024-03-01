import { useState } from "react";

const TextBox = () => {

    // onchange
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [current, setCurrent] = useState("");
    const [permanent, setPermanent] = useState("");

    //button
    const [n1,setN1] = useState("");
    const [e1,setE1] = useState("");
    const [c1,setC1] = useState("");
    const [p1,setP1] = useState("");

    const handleClickChange = () => {
        setN1(name);
        setE1(email);
        setC1(current);
        setP1(permanent);
    }

    return (
        // FullName display
        <div>
            
            <div style={{ textAlign: "center", color: "blue" }}>
                <h1>Testing tools</h1>
            </div>
    
            <div style={{ textAlign: "center", color: "blue" }}>
                <h2>Text Box</h2>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <div style={{ width: "30%", textAlign: "left" }}>
                    <text>Full Name</text>
                </div>
                <div style={{ width: "70%" }}>
                    <input onChange={(e) => setName(e.target.value)} type="text" style={{ width: "100%" }} placeholder="Full Name" />
                </div>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <div style={{ width: "30%", textAlign: "left" }}>
                    <text>Email</text>
                </div>
                <div style={{ width: "70%" }}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" style={{ width: "100%" }} placeholder="name@example.com" />
                </div>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <div style={{ width: "30%", textAlign: "left" }}>
                    <text>Current Address</text>
                </div>
                <div style={{ width: "70%" }}>
                    <textarea onChange={(e) => setCurrent(e.target.value)} style={{ width: "100%", height: "100px" }} placeholder="Current Address" />
                </div>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <div style={{ width: "30%", textAlign: "left" }}>
                    <text>Permanent Address</text>
                </div>
                <div style={{ width: "70%" }}>
                    <textarea onChange={(e) => setPermanent(e.target.value)} style={{ width: "100%", height: "100px" }} placeholder="Permanent Address" />
                </div>
            </div>
            <div style={{ justifyContent: "flex-end", display: "flex" }}>
                <button type="button" style={{
                    color: "#fff",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    height: "30px",
                    width: "70px",
                    borderRadius: 10
                }} onClick={handleClickChange}>Submit</button>
            </div>
            {n1 &&
                <div style={{ display: "block", border: "1px solid black", height: "auto", width: "75%" }}>
                    <div style={{width:"fit-content",marginLeft:"1%"}}>
                        <text>Name :</text>
                        <text>{n1}</text>
                    </div>
                    {e1 &&
                        <div style={{width:"fit-content",marginLeft:"1%"}}>
                            <text>Email :</text>
                            <text>{e1}</text>
                        </div>
                    }

                    { c1 &&
                        <div style={{width:"fit-content",marginLeft:"1%"}}>
                            <text>Current Address :</text>
                            <text>{c1}</text>
                        </div>
                    }

                    {p1 &&
                        <div style={{width:"fit-content",marginLeft:"1%"}}>
                            <text>Permanent Address :</text>
                            <text>{p1}</text>
                        </div>
                    }

                </div>}
        </div >
    )
}

export default TextBox;