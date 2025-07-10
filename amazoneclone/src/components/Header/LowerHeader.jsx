import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import classes from './LowerHeader.module.css';

function LowerHeader() {
  return (
    <div className={classes.lowerHeader}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <MenuIcon />
          <p>All</p>
        </li>
        <li className={classes.navItem}>Today's Deals</li>
        <li className={classes.navItem}>Customer Service</li>
        <li className={classes.navItem}>Registry</li>
        <li className={classes.navItem}>Gift Cards</li>
        <li className={classes.navItem}>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
