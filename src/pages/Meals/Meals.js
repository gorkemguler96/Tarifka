import React from 'react';
import {Text, View} from "react-native";
import styles from './Meals.style'

function Meals({route}) {

    const {id} = route.params
    console.log(id)
    return (
        <View>
            <Text>
                Meals!
            </Text>
        </View>
    );
}

export default Meals;
