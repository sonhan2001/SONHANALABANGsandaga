import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home.js';
import Juicy from './screens/Juicy';
import My_oder from './screens/My_oder';
import Oder_Gro from './screens/Oder_Gro';
import Last from './screens/Last';
import Your from './screens/Your_Location';
import Prototype from './screens/Prototype';
import testBtn from './screens/testBtn'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="F_1" component={Home} />
        <Tab.Screen name="F_2" component={Juicy} />
        <Tab.Screen name="F_3" component={My_oder}/>
        <Tab.Screen name="F_4" component={Oder_Gro}/>
        <Tab.Screen name="F_5" component={Your}/>
        <Tab.Screen name="F_6" component={Last}/>
        {/* <Tab.Screen name="test" component={testBtn}/> */}

      
      </Tab.Navigator>

    </NavigationContainer>
  );
}


