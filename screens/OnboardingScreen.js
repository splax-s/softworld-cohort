import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>OnboardingScreen</Text>
      <Button title="Click me" onPress={() =>{ navigation.navigate("Home")}}/>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
