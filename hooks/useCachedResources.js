import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'sf-semi': require('../assets/fonts/SF-Pro-Text-Semibold.otf'),
                    'sf-bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
                    'sf-medium': require('../assets/fonts/SF-Pro-Text-Medium.otf'),
                    'sf-regular': require('../assets/fonts/SF-Pro-Text-Regular.otf'),
                });
            } catch (e) {
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, [])

    return isLoadingComplete;
}
