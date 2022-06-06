import React from 'react';
import styles from './Card.module.scss';
import { ICard } from '../../../interfaces';

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__name}>
        <span>{props.mode}</span>
      </div>
      <div className={styles.Card__image}>
        <img src={props.image} alt='' />
      </div>
      <div className={styles.Card__description}>
        {props.ipPort}
        <br />
        {props.description}
      </div>
    </div>
  );
};

export default Card;
