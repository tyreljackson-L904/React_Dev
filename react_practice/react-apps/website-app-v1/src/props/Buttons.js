import React from 'react';
import { Link } from 'react-router-dom';
import '../props/props.css'

export const PrimaryButton = (props) => {
  return (
    <div className="primary-btn-container">
      <Link className="primary-btn-header">
        
          {props.title}
        
      </Link>
    </div>
  )
}

export const SecondaryButton = (props) => {
  return (
    <div className="secondary-btn-container">
      <Link exact className="secondary-btn-header">
       
          {props.title}
      
      </Link>
    </div>
  )
}