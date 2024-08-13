import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, useColorScheme, Image } from 'react-native';
import { useAssets } from 'expo-asset';

export default function HomeScreen() {
  const [loaded, fontsError] = useFonts({
    'Space Mono': require('../../../assets/fonts/SpaceMono-Regular.ttf'),
    'Apple Chancery': require('../../../assets/fonts/Apple-Chancery.ttf'),
  })
  const [assets, assetsError] = useAssets([require('../../../assets/images/react.png')])

  const colorTheme = useColorScheme();

  const themeTextStyle = colorTheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorTheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      {assets ? <Image style={styles.img} source={assets[0]} /> : null}
      <Text style={[styles.text, styles.font, themeTextStyle]}>Home</Text>
      <Link style={[themeTextStyle]} href="/details/1">View first user details</Link>
      <Link style={[themeTextStyle]} href="/details/2">View second user details</Link>
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