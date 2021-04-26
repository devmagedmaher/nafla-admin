import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import { locales } from './config';
import { useSetLocale, useLocale, changeLocale } from 'react-admin';
import changeDir from './utils/change-direction';
import mapObjectToArray from './utils/map-object-to-array';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const setLocale = useSetLocale();
  const currentLocale = useLocale();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const changeLanguage = (locale) => {
    setLocale(locale);
    changeDir(locale);
    handleClose();
  }

  return (
    <div style={{ color: 'inherit' }}>
      <Button style={{ color: '#fff' }} aria-controls="language-menu" aria-haspopup="true" onClick={handleClick}>
        <LanguageIcon color='inherit' />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {mapObjectToArray(locales, (lang, locale) => (
          <MenuItem
            key={locale}
            onClick={() => changeLanguage(locale)}
            disabled={currentLocale === locale}
          >{lang.name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LanguageMenu;