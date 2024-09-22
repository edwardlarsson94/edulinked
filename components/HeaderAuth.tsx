import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Texts } from '@/constants/Texts';

const backgroundImage = require('../assets/images/header-auth.png');
const logoImage = require('../assets/images/logo-app.png');

export default function HeaderAuth() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
    <LinearGradient
        colors={[Colors.light.gradient3, Colors.light.gradient4]}
        style={styles.gradient}
    >
      <View style={styles.overlay}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        <View style={styles.containerHeaderText}>
            <Text style={styles.headerText}>{Texts.textLogo1}</Text>
            <Text style={[styles.headerText,styles.headerText2]}>{Texts.textLogo2}</Text>
        </View>
      </View>
    </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  containerHeaderText: {
    flexDirection: 'row'
  },
  headerText: {
    color: Colors.light.title,
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'ManropeBold',
    lineHeight: 50,
    letterSpacing: -3
  },
  headerText2: {
    color: Colors.light.SubTitle,
    marginLeft: -3
  }
});
