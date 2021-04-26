import React from "react";
import {
  Card,
  CardContent,
} from '@material-ui/core';
import {
  Title,
  useTranslate,
} from 'react-admin';
import Chat from "./chat";


const Dashboard = () => {
  const t = useTranslate();


  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>{t('pages.home.welcome_message', { _: 'Welcome to Admin panel.'})}</CardContent>
      
      <Chat />
    </Card>
  );
}


export default Dashboard;