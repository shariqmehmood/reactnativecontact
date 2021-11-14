import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/home"
import About from "./src/about"
import Profile from "./src/profile"
import Contact  from './src/contact';
import ImgCam from './src/imgCam';
import Imgpic from './src/imgpic';
import Docpic from './src/docpic';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="img-Cam"  component={ImgCam} />
        <Tab.Screen name="img-pic"  component={Imgpic} />
        <Tab.Screen name="Doc-pic"  component={Docpic} />





      </Tab.Navigator>
    </NavigationContainer>
  );
}