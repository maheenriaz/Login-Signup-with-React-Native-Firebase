import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OnBoardingScreen from './OnBoardingScreen'
import Login from './Login'
import Signup from './Signup'
import BeforeLogin from './BeforeLogin'
import Home from './Home'

const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }},});
const OnBoardingScreenStackNavigator = createStackNavigator({
  OnBoardingScreen: {
        screen: OnBoardingScreen,
        navigationOptions: {
          header: null,
        }},});
 const BeforeLoginStackNavigator = createStackNavigator({
  BeforeLogin: {
     screen: BeforeLogin,
      navigationOptions: {
     header: null,
  }},});
  const SignupStackNavigator = createStackNavigator({
    Signup: {
     screen: Signup,
      navigationOptions: {
     header: null,
  }},});
  const HomeStackNavigator = createStackNavigator({
    Home: {
     screen: Home,
      navigationOptions: {
     header: null,
  }},});
export default MainNavigation=  createAppContainer(
  createSwitchNavigator({
    BeforeLogin:BeforeLoginStackNavigator,
    Signup:SignupStackNavigator,
    Login:LoginStackNavigator,
    OnBoardingScreen:OnBoardingScreenStackNavigator,
    Home:HomeStackNavigator
  })
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
