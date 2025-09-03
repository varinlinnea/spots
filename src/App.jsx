import { useEffect, useState } from 'react'
import supabase from './supabase';
import NavBar from './components/NavBar';

import './styles/App.css';
import MainContentContainer from './components/MainContentContainer';

 function App() {

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function getSpots() {
      const { data, error } = await supabase.from('spots').select();
      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setSpots(data);
      }
    }
    getSpots();
  }, []);

  return (
    <>
        <NavBar />
      <div className="mainContentContainer">
        <MainContentContainer spots={spots} setSpots={setSpots} />
      </div>
    </>
  );
}

export default App