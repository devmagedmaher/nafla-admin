import { Layout } from 'react-admin';
import AppBar from './app-bar';
import Sidebar from './sidebar';
import Menu from './menu';


const CustomLayout = (props) => {
  console.log(props);
  return (
    <Layout
      {...props}
      appBar={AppBar}
      sidebar={Sidebar}
      menu={Menu}
    />
  );
}


export default CustomLayout;