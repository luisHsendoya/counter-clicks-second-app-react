
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../stylesheets/Button.css'

function Button({ text, ifBtnClick, handleClick }) {
  return (
    <button className={ifBtnClick ? 'btn-click btn-success rounded-pill w-50  m-5  pt-3 pb-3 fs-1 cursor-pointer' : 'btn-restart btn-danger rounded-pill w-50  m-5 pt-3 pb-3 fs-1 cursor-pointer  '} onClick={handleClick}>{text}</button>
  );

}

export default Button;