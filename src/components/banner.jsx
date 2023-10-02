import React from 'react';
import styles from '../assets/css/banner.module.css';

function Banner({image, alt}) {
  return <img src={ image } alt={ alt } className={ styles.image } />;
}

export default Banner;
