import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { useAssets } from 'expo-asset';
import * as MySettingsModule from 'my-expo-settings';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [loaded, fontsError] = useFonts({
    'Space Mono': require('../../../assets/fonts/SpaceMono-Regular.ttf'),
    'Apple Chancery': require('../../../assets/fonts/Apple-Chancery.ttf'),
  })
  const [assets, assetsError] = useAssets([require('../../../assets/images/react.png')])
  const [theme, setTheme] = useState<MySettingsModule.Theme>(MySettingsModule.getTheme());

  useEffect(() => {
    const subscription = MySettingsModule.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });
    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  // const colorTheme = useColorScheme();
  const themeTextStyle = theme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      {assets ? <Image style={styles.img} source={assets[0]} /> : null}
      <Link style={themeTextStyle} href="/details/1">View first user details</Link>
      <Link style={themeTextStyle} href="/details/2">View second user details</Link>

      <Text style={[styles.text, styles.font, themeTextStyle]}>{MySettingsModule.PI}</Text>
      <Text style={themeTextStyle}>Current Theme is: {MySettingsModule.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => MySettingsModule.setTheme(nextTheme)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 30,
  },
  font: {
    fontFamily: 'Apple Chancery',
    // fontFamily: 'Space Mono',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightThemeText: {
    color: '#333',
  },
  darkThemeText: {
    color: '#fff',
  },
});