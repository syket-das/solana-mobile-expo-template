import 'react-native-gesture-handler';
import './src/polyfills';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConnectionProvider } from './src/utils/ConnectionProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import { AppNavigator } from './src/navigators/AppNavigator';
import { ClusterProvider } from './src/components/cluster/cluster-data-access';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const [loaded, error] = useFonts({
    'Iceland-Regular': require('./assets/fonts/Iceland-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ClusterProvider>
          <ConnectionProvider config={{ commitment: 'processed' }}>
            <SafeAreaView
              style={[
                styles.shell,
                {
                  backgroundColor:
                    colorScheme === 'dark'
                      ? MD3DarkTheme.colors.background
                      : MD3LightTheme.colors.background,
                },
              ]}
            >
              <PaperProvider
                theme={
                  colorScheme === 'dark'
                    ? CombinedDarkTheme
                    : CombinedDefaultTheme
                }
              >
                <AppNavigator />
              </PaperProvider>
            </SafeAreaView>
          </ConnectionProvider>
        </ClusterProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
});
