import { useState, useEffect } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import RestaurantCard from "./RestarauntCard"

export default function RestarauntList () {

const [foodList, setFoodList] = useState()

useEffect(() => {
 fetch('https://my-first-firestore-bc.web.app/restaurants')
    .then(resp => resp.json())
    .then(setFoodList)   
    .catch(alert)   
}, [])


    return(
        <View style={styles.container}>
        <Text style={styles.tittle}>Restaurant List</Text>
        <ScrollView style={styles.list}>
            {foodList && foodList.map(food => (
                <RestaurantCard food={food} key={food.id} />
            ))}
        </ScrollView>                    
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
        // backgroundColor: 'pink',
        marginTop: 60,
        marginBottom: 24,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start'


    },
})