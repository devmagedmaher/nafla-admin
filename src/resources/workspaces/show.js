import React, { useEffect } from 'react';
import { LOCAL_WORKSPACE_KEY } from '../../constants/config';
import { useShowController } from 'react-admin';


const ShowWorkspace = (props) => {
  const { record } = useShowController(props);


  useEffect(() => {

    const { id, name } = record;
    window.localStorage.setItem(LOCAL_WORKSPACE_KEY, JSON.stringify({ id, name }));
    window.location = '/';

  }, [record]);

  return null;
}


export default ShowWorkspace;