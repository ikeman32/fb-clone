import React from 'react';
import './App.css';
import { Header, Sidebar, Feed } from './components';


function App() {
  return (
    <div className="app">

      <Header />

      <div className='app_body'>
        <Sidebar />
        <Feed />
        {/*eidgets*/}
      </div>
    </div>
  );
}

export default App;
