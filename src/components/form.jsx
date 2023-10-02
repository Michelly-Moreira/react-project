import React from 'react';
import styles from '../assets/css/form.module.css';

function Form({ onSubmit, children }) {
  return <form className={ styles.form } onSubmit={ onSubmit }>{ children }</form>;
}

export default Form;
