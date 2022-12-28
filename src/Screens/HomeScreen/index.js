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
import React, { useEffect, useState } from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

import { iconSearch, iconSetting, iconCloud, iconRainy, iconSun, iconChevron } from '../../Assets';
import { styles } from './style';
import { getForeCast, temperatureConverter } from '../../Functions';

function HomeScreen() {
  const [foreCast, setForeCast] = useState([]);
  const [foreCastList, setForeCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foreCastIndex, setSetForeCastIndex] = useState(false)

  useEffect(() => {
    getForeCastWeather()
  }, [])

  const getForeCastWeather = async () => {
    try {
      const result = await getForeCast();

      if (result) {
        setForeCast(result);
        setForeCastList(result?.list);
        setSetForeCastIndex(result?.list[0]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error@getForeCastWeather', error);
    }
  }

  /** Render Clock Weather Item */
  const renderItemClock = ({ item }) => (
    <View style={styles.clockContent}>
      {isLoading ? (
        <Placeholder Animation={Fade} height={60}>
          <PlaceholderLine width={80} height={60} style={{ borderRadius: 6 }} />
        </Placeholder>
      ) : (
        <>
          <Text style={styles.titleClock}>{item?.dt_txt.slice(-8).substring(0, item?.dt_txt.slice(-8).length - 3)}</Text>
          <Image source={item?.weather?.[0]?.main == 'Rain' ? iconRainy : item?.weather?.[0]?.main == 'Clouds' ? iconCloud :  iconSun} style={styles.iconWeatherClock} />
          <Text style={styles.subtitleClock}>{temperatureConverter(item?.main?.temp)}</Text>
        </>
      )}
    </View>
  );

  /** Render Day Weather Item */
  const renderItemDay = ({ item }) => (
    <View>
      {isLoading ? (
        <Placeholder Animation={Fade} height={20} marginTop={18}>
          <PlaceholderLine height={30} style={{ borderRadius: 6 }} />
        </Placeholder>
      ) : (
        <>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.buttonDay}>
            <Text style={styles.titleDay}>{item?.dt_txt.substring(0, item?.dt_txt.length - 9)}</Text>
            <View style={styles.contentButtonRight}>
              <Text style={styles.titleDay}>{`${temperatureConverter(item?.main?.temp_min)} / ${temperatureConverter(item?.main?.temp_max)}`}</Text>
              <Image source={item?.weather?.[0]?.main == 'Rain' ? iconRainy : item?.weather?.[0]?.main == 'Clouds' ? iconCloud :  iconSun} style={styles.iconDay} />
              <Image source={iconChevron} style={styles.iconChevron} />
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#100F0F'} />
      <SafeAreaView style={styles.contentContainer}>
        <ScrollView>

          {/** Header Section */}
          <View style={styles.headerContainer}>
            <Image source={iconSearch} style={styles.iconSearch} />
            {isLoading ? <PlaceholderLine Animation={Fade} width={60} style={styles.skeletonHeader} /> : <Text style={styles.title}>{foreCast?.city?.name}</Text>}
            <Image source={iconSetting} style={styles.iconSearch} />
          </View>

          {/** Content Container */}
          <View style={styles.content}>

            {/** Weather Title Section */}
            <View style={styles.weatherContainer}>
              {isLoading ? (
                <View style={styles.placehoderWeather}>
                  <Placeholder Animation={Fade} Left={PlaceholderMedia} width={'50%'}>
                    <PlaceholderLine />
                    <PlaceholderLine width={50} />
                  </Placeholder>
                  <Placeholder Animation={Fade} width={'50%'} height={100}>
                    <PlaceholderLine height={100} style={styles.placehoderWeatherSub} />
                  </Placeholder>
                  <Placeholder Animation={Fade} width={'50%'} marginTop={30}>
                    <PlaceholderLine />
                  </Placeholder>
                </View>
              ) : (
                <>
                  <View style={styles.titleWeatherContainer}>
                    <Image source={foreCastIndex?.weather?.[0]?.main == 'Rain' ? iconRainy : foreCastIndex?.weather?.[0]?.main == 'Clouds' ? iconCloud :  iconSun} style={styles.iconWeather} />
                    <View>
                      <Text style={styles.titleWeather}>{foreCastIndex?.weather?.[0]?.description}</Text>
                      <Text style={styles.subtitleWeather}>{foreCastIndex?.weather?.[0]?.main}</Text>
                    </View>
                  </View>
                  <Text style={styles.titleDegress}>{temperatureConverter(foreCastIndex?.main?.temp)}</Text>
                  <Text style={styles.titleFeels}>{`Feels like ${temperatureConverter(foreCastIndex?.main?.feels_like)}`}</Text>
                  <Text style={styles.titlePrecipitation}>No precipitation within an hour</Text>
                </>
              )}
            </View>

            {/** Weather Subtitle Section */}
            <View style={styles.boxContainerSubtitle}>
              {isLoading ? (
                <>
                  <PlaceholderLine />
                  <PlaceholderLine />
                </>
              ) : (
                <>
                  <View style={styles.titleBoxContainer}>
                    <Text style={styles.titleBox}>{`Wind: ${foreCastIndex?.wind?.speed} m/s`}</Text>
                    <Text style={styles.titleBox}>{`Humidity: ${foreCastIndex?.main?.humidity}%`}</Text>
                    <Text style={styles.titleBox}>{`Sea Lv: ${foreCastIndex?.main?.sea_level}`}</Text>
                    <Text style={styles.titleBox}>{`Pressure: ${foreCastIndex?.main?.pressure}hPa`}</Text>
                  </View>
                  <View style={styles.titleBoxContainerSecond}>
                    <Text style={styles.titleBox}>{`Visibility: ${foreCastIndex?.visibility / 1000} Km`}</Text>
                    <Text style={styles.titleBox}>{`Temp Max: ${temperatureConverter(foreCastIndex?.main?.temp_max)}`}</Text>
                  </View>
                </>
              )}
            </View>

            {/** Weather Clock Section */}
            <View style={styles.clockContainer}>
              <FlatList
                horizontal
                data={foreCastList}
                renderItem={renderItemClock}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/** Weather Day Section */}
            <View style={styles.dayContainer}>
              <FlatList
                data={foreCastList}
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

export default HomeScreen;