import React from 'react';
import styles from './Cards.module.css';

function Cards() {
  return (
    <div>
      <ul className={styles.cards}>
        <li>
          <div></div>
          <p>Description</p>
          <button>Read more</button>
          <button>Github</button>
          <button>Demo</button>
        </li>
        <li>Education</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Cards;
