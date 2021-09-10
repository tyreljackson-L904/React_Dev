import React, { useState } from 'react';
import '../css/dropdown.css';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import DropdownList from './DropdownList';


function Dropdown(props) {
  const [listItem, selectListItem] = useState(props.listItem)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  

  return (  
    <div className='dropdown'>
      <div className="dropdown-header" onClick={toggleMenu}>
        <div className='dropdown-btn'>
          <p>Select Item</p>
        </div>
        <div className='dropdown-arrow'>
          <span> { isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
      </div>
      {isOpen && <div className="dropdown-list">
        <DropdownList />
      </div>}
    </div>
  );
}

export default Dropdown;
