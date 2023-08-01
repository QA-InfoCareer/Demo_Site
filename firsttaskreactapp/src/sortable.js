// // // import React, { useState } from 'react';

// // // import ListGroup from 'react-bootstrap/ListGroup';
// // // import { Tabs, Tab } from 'react-bootstrap';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // const Sortable = () => {
// // //     const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
// // //     const handleClick = () => {
// // //         // Handle button click event
// // //         console.log('Button clicked!');
// // //     }
    


// // //     return (
// // //         <div>
// // //             <Tabs defaultActiveKey="tab1" id="my-tabs">
// // //                 <Tab eventKey="tab1" title="List" style={{ marginBottom: '10px' }}>
// // //                  <ListGroup >
// // //                     <div >
// // //                         {items.map((item, index) => (
// // //                             <ListGroup.Item key={index} className='list-change-list'>{item}</ListGroup.Item>
// // //                         ))}
// // //                     </div>
// // //                 </ListGroup> 
// // //                 </Tab>
// // //                 <Tab eventKey="tab2" title="Grid" style={{ marginBottom: '10px' }}>
// // //                  <div className="grid-container">
// // //                     <div className="grid-item">One</div>
// // //                     <div className="grid-item">Two</div>
// // //                     <div className="grid-item">Three</div>
// // //                     <div className="grid-item">Four</div>
// // //                     <div className="grid-item">Five</div>
// // //                     <div className="grid-item">Six</div>
// // //                 </div>
// // //                 </Tab>

// // //             </Tabs>
// // //         </div>
// // //     );
// // // };

// // // export default Sortable;

// // import React, { useState } from 'react';
// // import { Tabs, Tab } from 'react-bootstrap';
// // import { useDrag, useDrop } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';
// // import { DndProvider } from 'react-dnd';

// // const ItemTypes = {
// //   LIST_ITEM: 'listItem',
// //   GRID_ITEM: 'gridItem',
// // };

// // const Sortable = () => {
// //   const listItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
// //   const gridItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

// //   const [listOrder, setListOrder] = useState(listItems);
// //   const [gridOrder, setGridOrder] = useState(gridItems);

// //   const moveListItem = (dragIndex, hoverIndex) => {
// //     const draggedItem = listOrder[dragIndex];
// //     const updatedList = [...listOrder];
// //     updatedList.splice(dragIndex, 1);
// //     updatedList.splice(hoverIndex, 0, draggedItem);
// //     setListOrder(updatedList);
// //   };

// //   const moveGridItem = (dragIndex, hoverIndex) => {
// //     const draggedItem = gridOrder[dragIndex];
// //     const updatedGrid = [...gridOrder];
// //     updatedGrid.splice(dragIndex, 1);
// //     updatedGrid.splice(hoverIndex, 0, draggedItem);
// //     setGridOrder(updatedGrid);
// //   };

// //   const ListItem = ({ item, index }) => {
// //     const [{ isDragging }, drag] = useDrag({
// //       type: ItemTypes.LIST_ITEM,
// //       item: { index },
// //       collect: (monitor) => ({
// //         isDragging: monitor.isDragging(),
// //       }),
// //     });

// //     const [, drop] = useDrop({
// //       accept: ItemTypes.LIST_ITEM,
// //       hover: (draggedItem) => {
// //         if (draggedItem.index !== index) {
// //           moveListItem(draggedItem.index, index);
// //           draggedItem.index = index;
// //         }
// //       },
// //     });

// //     return (
// //       <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
// //         <div className="list-group-item list-group-item-action">{item}</div>
// //       </div>
// //     );
// //   };

// //   const GridItem = ({ item, index }) => {
// //     const [{ isDragging }, drag] = useDrag({
// //       type: ItemTypes.GRID_ITEM,
// //       item: { index },
// //       collect: (monitor) => ({
// //         isDragging: monitor.isDragging(),
// //       }),
// //     });

// //     const [, drop] = useDrop({
// //       accept: ItemTypes.GRID_ITEM,
// //       hover: (draggedItem) => {
// //         if (draggedItem.index !== index) {
// //           moveGridItem(draggedItem.index, index);
// //           draggedItem.index = index;
// //         }
// //       },
// //     });

// //     return (
// //       <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
// //         <div className="list-group-item list-group-item-action">{item}</div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="sortable-container" id="sortableContainer">
// //       <Tabs defaultActiveKey="list" id="demo-tabs">
// //         <Tab eventKey="list" title="List">
// //           <DndProvider backend={HTML5Backend}>
// //             <div className="vertical-list-container mt-4">
// //               {listOrder.map((item, index) => (
// //                 <ListItem key={index} item={item} index={index} />
// //               ))}
// //             </div>
// //           </DndProvider>
// //         </Tab>
// //         <Tab eventKey="grid" title="Grid">
// //           <DndProvider backend={HTML5Backend}>
// //             <div className="grid-container mt-4">
// //               <div className="create-grid">
// //                 {gridOrder.map((item, index) => (
// //                   <GridItem key={index} item={item} index={index} />
// //                 ))}
// //               </div>
// //             </div>
// //           </DndProvider>
// //         </Tab>
// //       </Tabs>
// //     </div>
// //   );
// // };

// // export default Sortable;

// import React, { useState } from 'react';
// import { Tabs, Tab } from 'react-bootstrap';
// import { useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DndProvider } from 'react-dnd';

// const ItemTypes = {
//   LIST_ITEM: 'listItem',
//   GRID_ITEM: 'gridItem',
// };

// const Sortable = () => {
//   const listItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
//   const gridItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

//   const [listOrder, setListOrder] = useState(listItems);
//   const [gridOrder, setGridOrder] = useState(gridItems);

//   const moveListItem = (dragIndex, hoverIndex) => {
//     const draggedItem = listOrder[dragIndex];
//     const updatedList = [...listOrder];
//     updatedList.splice(dragIndex, 1);
//     updatedList.splice(hoverIndex, 0, draggedItem);
//     setListOrder(updatedList);
//   };

//   const moveGridItem = (dragIndex, hoverIndex) => {
//     const draggedItem = gridOrder[dragIndex];
//     const updatedGrid = [...gridOrder];
//     updatedGrid.splice(dragIndex, 1);
//     updatedGrid.splice(hoverIndex, 0, draggedItem);
//     setGridOrder(updatedGrid);
//   };

//   const listItemStyle = {
//     // Add your inline CSS for the list items here
//     backgroundColor: '#f0f0f0',
//     padding: '8px',
//     marginBottom: '8px',
//     cursor: 'move',
//   };

//   const gridItemStyle = {
//     // Add your inline CSS for the grid items here
//     backgroundColor: '#f0f0f0',
//     padding: '8px',
//     margin: '8px',
//     display: 'inline-block',
//     cursor: 'move',
//   };

//   const ListItem = ({ item, index }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: ItemTypes.LIST_ITEM,
//       item: { index },
//       collect: (monitor) => ({
//         isDragging: monitor.isDragging(),
//       }),
//     });

//     const [, drop] = useDrop({
//       accept: ItemTypes.LIST_ITEM,
//       hover: (draggedItem) => {
//         if (draggedItem.index !== index) {
//           moveListItem(draggedItem.index, index);
//           draggedItem.index = index;
//         }
//       },
//     });

//     return (
//       <div ref={(node) => drag(drop(node))} style={{ ...listItemStyle, opacity: isDragging ? 0.5 : 1 }}>
//         {item}
//       </div>
//     );
//   };

//   const GridItem = ({ item, index }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: ItemTypes.GRID_ITEM,
//       item: { index },
//       collect: (monitor) => ({
//         isDragging: monitor.isDragging(),
//       }),
//     });

//     const [, drop] = useDrop({
//       accept: ItemTypes.GRID_ITEM,
//       hover: (draggedItem) => {
//         if (draggedItem.index !== index) {
//           moveGridItem(draggedItem.index, index);
//           draggedItem.index = index;
//         }
//       },
//     });

//     return (
//       <div ref={(node) => drag(drop(node))} style={{ ...gridItemStyle, opacity: isDragging ? 0.5 : 1 }}>
//         {item}
//       </div>
//     );
//   };

//   return (
//     <div className="sortable-container" id="sortableContainer">
//       <Tabs defaultActiveKey="list" id="demo-tabs">
//         <Tab eventKey="list" title="List">
//           <DndProvider backend={HTML5Backend}>
//             <div className="vertical-list-container mt-4">
//               {listOrder.map((item, index) => (
//                 <ListItem key={index} item={item} index={index} />
//               ))}
//             </div>
//           </DndProvider>
//         </Tab>
//         <Tab eventKey="grid" title="Grid">
//           <DndProvider backend={HTML5Backend}>
//             <div className="grid-container mt-4">
//               <div className="create-grid">
//                 {gridOrder.map((item, index) => (
//                   <GridItem key={index} item={item} index={index} />
//                 ))}
//               </div>
//             </div>
//           </DndProvider>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// };

// export default Sortable;


import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const ItemTypes = {
  LIST_ITEM: 'listItem',
  GRID_ITEM: 'gridItem',
};

const Sortable = () => {
  const listItems = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  const gridItems = [
    ['One', 'Two', 'Three'],
    ['Four', 'Five', 'Six'],
    ['Seven', 'Eight', 'Nine'],
  ];

  const [listOrder, setListOrder] = useState(listItems);
  const [gridOrder, setGridOrder] = useState(gridItems);

  const moveListItem = (dragIndex, hoverIndex) => {
    const draggedItem = listOrder[dragIndex];
    const updatedList = [...listOrder];
    updatedList.splice(dragIndex, 1);
    updatedList.splice(hoverIndex, 0, draggedItem);
    setListOrder(updatedList);
  };

  const moveGridItem = (dragIndex, hoverIndex) => {
    const draggedRow = gridOrder[dragIndex[0]];
    const updatedGrid = [...gridOrder];
    const draggedItem = draggedRow.splice(dragIndex[1], 1)[0];
    const targetRow = updatedGrid[hoverIndex[0]];
    targetRow.splice(hoverIndex[1], 0, draggedItem);
    setGridOrder(updatedGrid);
  };

  const listItemStyle = {
    // Add your inline CSS for the list items here
    backgroundColor: '#f0f0f0',
    padding: '8px',
    marginBottom: '8px',
    cursor: 'move',
  };

  const gridItemStyle = {
    // Add your inline CSS for the grid items here
    backgroundColor: '#f0f0f0',
    padding: '8px',
    margin: '8px',
    display: 'inline-block',
    cursor: 'move',
  };

  const ListItem = ({ item, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.LIST_ITEM,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.LIST_ITEM,
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveListItem(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    return (
      <div ref={(node) => drag(drop(node))} style={{ ...listItemStyle, opacity: isDragging ? 0.5 : 1 }}>
        {item}
      </div>
    );
  };

  const GridItem = ({ item, rowIndex, colIndex }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.GRID_ITEM,
      item: { rowIndex, colIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.GRID_ITEM,
      hover: (draggedItem) => {
        if (draggedItem.rowIndex !== rowIndex || draggedItem.colIndex !== colIndex) {
          moveGridItem([draggedItem.rowIndex, draggedItem.colIndex], [rowIndex, colIndex]);
          draggedItem.rowIndex = rowIndex;
          draggedItem.colIndex = colIndex;
        }
      },
    });

    return (
      <div ref={(node) => drag(drop(node))} style={{ ...gridItemStyle, opacity: isDragging ? 0.5 : 1 }}>
        {item}
      </div>
    );
  };

  return (
    <div className="sortable-container" id="sortableContainer">
      <Tabs defaultActiveKey="list" id="demo-tabs">
        <Tab eventKey="list" title="List">
          <DndProvider backend={HTML5Backend}>
            <div className="vertical-list-container mt-4">
              {listOrder.map((item, index) => (
                <ListItem key={index} item={item} index={index} />
              ))}
            </div>
          </DndProvider>
        </Tab>
        <Tab eventKey="grid" title="Grid">
          <DndProvider backend={HTML5Backend}>
            <div className="grid-container mt-4">
              <div className="create-grid">
                {gridOrder.map((row, rowIndex) =>
                  row.map((item, colIndex) => (
                    <GridItem
                      key={`${rowIndex}-${colIndex}`}
                      item={item}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                    />
                  ))
                )}
              </div>
            </div>
          </DndProvider>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Sortable;
