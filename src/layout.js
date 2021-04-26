import { Layout as RALayout } from 'react-admin';
import AppBar from './appBar';
import Sidebar from './sidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

const Layout = (props) => <RALayout
    {...props}
    appBar={AppBar}
    sidebar={Sidebar}
    // menu={MyMenu}
    // notification={MyNotification}
/>;

export default Layout;