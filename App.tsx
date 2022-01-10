import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';

import './ReactotronConfig';

import theme from './src/global/styles/theme';

import {
  Heebo_400Regular,
  Heebo_500Medium,
  Heebo_600SemiBold,
  useFonts,
} from '@expo-google-fonts/heebo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_500Medium,
    Heebo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{ backgroundColor: theme.colors.background, flex: 1 }}
      >
        <StatusBar backgroundColor="transparent" translucent />

        <AppProvider>
          <Routes />
        </AppProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}
