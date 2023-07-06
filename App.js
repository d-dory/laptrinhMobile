import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigator';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
    <HomeStackNavigator />
      
      <StatusBar backgroundColor="#6a51ae" hidden={false} />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
