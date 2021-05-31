import React, { useEffect } from 'react';
import { LOCAL_WORKSPACE_KEY } from '../../constants/config';


const ShowWorkspace = ({ id, ...props }) => {


  useEffect(() => {
    
    window.localStorage.setItem(LOCAL_WORKSPACE_KEY, id);
    window.history.back();

  }, []);

  return null;
}


export default ShowWorkspace;