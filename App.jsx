import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Signscreen from './src/screens/sigin/signscreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Signscreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  },
});
