import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/Dashboard';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Dashboard />
    </SafeAreaView>


  );
}

