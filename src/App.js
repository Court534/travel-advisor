import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header'
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import { getPlaceData } from './API';
import { Data } from '@react-google-maps/api';

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getPlaceData()
      .then((data) => {  // <-- Was having issue with this part of the code causing a issue with the rendering
        console.log(data);
        
        setPlaces(data);
      })
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={setCoordinates}
          />
        </Grid>
      </Grid>
    </>
  )
};

export default App;