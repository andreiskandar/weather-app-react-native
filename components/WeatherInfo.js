import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;
export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.WeatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.WeatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.WeatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: 'center',
  },
  WeatherDescription: {
    textTransform: 'capitalize',
  },
  WeatherIcon: {
    borderStyle: 'solid',
    borderColor: 'black',
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '600',
    marginTop: 10,
  },
});
