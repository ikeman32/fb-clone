import React from 'react';
import './App.css';
import { Header, Sidebar, Feed, Widgets, Login } from './components';



function App() {
  const user = 'null';
  return (
    <div className="app">
      {!user ?
        <Login /> :
        <>
          <Header />

          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      }
    </div>
  );
}

export default App;
