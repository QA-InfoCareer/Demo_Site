// // import React from 'react';
// // import { Tabs, Tab } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './styles.css';



// // const Drag = () => {
// //     const boxStyles = {
// //         position: 'relative',
// //         left: '97px',
// //         top: '76px',
// //     };
// //     return (
// //         <div>
// //             <Tabs defaultActiveKey="tab1" id="my-tabs">
// //                 <Tab eventKey="tab1" title="Simple" style={{ marginBottom: '10px' }}>
// //                     {/* <div className="drag">
// //                 <p>Dragme</p>

// //              </div> */}
// //                     <div className="drag-box ui-draggable ui-draggable-handle"
// //                         id="dragBox"
// //                         style={boxStyles}>Drag me</div>
// //                 </Tab>
// //                 <Tab eventKey="tab2" title="Axis Restricted" style={{ marginBottom: '10px' }}>
// //                     <div id="restrictedX" class="drag-box ui-draggable ui-draggable-handle" style={{ position: "relative", left: "22px", top: "0px" }}>Only X</div>
// //                     {/* <div id="restrictedY" class="drag-box ui-draggable ui-draggable-handle" style={{position: "relative", left:"0px", top: "-22px"}}>Only Y</div> */}
// //                 </Tab>
// //                 <Tab eventKey="tab3" title="Container Restricted" style={{ marginBottom: '10px' }}>


// //                 </Tab>
// //                 <Tab eventKey="tab" title="Cursor Style" style={{ marginBottom: '10px' }}>


// //                 </Tab>

// //             </Tabs>
// //         </div>

// //     );
// // };
// // export default Drag;

// import React from 'react';
// import { Tabs, Tab } from 'react-bootstrap';
// import Draggable from 'react-draggable'; // Import the react-draggable component
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

// const Drag = () => {
//   return (
//     <div>
//       <Tabs defaultActiveKey="tab1" id="my-tabs">
//         <Tab eventKey="tab1" title="Simple" style={{ marginBottom: '10px' }}>
//           <Draggable>
//             <div className="drag-box" id="dragBox">
//               Drag me
//             </div>
//           </Draggable>
//         </Tab>
//         <Tab eventKey="tab2" title="Axis Restricted" style={{ marginBottom: '10px' }}>
//           <Draggable axis="x">
//             <div className="drag-box" id="restrictedX">
//               Only X
//             </div>
//           </Draggable>
//           <Draggable axis="y">
//             <div className="drag-box" id="restrictedX">
//               Only y
//             </div>
//           </Draggable>
//         </Tab>
//         <Tab eventKey="tab3" title="Container Restricted" style={{ marginBottom: '10px' }}>
//           {/* Add container here */}
//         </Tab>
//         <Tab eventKey="tab" title="Cursor Style" style={{ marginBottom: '10px' }}>
//           {/* Add draggable element with cursor style here */}
//         </Tab>
//       </Tabs>
//     </div>
//   );
// };

// export default Drag;
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Draggable from 'react-draggable'; // Import the react-draggable component
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Drag = () => {
    const boxStyles = {
        width: '100px',
        height: '40px',
        padding: '5px',
        margin: '1rem',
        verticalAlign: 'middle',
        border: '1px dashed black',
        cursor: 'move',
        textAlign: 'center',
    };
    const draggableElementStyle = {
        position: 'relative',
        left: '257.4px',
        top: '90px',
    }; const handleDrag = (event, ui) => {
        // You can add custom logic here if needed
        console.log('Dragging:', ui);
    };
    const containmentWrapperStyle = {
        width: '200px',
        height: '200px',
        border: '1px solid black',
        position: 'relative',
    };

    return (
        <div>
            <Tabs defaultActiveKey="tab1" id="my-tabs">
                <Tab eventKey="tab1" title="Simple" style={{ marginBottom: '10px' }}>
                    <Draggable>
                        <div className="drag-box" id="dragBox" style={boxStyles}>
                            Drag me
                        </div>
                    </Draggable>
                </Tab>
                <Tab eventKey="tab2" title="Axis Restricted" style={{ marginBottom: '10px' }}>
                    <Draggable axis="x">
                        <div className="drag-box" id="restrictedX" style={boxStyles}>
                            Only X
                        </div>
                    </Draggable>
                    <Draggable axis="y">
                        <div className="drag-box" id="restrictedX" style={boxStyles}>
                            Only y
                        </div>
                    </Draggable>
                </Tab>
                <Tab eventKey="tab3" title="Container Restricted" style={{ marginBottom: '10px' }}>
                    <div style={{
                        width: '95%',
                        height: '200px',
                        border: '2px solid #ccc',
                        padding: '10px',
                        marginTop: '20px',
                      
                    }} >
                        <div >
                            <div style={{
                               borderStyle: "ridge", width: '150px',
                                height: '50px',
                                padding: '5px',
                                margin: '1rem',
                                
            
                            }}> 
                            <div style={{position:'relative'}}>
                            <div><p > i'm contained within the box</p></div> </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div style={{
                            borderStyle: "ridge", width: '150px',
                            height: '150px',
                            padding: '5px',
                            margin: '1rem',
                        

                        

                        }}>
                            <div > I'm contained within my parent</div>
                        </div>
                    </div>









                </Tab>
                <Tab eventKey="tab" title="Cursor Style" style={{ marginBottom: '10px' }}>
                    {/* Add draggable element with cursor style here */}
                    <div className="dragable-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* I will always stick to the center */}
                        <Draggable>
                            <div id="cursorCenter" className="drag-box ui-draggable ui-draggable-handle" style={{
                                marginTop: "25px", width: '100%',
                                height: '100%',
                                padding: '5px',
                                verticalAlign: 'middle',
                                border: '1px dashed black',
                                cursor: 'move',
                                textAlign: 'center',
                            }}>
                                I will always stick to the center
                            </div>
                        </Draggable>

                        {/* My cursor is at top left */}
                        <Draggable>
                            <div id="cursorTopLeft" className="drag-box ui-draggable ui-draggable-handle" style={{
                                marginTop: "25px", width: '100%',
                                height: '100%',
                                padding: '5px',
                                verticalAlign: 'middle',
                                border: '1px dashed black',
                                cursor: 'move',
                                textAlign: 'center',
                            }}>
                                My cursor is at top left
                            </div>
                        </Draggable>

                        {/* My cursor is at bottom */}
                        <Draggable>
                            <div id="cursorBottom" className="drag-box ui-draggable ui-draggable-handle" style={{
                                marginTop: "25px", width: '100%', height: '100%',
                                padding: '5px',
                                verticalAlign: 'middle',
                                border: '1px dashed black',
                                cursor: 'move',
                                textAlign: 'center',
                            }}>
                                <span className="bottom-text">My cursor is at bottom</span>
                            </div>
                        </Draggable>
                    </div>

                </Tab>
            </Tabs>
        </div>
    );
};

export default Drag;


