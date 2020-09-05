import React from 'react';
import './App.css';
import { Header, Sidebar, Feed, Widgets, Login } from './components';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

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
