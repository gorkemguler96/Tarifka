import React from 'react';
import {View,Text} from "react-native";
import LottieView from 'lottie-react-native';

function Error(props) {
    return (
        <LottieView source={require('../../assets/error.json')} autoPlay loop />
    );
}

export default Error;
