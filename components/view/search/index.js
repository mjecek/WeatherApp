import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//api
import Weather from '../../api/Weather';

function Search({setDefaultCity, setDefaultCityData}) {
  const onChange = text => {
    if (text === '') {
      text = 'new';
    }
    Weather.search(text)
      .then(response => {
        if (response.data[0] === undefined) {
          setDefaultCity('');
          setDefaultCityData([]);
        } else {
          setDefaultCity(response.data[0]);
          Weather.location(response.data[0].woeid)
            .then(res => setDefaultCityData(res.data.consolidated_weather[0]))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => onChange(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    color: 'white',
  },
});

export default Search;
