import React, { createContext, useState } from 'react';
import styles from './NavBar.module.scss';
import {
  FaGithub,
  FaDiscord,
  FaHome,
  FaTrophy,
  FaCoins,
  FaChevronRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavIsClosedContext = createContext(false);

const NavBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <NavIsClosedContext.Provider value={isClosed}>
      <nav
        className={`${
          !isClosed ? styles.NavBar : styles.NavBar + ' ' + styles.Closed
        }`}>
        <button
          className={`${
            !isClosed
              ? styles.NavBar__button
              : styles.NavBar__button + ' ' + styles.Rotate
          }`}
          onClick={() => setIsClosed(prev => !prev)}>
          <FaChevronRight />
        </button>
        <div
          className={`${
            !isClosed
              ? styles.NavBar__content
              : styles.NavBar__content + ' ' + styles.Hidden
          }`}>
          <div className={styles.Info}>
            <h1>Darkdustry</h1>
            <span>Mindustry v7 server</span>
            <div className={styles.Outer}>
              <a
                href='https://discord.gg/W8FjQXSDXR'
                target='_blank'
                rel='noreferrer'>
                <FaDiscord />
              </a>
              <a
                href='https://github.com/Darkdustry-Coders'
                target='_blank'
                rel='noreferrer'>
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.Inner}>
            <div className={styles.Link}>
              <Link to='main'>
                <FaHome /> | Home
              </Link>
            </div>
            <div className={styles.Link}>
              <Link to='second'>
                <FaTrophy /> | Second
              </Link>
            </div>
            <div className={styles.Link}>
              <Link to='third'>
                <FaCoins /> | Third
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            !isClosed
              ? styles.NavBar__user__info
              : styles.NavBar__user__info + ' ' + styles.Hidden
          }`}>
          UserProfile
        </div>
      </nav>
    </NavIsClosedContext.Provider>
  );
};

export default NavBar;
