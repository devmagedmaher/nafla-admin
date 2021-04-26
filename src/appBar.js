import React, { forwardRef } from 'react';
import { AppBar as RAAppBar, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageMenu from './language-menu';

const ConfigurationMenu = forwardRef(({ onClick }, ref) => (
    <MenuItemLink
        ref={ref}
        to="/configuration"
        primaryText="Configuration"
        leftIcon={<SettingsIcon />}
        onClick={onClick} // close the menu on click
    />
));

const MyUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu />
        <LanguageMenu />
    </UserMenu>
);

const AppBar = props => (
    <RAAppBar color='primary' {...props} userMenu={<MyUserMenu />}>
        <div style={{ flex: 1 }} />
        <LanguageMenu />
    </RAAppBar>
);

export default AppBar;