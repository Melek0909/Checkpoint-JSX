import './App.css';
import React from 'react';
import Profilephoto from './components/Profile/ProfilePhoto';
import Adress from './components/Profile/Address';
import Fullname from './components/Profile/FullName';

function App() {
  return (
    <div className='row'>
      <div className='col-4'>
        <Profilephoto/>
      </div>
      <div className='col-12'>
        <Fullname/>
        <Adress/>
      </div>
    </div>
  );
}

export default App;
