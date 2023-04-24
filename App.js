import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/Dashboard';
import Diagnosis from './screens/Diagnosis';
import Onboarding from './components/Onboarding';
import Intro from './screens/Intro';
import Camera from './screens/Camera';
import PopUp from './screens/PopUp';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const theme={
  colors:{
    background:'#FFFFFF',
  }
}

export default function App() {

  return (
    //screen routings
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}}  name="Intro" component={Intro} />
          <Stack.Screen options={{headerShown:false}}  name="Onboarding1" component={Onboarding1} />
          <Stack.Screen options={{headerShown:false}}  name="Onboarding2" component={Onboarding2} />
          <Stack.Screen options={{headerShown:false}}  name="Onboarding3" component={Onboarding3} />
          <Stack.Screen options={{headerShown:false}}  name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    
    </SafeAreaView>


  );
}

