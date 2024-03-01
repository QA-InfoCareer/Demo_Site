import React from 'react';
import './menu.css'; // Assume you have a CSS file (Menu.css) for styling

const Menus = () => {
  return (
   <div> 
    <p style={{fontSize:'32px'}}>Menu</p>
    <div style={{marginTop:'3%',marginLeft:'38%'}}>
    <div className="menu-container">
      <ul className="main-menu">
        <li>
          <a href="/">Main Item 1</a>

        </li>
        <li>
          <a href="/">Main Item 2</a>
          <ul className="dropdown-menu">
            <li>
              <a href="/subitem">Sub Item</a>
            </li>
            <li>
              <a href="/subitem1">Sub Item</a>
            </li>
            <li>
              <a href="/subitem2">SUB SUB LIST</a>
              <ul className="sub-sub-menu">
                <li>
                  <a href="/subitem4">Sub Sub Item1</a>
                </li>
                <li>
                  <a href="/subitem4">Sub Sub Item2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Main Item 3</a>

        </li>
      </ul>
    </div>
    </div>
    </div> 
  );
};

export default Menus;