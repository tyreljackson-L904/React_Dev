import React from 'react'
import Dropdown from '../../props/Dropdown'

function Home() {
  return (      
    <div className='multiple-dropdowns'>
      <Dropdown dropdownLabel='Select Item' />   
      <Dropdown dropdownLabel='Select Item' />   
      <Dropdown dropdownLabel='Select Item' />   
      <Dropdown dropdownLabel='Select Item' />   
    </div>
  );
}

export default Home;
