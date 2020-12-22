import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index';
export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View>
      <Ionicons name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} style={styles.reloadIcon} onPress={load} />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
});
