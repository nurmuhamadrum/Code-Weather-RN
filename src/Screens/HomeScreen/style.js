import { StyleSheet } from 'react-native';
import { fontColor, fontColorGray } from '../../Helpers/Color';

export const styles = StyleSheet.create({
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
  },
  skeletonHeader: {
    marginTop: 6
  },
  placehoderWeather: {
    display: 'flex', 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  placehoderWeatherSub: {
    borderRadius: 6, 
    marginTop: 12
  }
})