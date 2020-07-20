import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title} > {props.title}</Text>
            <View style={styles.inputContainer} >
                <Text> Select a Number</Text>
                <TextInput title='Select a number'/>
                <View style={styles.buttonContainer}>
                    <Button title='reset' onPress={()=>{}}/>
                    <Button title='start' onPress={()=>{}}/>
                </View>
                    

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
     screen :{
        flex: 1,
        padding: 10,
        alignItems :'center',
        
     },
     title:{
        fontSize: 20,
        marginVertical :10,
     },
     inputContainer:{
        width: 300,
        maxWidth:'80%',
        alignItems: 'center',
        shadowColor:'black',
        shadowOpacity:5,
        shadowOffset:{width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor:'white',
        elevation: 7,
        padding :20,
        borderRadius: 5


     },
     buttonContainer:{
        flexDirection : 'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
     }
});

export default StartGameScreen;