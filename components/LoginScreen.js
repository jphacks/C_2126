import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = () => {
  // @ts-ignore
  const loginButtonImage = require('../assets/btn_login_base.png');
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={loginButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
