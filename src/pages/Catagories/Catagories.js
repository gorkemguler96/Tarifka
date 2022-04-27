import React, {useEffect, useState} from 'react';
import {View,Text,FlatList, Image, TouchableWithoutFeedback} from "react-native";
import styles from './Catogories.style'
import axios from "axios";

function Catagories({navigation}) {

    const [categoriesData,setCategoriesData] = useState([]);


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data} =await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        setCategoriesData(data.categories)
    }

    const changeMeals = (item) => {
        // navigation.navigate("MealsPage",{id})
        console.log(item)
    }

    const categoriesRender = ({item}) => {
        return(
            <TouchableWithoutFeedback  onPress={()=>changeMeals(item)}>
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <Image style={styles.image} source={{uri: `${item.strCategoryThumb}`}} />
                        <Text style={styles.category}>{item.strCategory}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            )
    }


    return (
        <FlatList data={categoriesData} keyExtractor={(item)=> item.idCategory} renderItem={categoriesRender}/>
    );
}

export default Catagories;

// idCategory: "1"
// strCategory: "Beef"
// strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb: "https://www.themealdb.com/images/category/beef.png"
