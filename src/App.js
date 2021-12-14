import * as React from "react";
import './App.css';
import { createTheme } from '@material-ui/core/styles';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList,PostShow } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import Menu from "./Menu";
import NotFound from "./NotFound";
import MyLayout from "./MyLayout";



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const theme = createTheme({
  palette: {
    type: 'dark'
  },
})

const App = () =>(
  <Admin layout={MyLayout} theme={theme} catchAll={NotFound} title="My Custom Admin" menu={Menu} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    
        <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
)


export default App;
