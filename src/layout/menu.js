import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Divider } from '@material-ui/core';
import { MenuItemLink, getResources, useTranslate } from 'react-admin';
import { withRouter } from 'react-router-dom';


const Menu = ({ onMenuClick, logout }) => {
  const t = useTranslate();
  const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  return (<>
    {resources.map(resource => (
      <MenuItemLink
        key={resource.name}
        to={`/${resource.name}`}
        primaryText={t(`resources.${resource.name}.name`)}
        leftIcon={createElement(resource.icon)}
        onClick={onMenuClick}
        sidebarIsOpen={open}
      />
    ))}
    <div style={{ flex: 1 }}></div>
    {isXSmall && logout}
  </>);
}

export default withRouter(Menu);