import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function City({defaultCity, defaultCityData}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{defaultCity?.title}</Text>
      <Text style={styles.weatherState}>
        {defaultCityData?.weather_state_name}
      </Text>
      {defaultCityData.the_temp ? (
        <Text style={styles.weatherTemp}>
          {Number(defaultCityData.the_temp).toFixed(1)}°
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  weatherState: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  weatherTemp: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});

export default City;
