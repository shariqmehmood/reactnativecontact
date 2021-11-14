import React from "react";
import {Image, View, } from 'react-native';
import img from "../Img/facebook.PNG"


    export default function Profile(){
 
    return(
       <View>
           <Image source={img} style={{marginLeft:10,height:200,width:350}}></Image>
       </View>
    )
}