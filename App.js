import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catagories from "./src/pages/Catagories";
import Meals from "./src/pages/Meals";
import Detail from "./src/pages/Detail";
import {useEffect, useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {

    const [mealsData,setMealsData] = useState([]);
    const [detailData,setDetailData] = useState([]);


  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CategorisPage" component={Catagories} options={{
              title:"Categories",
              headerTitleAlign:"center",
              headerTintColor:"#ffa500"
          }}/>
          <Stack.Screen name="MealsPage" component={Meals} options={{
              title:"Meals",
              headerTitleAlign:"center",
              headerTintColor:"#ffa500"
          }}/>
          <Stack.Screen name="DetailPage" component={Detail} options={{
              title:"Detail",
              headerTitleAlign:"center",
              headerTintColor:"#ffa500"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
