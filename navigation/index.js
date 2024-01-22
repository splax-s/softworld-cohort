import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnboardingScreen from "../screens/OnboardingScreen"
import HomeScreen from "../screens/HomeScreen"

export default function Navigation({loggedIns}) {

  return (
    <NavigationContainer>
          <RootNavigator loggedIns={loggedIns} />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function RootNavigator({loggedIns}) {
    const [loggedIn, setLoggedIn] = React.useState(loggedIns)
  return (
    <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}options={{
              headerShown: false,
                animation: "slide_from_right",
            }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{
              headerShown: false,
              animation: "fade_from_bottom"
            }} />
    </Stack.Navigator>
  )
}
