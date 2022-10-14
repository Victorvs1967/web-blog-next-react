import React from 'react';
import cl from 'classnames';

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const BuyMeCoffee = ({ className }) => (
  <ScreenEgg type="right">
    <div className={ cl(className, styles.buyCoffee) }>
      <a href="#!" target="_blank" className={ styles.buyCoffeeButton } rel="noopener">By me a coffee...</a>
    </div>
  </ScreenEgg>
);

export default BuyMeCoffee;