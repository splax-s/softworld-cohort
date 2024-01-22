import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
          <Text>HomeScreen</Text>
          <Button title="Click me" onPress={() =>{ navigation.goBack()}}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
