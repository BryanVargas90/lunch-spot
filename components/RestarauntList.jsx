import { useState, useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import RestaurantCard from "./RestarauntCard"
import Random from "./Random"

export default function RestarauntList ({ navigation }) {

const [foodList, setFoodList] = useState()

useEffect(() => {
 fetch('https://my-first-firestore-bc.web.app/restaurants')
    .then(resp => resp.json())
    .then(setFoodList)   
    .catch(alert)   
}, [])


    return(
        <View style={styles.container}>
        <ScrollView style={styles.list}>
            {foodList && foodList.map(food => (
                <RestaurantCard food={food} key={food.id} navigation={navigation} />
            ))}
        </ScrollView>   
        <Random navigation={navigation} foodlist={foodList}/>                 
        </View>
    )
}

const styles = StyleSheet.create ({
    tittle:{
        fontSize: 30,
        fontWeight: 700,
        color: '#151B54',
        marginTop: 8,
        marginBottom: 8,
    },
    list: {
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 2,
    },
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,   
        padding: 16,


    },
})