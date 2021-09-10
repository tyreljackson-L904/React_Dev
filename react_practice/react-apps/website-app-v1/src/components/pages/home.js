import React from 'react'
import '../../css/home.css'
import Dropdown from '../../props/Dropdown'

function Home() {
  return ( 
    <div className="home-container">
      <Dropdown dropdownLabel='Select Item' />  
      <Dropdown dropdownLabel='Select Item' />  
      <Dropdown dropdownLabel='Select Item' />  
      <Dropdown dropdownLabel='Select Item' />  
    </div>
  );
}

export default Home;
