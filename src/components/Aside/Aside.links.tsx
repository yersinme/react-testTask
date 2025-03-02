import React from 'react';
import './Aside.style.css'
import { Link } from 'react-router-dom';

const AsideLinks = ({ link }) => {

  return (
    <>
      <div className="menu_wrapper">
        <Link to={link.url} className="link"
        >{link.name}</Link>
      </div>
    </>
  )
}

export default AsideLinks;
