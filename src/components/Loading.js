import React, {useEffect,useRef} from 'react';
import {View,Text} from "react-native";
import LottieView from 'lottie-react-native';

function Loading(props) {
    return (
        <LottieView source={require('../../assets/Loading.json')} autoPlay loop />
    );
}

export default Loading;
