import './App.css';
import ResponsiveAppBar from './nav';
import CssBaseline from '@mui/material/CssBaseline';
import MyConcerts from './myConcerts';
import Homepage from './homepage';
import {getMyEvents} from './utils';
import { useState, useEffect } from 'react';

function App() {
  const [myConcerts, setMyConcerts] = useState(getMyEvents);
  const [allConcerts, setAllConcerts] = useState([]);
  const refreshConcerts = () => {
    setMyConcerts(getMyEvents())
  }
  useEffect(()=>{
    fetch('/data.json').then(v=>v.json()).then(v=>{
      setAllConcerts(v);
    });
  }, [])
  return (
    <>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <ResponsiveAppBar refreshConcerts={refreshConcerts} allConcerts={allConcerts}/>
        </header>
        {
          myConcerts.length > 0 ? <MyConcerts refreshConcerts={refreshConcerts} allConcerts={allConcerts}/> : <Homepage allConcerts={allConcerts} refreshConcerts={refreshConcerts}/>
        }
      </div>
    </>
  );
}

export default App;