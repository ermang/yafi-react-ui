import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel'
import LeftPanel from './LeftPanel'
import x from './global'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">  
        <div className="col-2">    
          <LeftPanel/>
        </div>
        <div className="col">
          <MainPanel/>
        </div>
      </div> 
    </div>


  );
}



export default App;
