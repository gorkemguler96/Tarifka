import React, {useEffect, useState} from 'react';
import {View,Text,FlatList, Image, TouchableWithoutFeedback} from "react-native";
import styles from './Catogories.style'
import axios from "axios";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function Catagories({navigation}) {

    const [categoriesData,setCategoriesData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [loading2,setLoading2] = useState(false);


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data} =await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        setCategoriesData(data.categories)
        setTimeout(()=>{
            setLoading(false)
        },1000)

    }

    const changeMeals = async (item) => {

        const {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`)
        navigation.navigate("MealsPage", data)

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

    if(loading){
        return <Loading/>
    }
    if(loading2){
        return <Loading/>
    }


    return (
        <FlatList data={categoriesData} keyExtractor={(item)=> item.idCategory} renderItem={categoriesRender}/>
    );
}

export default Catagories;
