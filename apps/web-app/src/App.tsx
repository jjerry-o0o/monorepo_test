import React from 'react';

import './App.css';
import { Main } from '@/pages/Main';
import { SideBar } from '@/components/layout/SideBar';

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};

export { App };
