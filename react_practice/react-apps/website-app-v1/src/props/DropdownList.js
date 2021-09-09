import React from 'react'

const DropdownList = (props) => {

    let listItems = ['option 1', 'option 2', 'option 3', 'option 4'];

    return listItems.map((props) => {
        return <li className="list-item">
            {props}
        </li>
    });
}

export default DropdownList;
