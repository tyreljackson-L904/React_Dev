import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import DropdownList from './DropdownList';


function Dropdown(props) {
  const [listItem, selectListItem] = useState(props.listItem)
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }

    return (
        <div>
          <ul className='dropdown-list'>
            <label
              className='dropdown-label'
              onClick={toggleMenu}>
              {props.dropdownLabel}
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </label> 
            <li className="dropdown-item-list-container">
              {isOpen && <div className="dd-list-items">
                <DropdownList />
              </div>}     
            </li>
          </ul>
        </div>
    );
}

export default Dropdown;
