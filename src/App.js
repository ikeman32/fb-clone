import React from 'react';
import './App.css';
import { Header, Sidebar } from './components';


function App() {
  return (
    <div className="app">

      <Header />

      <div className='app_body'>
        <Sidebar />
        {/*feed*/}
        {/*eidgets*/}
      </div>
    </div>
  );
}

export default App;
