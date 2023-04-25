import { StyleSheet, View } from 'react-native';
import RestarauntList from './components/RestarauntList';

export default function App() {
  return (
    <View style={styles.container}>
     <RestarauntList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
