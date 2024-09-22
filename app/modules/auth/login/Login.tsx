import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Texts } from '@/constants/Texts';
import ButtonEdu from '@/components/ButtonEdu';

// const googleLogo = require('../assets/images/google-logo.png');

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {Texts.login.titleLogin}<Text style={styles.bold}>{Texts.login.titleLoginEnd}</Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={Texts.inputs.placeholderUser}
          placeholderTextColor={Colors.light.placeholder}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={Texts.inputs.placeholderPassword}
          placeholderTextColor={Colors.light.placeholder}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.icon}>
          <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color={Colors.light.title} />
        </TouchableOpacity>
      </View>

      <ButtonEdu 
        title={Texts.buttons.login}
        colors= {[Colors.light.gradient1, Colors.light.gradient2]}
        type='primary'
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{Texts.login.forgotPassword}<Text style={styles.link}>{Texts.login.forgotPasswordEnd}</Text></Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>o</Text>
        <View style={styles.divider} />
      </View>

      <ButtonEdu 
        title={Texts.buttons.google}
        colors= {[Colors.light.background, Colors.light.background]}
        type='google'
        icon={require('../../../../assets/images/google.png')}
      />

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{Texts.login.back}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: Colors.light.title,
    marginBottom: 20,
    fontFamily: 'ManropeBold',
    fontWeight: 800,
    letterSpacing: -1
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.light.SubTitle
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 18,
    color: Colors.light.SubTitle,
    fontFamily: 'ManropeBold',
  },
  icon: {
    paddingLeft: 8,
  },
  loginButton: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
  },
  gradientButton: {
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: Colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: Colors.light.SubTitle,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'ManropeBold',
    fontWeight: 700,
  },
  link: {
    color: Colors.light.title,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: Colors.light.title,
    textDecorationStyle: 'solid',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%'
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.border,
  },
  orText: {
    marginHorizontal: 10,
    color: Colors.light.SubTitle,
    fontSize: 16,
    fontFamily: 'ManropeBold',
    fontWeight: 500,
  },
  backButton: {
    marginTop: 0,
  },
  backText: {
    color: Colors.light.SubTitle,
    fontSize: 16,
    textAlign: 'center',
  },
});
