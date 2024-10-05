import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Texts } from '@/constants/Texts';
import { useStore } from '@/app/state/store';

const backgroundImage = require('../assets/images/header-auth.png');
const logoImage = require('../assets/images/logo-app.png');

export default function HeaderAuth() {

  const showLogin = useStore((state) => state.showLogin)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={[
          styles.background, 
          { height: !showLogin ? 360 : 300 }
        ]}
      >
        <LinearGradient
          colors={[Colors.light.gradient3, Colors.light.gradient4]}
          style={styles.gradient}
        >
          <View style={styles.overlay}>
            <Image source={logoImage} style={styles.logo} resizeMode="contain" />
            <View style={styles.containerHeaderText}>
              <Text style={styles.headerText}>{Texts.header.textLogo1}</Text>
              <Text style={[styles.headerText, styles.headerText2]}>{Texts.header.textLogo2}</Text>
            </View>
            {!showLogin && <Text style={styles.textHeader}>{Texts.header.textHeader}</Text>}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
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
    marginTop:30
  },
  containerHeaderText: {
    flexDirection: 'row',
  },
  headerText: {
    color: Colors.light.title,
    fontSize: 62,
    fontWeight: '700',
    fontFamily: 'ManropeBold',
    lineHeight: 50,
    letterSpacing: -3,
    paddingTop:15
  },
  headerText2: {
    color: Colors.light.SubTitle,
    marginLeft: -3,
  },
  textHeader:{
    color: Colors.light.SubTitle,
    fontFamily: 'ManropeBold',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -1,
  },
});