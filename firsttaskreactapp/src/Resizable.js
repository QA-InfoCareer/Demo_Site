import React, { useState, useEffect } from 'react';
import { Resizable } from 'react-resizable';

const ResizableDraggable = () => {
  const minWidth = 150;
  const maxWidth = 500;
  const minHeight = 150;
  const maxHeight = 300;

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [isDragging, setIsDragging] = useState(false);
  const [isDragging1, setIsDragging1] = useState(false);

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  useEffect(() => {
    // Add event listeners for mousemove and mouseup at the document level
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove1);
    document.addEventListener('mouseup', handleMouseUp1);


    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove1);
      document.addEventListener('mouseup', handleMouseUp1);
  
    };
  }, [isDragging]); // Only add/remove event listeners when the dragging state changes

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialX(event.clientX - width);
    setInitialY(event.clientY - height);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newWidth = event.clientX - initialX;
      const newHeight = event.clientY - initialY;
      setWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));
      setHeight(Math.min(Math.max(newHeight, minHeight), maxHeight));
    }
  };

//
const handleMouseDown1 = (event) => {
    setIsDragging1(true);
    setInitialX(event.clientX - width);
    setInitialY(event.clientY - height);
  };

  const handleMouseUp1 = () => {
    setIsDragging1(false);
  };

  const handleMouseMove1 = (event) => {
    if (isDragging1) {
      const newWidth = event.clientX - initialX;
      const newHeight = event.clientY - initialY;
      setWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));
      setHeight(Math.min(Math.max(newHeight, minHeight), maxHeight));
    }
  };


  

  const resizableContainerStyle = {
    width: '500px',
    height: '300px',
    overflow: 'hidden',
  };

  const resizableBoxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: '#f0f0f0',
    padding: '8px',
    border: '1px solid black',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'move',
    marginbottom:"10px"

  };

  const resizableBoxStyle1 = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: '#f0f0f0',
    padding: '8px',
    border: '1px solid black',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'move',
    marginbottom:"10px"
  };

  return (
    <>
    <div className="resizable-draggable.constraint-area" style={resizableContainerStyle}>
      <div className="fixed">
        <div
          className="resizable-draggable"
          style={resizableBoxStyle}
          onMouseDown={handleMouseDown}
        >
          <text>Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</text>
        
        </div>
      </div>
      <br />

    </div>
          <div>
          <div
            className="resizable-draggable"
            style={resizableBoxStyle1}
            onMouseDown={handleMouseDown1}
          >
            <text>Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</text>
          
          </div>
        </div>
        </>
  );
};

export default ResizableDraggable;


// import React from 'react';
// import { Resizable } from 'react-resizable';
// import 'react-resizable/css/styles.css';

// const ResizableDraggable = () => {
//   const minWidth = 150;
//   const maxWidth = 500;
//   const minHeight = 150;
//   const maxHeight = 300;

//   const handleConstrainedResize = (event, { size }) => {
//     const newWidth = Math.min(Math.max(size.width, minWidth), maxWidth);
//     const newHeight = Math.min(Math.max(size.height, minHeight), maxHeight);
//     return { width: newWidth, height: newHeight };
//   };

//   const handleUnconstrainedResize = (event, { size }) => {
//     return size;
//   };

//   const resizableContainerStyle = {
//     width: '500px',
//     height: '300px',
//     border: '1px solid',
//     backgroundColor: '#ccc',
//     position: 'relative',
//   };
//   const resizableBoxStyle = {
//     width: '200px',
//     height: '200px',
//     backgroundColor: '#f0f0f0',
//     padding: '8px',
//     border: '1px solid',
//     backgroundColor: 'white',
//     position: 'relative',
//     display: 'inline-block',
//   };

//   const resizeHandleStyle = {
//     background: 'gray',
//     bottom: '0',
//     right: '0',
//     width: '10px',
//     height: '10px',
//     position: 'relative',
//     cursor: 'se-resize',
//   };

//   return (
//     <div className="resizable-container" style={resizableContainerStyle}>
//       <div className="constraint-area">
//         <Resizable
//           className="box react-resizable"
//           style={resizableBoxStyle}
//           minWidth={minWidth}
//           maxWidth={maxWidth}
//           minHeight={minHeight}
//           maxHeight={maxHeight}
//           onResize={handleConstrainedResize}
//           resizeHandles={['se']}
//         >
          
//           <div>
//             <div className="text" >Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</div>
//             <span className="react-resizable-handle react-resizable-handle-se" id="resizableContainer" style={resizeHandleStyle}></span>
//           </div>
//         </Resizable>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="resizable-nolimit mt-4">
//         <Resizable
//           className="box react-resizable"
//           style={resizableBoxStyle}
//           onResize={handleUnconstrainedResize}
//           resizeHandles={['se']}
//         >
//           <div>
//             <div className="text">Resizable</div>
//             <span className="react-resizable-handle react-resizable-handle-se" style={resizeHandleStyle}></span>
//           </div>
//         </Resizable>
//       </div>
//     </div>
//   );
// };

// export default ResizableDraggable;









// import React, { useState, useEffect } from 'react';
// import { Resizable } from 'react-resizable';

// const ResizableDraggable = () => {
//   const minWidth = 150;
//   const maxWidth = 500;
//   const minHeight = 150;
//   const maxHeight = 300;

//   const [width1, setWidth1] = useState(200);
//   const [height1, setHeight1] = useState(200);
//   const [isDragging1, setIsDragging1] = useState(false);
//   const [initialX1, setInitialX1] = useState(0);
//   const [initialY1, setInitialY1] = useState(0);

//   const [width2, setWidth2] = useState(200);
//   const [height2, setHeight2] = useState(200);
//   const [isDragging2, setIsDragging2] = useState(false);
//   const [initialX2, setInitialX2] = useState(0);
//   const [initialY2, setInitialY2] = useState(0);

//   useEffect(() => {
//     // Add event listeners for mousemove and mouseup at the document level
//     document.addEventListener('mousemove', handleMouseMove1);
//     document.addEventListener('mouseup', handleMouseUp1);

//     // Remove event listeners when the component unmounts
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove1);
//       document.removeEventListener('mouseup', handleMouseUp1);
//     };
//   }, [isDragging1]); // Only add/remove event listeners when the dragging state changes

//   useEffect(() => {
//     // Add event listeners for mousemove and mouseup at the document level
//     document.addEventListener('mousemove', handleMouseMove2);
//     document.addEventListener('mouseup', handleMouseUp2);

//     // Remove event listeners when the component unmounts
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove2);
//       document.removeEventListener('mouseup', handleMouseUp2);
//     };
//   }, [isDragging2]); // Only add/remove event listeners when the dragging state changes

//   const handleMouseDown1 = (event) => {
//     setIsDragging1(true);
//     setInitialX1(event.clientX - width1);
//     setInitialY1(event.clientY - height1);
//   };

//   const handleMouseUp1 = () => {
//     setIsDragging1(false);
//   };

//   const handleMouseMove1 = (event) => {
//     if (isDragging1) {
//       const newWidth = event.clientX - initialX1;
//       const newHeight = event.clientY - initialY1;
//       setWidth1(Math.min(Math.max(newWidth, minWidth), maxWidth));
//       setHeight1(Math.min(Math.max(newHeight, minHeight), maxHeight));
//     }
//   };

//   const handleMouseDown2 = (event) => {
//     setIsDragging2(true);
//     setInitialX2(event.clientX - width2);
//     setInitialY2(event.clientY - height2);
//   };

//   const handleMouseUp2 = () => {
//     setIsDragging2(false);
//   };

//   const handleMouseMove2 = (event) => {
//     if (isDragging2) {
//       const newWidth = event.clientX - initialX2;
//       const newHeight = event.clientY - initialY2;
//       setWidth2(Math.min(Math.max(newWidth, minWidth), maxWidth));
//       setHeight2(Math.min(Math.max(newHeight, minHeight), maxHeight));
//     }
//   };

//   const resizableContainerStyle = {
//     width: '500px',
//     height: '300px',
//     overflow: 'hidden',
//   };

//   const resizableBoxStyle = {
//     width: '200px',
//     height: '200px',
//     backgroundColor: '#f0f0f0',
//     padding: '8px',
//     border: '1px solid black',
//     position: 'relative',
//     display: 'inline-block',
//     verticalAlign: 'middle',
//     cursor: 'move',
//   };

//   return (
//     <div className="resizable-draggable.constraint-area" style={resizableContainerStyle}>
//       <div className="fixed">
//         <Resizable
//           className="resizable-draggable"
//           style={{ ...resizableBoxStyle, width: `${width1}px`, height: `${height1}px` }}
//           onResize={(event, { size }) => {
//             setWidth1(size.width);
//             setHeight1(size.height);
//           }}
//         >
//           <text>Resizable box 1, starting at 200x200. Min size is 150x150, max is 500x300.</text>
//         </Resizable>
//       </div>
//       <br />
//       <div
//         className="resizable-draggable"
//         style={{ ...resizableBoxStyle, width: `${width2}px`, height: `${height2}px` }}
//         onMouseDown={handleMouseDown2}
//       >
//         <text>Resizable box 2</text>
//       </div>
//     </div>
//   );
// };

// export default ResizableDraggable;
