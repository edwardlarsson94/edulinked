import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonEdu from '@/components/ButtonEdu';
import { Colors } from '@/constants/Colors';
import { Texts } from '@/constants/Texts';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Texts.titleWelcome}</Text>
      <Text style={styles.subtitle}>{Texts.subTitleWelcome}</Text>
      <ButtonEdu 
        title={Texts.login}
        colors= {[Colors.light.gradient1, Colors.light.gradient2]}
        type='primary'
      />
      <View style={styles.registerContainer}>
        <Text style={styles.noAccountText}>{Texts.titleRegister}</Text>
        <ButtonEdu
            title={Texts.register}
            colors={[Colors.light.background,Colors.light.background]}
            type='secondary'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    color: Colors.light.title,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'ManropeBold',
    fontWeight: 800,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.SubTitle,
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 700,
    fontFamily: 'ManropeBold'
  },
  registerContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: Colors.light.border,
    borderStyle: 'solid',
    width: '100%'
  },
  noAccountText: {
    fontSize: 20,
    color: Colors.light.SubTitle,
    marginBottom: 10,
    fontFamily: 'ManropeBold',
    fontWeight: 700,
    marginTop: 24,
    paddingBottom: 12
  }
});
