import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableWithoutFeedback, View} from "react-native";
import styles from './Meals.style'
import axios from "axios";
import Loading from "../../components/Loading";

function Meals({route,navigation}) {

    const meals = route.params.meals
    const [loading,setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false)
    },1500)


    const changeMeals = async (item) => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item.strMeal}`)
        navigation.navigate('DetailPage',data.meals)
    }

    const mealsRender = ({item}) => {
        return(
            <TouchableWithoutFeedback  onPress={()=>changeMeals(item)}>
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <Image style={styles.image} source={{uri: `${item.strMealThumb}`}} />
                        <View style={styles.mealsView}>
                            <Text style={styles.mealsText}>{item.strMeal}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    if(loading){
        return <Loading/>
    }

    return (
        <FlatList data={meals} keyExtractor={(item)=> item.idMeal} renderItem={mealsRender}/>
    );
}

export default Meals;
