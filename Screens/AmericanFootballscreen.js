import React,{Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import AppHeader from "../components/AppHeader";

export default class AmericanFootball extends Component{

    render(){
        return(
            <View>
                <AppHeader/>
          <View>
            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballgames")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Games</Text>
                <Image source = {require("../assets/versus.png")} style = {styles.Gimages}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballrankings")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Rankings</Text>
                <Image source = {require("../assets/ranking.png")} style = {styles.Rimages}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballstats")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Stats</Text>
                <Image source = {require("../assets/stats.png")} style = {styles.Simages}></Image>
            </TouchableOpacity>

                <TouchableOpacity
                style = {styles.buttons}
                onPress = {()=>
                    this.props.navigation.navigate("Homescreen")}>
                    <Text style = {{fontSize:20,color:"white"}}>Back</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
   }
}

const styles = StyleSheet.create({
       buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor:"green",
        margin: 10,
        width: 200,
        height: 50
      },
      button:{
        alignItems: 'left',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"purple",
      margin: 50,
      width: 200,
      height: 100,
      },
      Gimages:{
        position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
      },
      Rimages:{
        position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
      },
      Simages:{
        position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
      }
    
})