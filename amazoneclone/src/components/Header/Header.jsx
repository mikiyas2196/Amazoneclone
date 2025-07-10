import React from 'react';
import classes from './Header.module.css';
import LOGO from '../../asset/icons/LOGO.png';
import US_flag from '../../asset/icons/US_flag.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>

      <header className={classes.header}>
      {/* Left Section */}
      <div className={classes.leftSection}>
        <a href="/" className={classes.logoLink}>
          <img src={LOGO} alt="Amazon logo" className={classes.logo} />
        </a>

        <div className={classes.location}>
          <LocationOnIcon className={classes.locationIcon} />
          <div>
            <p className={classes.locationLineOne}>Deliver to</p>
            <span className={classes.locationLineTwo}>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className={classes.searchSection}>
        <select className={classes.searchDropdown}>
          <option value="all">All</option>
        </select>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search Amazon"
        />
        <SearchIcon className={classes.searchIcon} />
      </div>

      {/* Right Section */}
      <div className={classes.rightSection}>
        {/* Language */}
        <div className={classes.language}>
          <img src={US_flag} alt="US flag" className={classes.flag} />
          <select className={classes.languageSelect}>
            <option value="EN">EN</option>
          </select>
        </div>

        <a href="#" className={classes.signInItem}>
          <p className={classes.signInLineOne}>Sign In</p>
          <span className={classes.signInLineTwo}>Account & Lists</span>
        </a>


        {/* Returns & Orders */}
        <a href="#" className={classes.navItem}>
          <p className={classes.navLineOne}>Returns</p>
          <span className={classes.navLineTwo}>& Orders</span>
        </a>

        {/* Cart */}
        <a href="#" className={classes.cart}>
          <ShoppingCartIcon className={classes.cartIcon} />
          <span className={classes.cartCount}>0</span>
        </a>
      </div>
     
     
      
    </header>
    
    <LowerHeader />
    </>
    
  );
}

export default Header;
