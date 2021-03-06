import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function UnitPicker({ unit, setUnit }) {
  return (
    <View style={styles.unit}>
      <Picker selectedValue={unit} onValueChange={(item) => setUnit(item)} mode='dropdown' itemStyle={{ fontSize: 12 }}>
        <Picker.Item label='C°' value='metric' />
        <Picker.Item label='F°' value='imperial' />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unit: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 200,
        left: 50,
      },
    }),
    // left: 20,
    height: 50,
    width: 100,
  },
});
