import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

//image
import weather from './components/assets/images/weatherIMG.jpg';

//api
import Weather from './components/api/Weather';

//components
import City from './components/view/city/index';
import Search from './components/view/search/index';

function App() {
  const [defaultCity, setDefaultCity] = useState('');
  const [defaultCityData, setDefaultCityData] = useState([]);

  useEffect(() => {
    Weather.search('new')
      .then(response => {
        setDefaultCity(response?.data[0]);
        Weather.location(response?.data[0].woeid)
          .then(res => setDefaultCityData(res.data.consolidated_weather[0]))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={weather} resizeMode="cover" style={styles.image}>
        <City defaultCity={defaultCity} defaultCityData={defaultCityData} />
        <Search
          setDefaultCity={setDefaultCity}
          setDefaultCityData={setDefaultCityData}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
