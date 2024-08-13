import { StyleSheet, Text, View } from 'react-native';

import * as MyExpoSettings from 'my-expo-settings';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{MyExpoSettings.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
