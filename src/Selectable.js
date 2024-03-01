import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sortable = () => {
  const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac'];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedGridItems, setSelectedGridItems] = useState([]);

  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleGridItemClick = (index) => {
    if (selectedGridItems.includes(index)) {
      setSelectedGridItems(selectedGridItems.filter((item) => item !== index));
    } else {
      setSelectedGridItems([...selectedGridItems, index]);
    }
  };

  return (
    <div>
      <Tabs defaultActiveKey="tab1" id="my-tabs">
        <Tab eventKey="tab1" title="List" style={{ marginBottom: '10px' }}>
          <style>
            {`
              .list-change-list:hover {
                background-color: lightblue;
                cursor: pointer;
              }
              .list-change-list.selected {
                background-color: blue;
                color: white;
              }
            `}
          </style>
          <ListGroup>
            <div>
              {items.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className={`list-change-list ${selectedItems.includes(index) ? 'selected' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </ListGroup.Item>
              ))}
            </div>
          </ListGroup>
        </Tab>
        <Tab eventKey="tab2" title="Grid" style={{ marginBottom: '10px' }}>
          <style>
            {`
              .grid-item {
                display: inline-block;
                border: 1px solid #ccc;
                padding: 10px;
                margin: 5px;
                cursor: pointer;
              }
              .grid-item.selected {
                background-color: blue;
                color: white;
              }
            `}
          </style>
          <div className="grid-container">
            {['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((item, index) => (
              <div
                key={index}
                className={`grid-item ${selectedGridItems.includes(index) ? 'selected' : ''}`}
                onClick={() => handleGridItemClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Sortable;
