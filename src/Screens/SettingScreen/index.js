import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { iconChevron, iconLogo } from '../../Assets';
import { styles } from './style';

export default function SettingScreen() {
  return (
    <View style={styles.detailContainer}>
      <View style={styles.header}>
        <Text style={styles.titleSetting}>Setting</Text>
      </View>
      <TouchableOpacity style={styles.titleSubsContainer}>
        <Text style={styles.titleSubs}>Different Weather?</Text>
        <Image source={iconChevron} style={styles.iconChevron} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.titleSubsContainer}>
        <Text style={styles.titleSubs}>Customize Units</Text>
        <Image source={iconChevron} style={styles.iconChevron} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.titleSubsContainer}>
        <Text style={styles.titleSubs}>Data</Text>
        <Text style={styles.titleSubsSec}>One Call API</Text>
      </View>
      <Text style={styles.titleDesc}>
        All the data for OpenWeather App is provided by One Call API". OpenWeather aggregates and processes meteorogical data from tens of thousand of weather stations, on-ground radars and satellites to bring you accurate and actionable weather data for any location worldwide.
      </Text>
      <Image source={iconLogo} style={styles.iconLogo} />
    </View>
  )
}