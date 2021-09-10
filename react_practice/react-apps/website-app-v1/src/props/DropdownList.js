import React from 'react'
import '../css/dropdown.css'

const DropdownList = (props) => {

    let listItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return listItems.map((props) => {
        return <li className="dropdown-item">
            {props}
        </li>   
    });
}

export default DropdownList;
