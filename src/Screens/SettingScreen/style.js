import { StyleSheet } from 'react-native';
import { bgColorPrimary, fontColor, fontColorGray } from '../../Helpers/Color';

export const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: bgColorPrimary,
    height: '100%',
    paddingHorizontal: 12
  },
  header: {
    alignItems: 'center',
    marginVertical: 12
  },
  titleSetting: {
    fontSize: 18,
    color: fontColor
  },
  titleSubs: {
    fontSize: 14,
    color: fontColor
  },
  iconChevron: {
    width: 18,
    height: 18
  },
  titleSubsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  divider: {
    height: 0.8,
    backgroundColor: fontColorGray,
    marginVertical: 16
  },
  titleSubsSec: {
    fontSize: 14,
    color: fontColorGray
  },
  titleDesc: {
    fontSize: 14,
    color: fontColorGray,
    marginTop: 18,
    lineHeight: 22
  },
  iconLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})