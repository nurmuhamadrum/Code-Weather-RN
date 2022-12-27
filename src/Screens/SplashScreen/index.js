import {
  View,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { iconLogo } from '../../Assets';
import { styles } from './style';

function SplashScreen() {
  const navigation = useNavigation();

  setTimeout(function () {
    navigation.navigate('Home');
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.contentContainer}>
        <Image source={iconLogo} style={styles.iconLogo} />
      </SafeAreaView>
    </View>
  )
}

export default SplashScreen;