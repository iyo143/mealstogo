import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Platform } from 'react-native-web';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/retaurant-info.component";

export const RestaurantScreen = () => (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.searchContainer}>
      <Searchbar/>
    </View>
    <View style={styles.styleContainer}>  
      <RestaurantInfo/>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
    container:{
      flex:1, 
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
    },
    searchContainer:{
      padding: 20,
    },
    styleContainer:{
      flex: 1,
      padding: 20,
    }
  });