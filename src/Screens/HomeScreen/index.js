import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React from 'react';

import { iconSearch, iconSetting, iconCloud, iconRainy, iconChevron } from '../../Assets';
import { fontColor, fontColorGray } from '../../Helpers/Color';

function HomeScreen() {
  const renderItemClock = () => (
    <View style={styles.clockContent}>
      <Text style={styles.titleClock}>21:00</Text>
      <Image source={iconCloud} style={styles.iconWeatherClock} />
      <Text style={styles.subtitleClock}>26`</Text>
    </View>
  );

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.contentContainer}>

        {/** Header Section */}
        <View style={styles.headerContainer}>
          <Image source={iconSearch} style={styles.iconSearch} />
          <Text style={styles.title}>Cirebon, West Java</Text>
          <Image source={iconSetting} style={styles.iconSearch} />
        </View>

        {/** Content */}
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

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#100F0F'
  },
  contentContainer: {
    height: '100%',
    backgroundColor: '#100F0F'
  },
  title: {
    fontSize: 18,
    color: fontColor
  },
  iconSearch: {
    width: 24,
    height: 24
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 12
  },
  titleWeather: {
    fontSize: 16,
    color: fontColor
  },
  subtitleWeather: {
    fontSize: 12,
    color: fontColorGray
  },
  titleWeatherContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    paddingHorizontal: 12
  },
  iconWeather: {
    width: 38,
    height: 38,
    marginRight: 12,
    resizeMode: 'contain'
  },
  weatherContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 64
  },
  titleDegress: {
    fontSize: 64,
    color: fontColor
  },
  titleFeels: {
    fontSize: 12,
    color: fontColorGray,
    marginTop: 8
  },
  titlePrecipitation: {
    fontSize: 12,
    color: fontColor,
    marginTop: 44
  },
  boxContainerSubtitle: {
    backgroundColor: fontColorGray,
    marginVertical: 12,
    padding: 12,
    borderRadius: 8
  },
  titleBox: {
    fontSize: 12,
    color: fontColor
  },
  titleBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleBoxContainerSecond: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  iconWeatherClock: {
    width: 28,
    height: 28,
    marginVertical: 6
  },
  titleClock: {
    color: fontColorGray,
    fontSize: 12
  },
  subtitleClock: {
    color: fontColor,
    fontSize: 12
  },
  clockContent: {
    display: 'flex',
    width: 50,
    alignItems: 'center'
  },
  clockContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8
  },
  titleDay: {
    fontSize: 12,
    color: fontColor
  },
  dayContainer: {
    marginTop: 32
  },
  buttonDay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  iconDay: {
    width: 24,
    height: 24,
    marginHorizontal: 12
  },
  iconChevron: {
    width: 18,
    height: 18
  },
  contentButtonRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    height: 0.8,
    backgroundColor: fontColorGray,
    marginBottom: 16
  }
})

export default HomeScreen;