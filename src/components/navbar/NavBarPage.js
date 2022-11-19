import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {VscRocket} from 'react-icons/vsc';
import {BiMenuAltRight} from 'react-icons/bi';

import styles from './NavBarPage.module.css';
import { Link } from "react-router-dom";

export default function NavBarPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.headerPage}>
      <h1 className={styles.logo}><VscRocket/></h1>
      <nav>
        <button
          className={styles.btnMenu}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BiMenuAltRight/>
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}> 
            <Link className={styles.itemMenu} to='/'>Home</Link> 
          </MenuItem>
          <MenuItem onClick={handleClose}> 
            <Link className={styles.itemMenu} to='/table'>Table users</Link> 
          </MenuItem>
          
        </Menu>
      </nav>
    </header>
  );
}
