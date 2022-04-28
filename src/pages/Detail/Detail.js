import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView, Linking } from "react-native";
import styles from './Detail.style'
import axios from "axios";
import Loading from "../../components/Loading";

function Detail({route}) {

    const image = route.params.map(x=>x.strMealThumb)
    const title = route.params.map(x=>x.strMeal)
    const text = route.params.map(x=>x.strInstructions)
    const country = route.params.map(x=>x.strArea)
    const youtube = route.params.map(x=>x.strYoutube)
    const [loading,setLoading] = useState(true)

    setTimeout(()=>{
        setLoading(false)
    },1500)

    if(loading){
        return <Loading/>
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: `${image}`}} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.country}>{country}</Text>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(`${youtube}`)}}>
                    <Text style={styles.buttonText}>
                        Watch on Youtube
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Detail;
