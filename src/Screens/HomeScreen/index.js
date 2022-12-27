import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';

import { iconSearch, iconSetting, iconCloud, iconRainy, iconChevron } from '../../Assets';
import { styles } from './style';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#100F0F'}/>
      <SafeAreaView style={styles.contentContainer}>
        <ScrollView>

          {/** Header Section */}
          <View style={styles.headerContainer}>
            <Image source={iconSearch} style={styles.iconSearch} />
            <Text style={styles.title}>Cirebon, West Java</Text>
            <Image source={iconSetting} style={styles.iconSearch} />
          </View>

          {/** Content Container */}
          <View style={styles.content}>

            {/** Weather Title Section */}
            <View style={styles.weatherContainer}>
              <View style={styles.titleWeatherContainer}>
                <Image source={iconCloud} style={styles.iconWeather} />
                <View>
                  <Text style={styles.titleWeather}>Overcast Cloud</Text>
                  <Text style={styles.subtitleWeather}>Light breeze</Text>
                </View>
              </View>
              <Text style={styles.titleDegress}>26`C</Text>
              <Text style={styles.titleFeels}>Feels like 26`C</Text>
              <Text style={styles.titlePrecipitation}>No precipitation within an hour</Text>
            </View>

            {/** Weather Subtitle Section */}
            <View style={styles.boxContainerSubtitle}>
              <View style={styles.titleBoxContainer}>
                <Text style={styles.titleBox}>Wind: 3.1 m/s</Text>
                <Text style={styles.titleBox}>Humidity: 81%</Text>
                <Text style={styles.titleBox}>UV Index: 0.3</Text>
                <Text style={styles.titleBox}>Pressure: 1012hPa</Text>
              </View>
              <View style={styles.titleBoxContainerSecond}>
                <Text style={styles.titleBox}>Visibility: 10.0km</Text>
                <Text style={styles.titleBox}>Dew Point: 22`</Text>
              </View>
            </View>

            {/** Weather Clock Section */}
            <View style={styles.clockContainer}>
              <FlatList
                horizontal
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={renderItemClock}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/** Weather Day Section */}
            <View style={styles.dayContainer}>
              <FlatList
                data={[0, 1, 2, 3, 4, 5, 6]}
                renderItem={renderItemDay}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

/** Render Clock Weather Item */
const renderItemClock = () => (
  <View style={styles.clockContent}>
    <Text style={styles.titleClock}>21:00</Text>
    <Image source={iconCloud} style={styles.iconWeatherClock} />
    <Text style={styles.subtitleClock}>26`</Text>
  </View>
);

/** Render Day Weather Item */
const renderItemDay = (item) => (
  <View>
    {item.index !== 0 && <View style={styles.divider} />}
    <TouchableOpacity style={styles.buttonDay}>
      <Text style={styles.titleDay}>Tue Dec 27</Text>
      <View style={styles.contentButtonRight}>
        <Text style={styles.titleDay}>28 / 25`C</Text>
        <Image source={iconRainy} style={styles.iconDay} />
        <Image source={iconChevron} style={styles.iconChevron} />
      </View>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;