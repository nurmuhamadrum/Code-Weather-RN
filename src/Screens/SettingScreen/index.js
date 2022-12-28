import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React from 'react';
import { bgColorPrimary, fontColor } from '../../Helpers/Color';

export default function SettingScreen() {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.titleDetail}>Detail Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: bgColorPrimary,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleDetail: {
    fontSize: 16,
    color: fontColor
  }
})