import React from 'react';
import cl from 'classnames';
import { AiFillYoutube, AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetwors = [
  {
    id: 1,
    href: '#!',
    icon: AiFillYoutube,
  },
  {
    id: 2,
    href: '#!',
    icon: AiFillGithub,
  },
  {
    id: 3,
    href: '#!',
    icon: AiFillLinkedin,
  },
  {
    id: 4,
    href: '#!',
    icon: AiFillFacebook,
  },
];

const SocialNetworks = ({ className }) => (
  <ScreenEgg type="left">
    <ul className={ cl(className, styles.list) }>
    { socialNetwors.map(item => 
      <li 
        key={ item.id } 
        className={ styles.listItem }>
        <a 
          href={ item.href } 
          target="_blank" 
          rel="noreferrer" 
          className={ styles.listLink }
        >
          { React.createElement(item.icon, {color: 'black', size: 50}) }
        </a>
      </li>) 
    }
    </ul>
  </ScreenEgg>
);

export default SocialNetworks;