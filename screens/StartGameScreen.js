import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState('');
    const [selectedNumber,setSelectedNumber] = useState('');
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));

    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    } 
    
    const confirmInputHandler =() =>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === Nan || chosenNumber <=0 || chosenNumber > 99)
        {
            return;
        }
        setConfirmed(false);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
    }

    let confirmedOutput;
    if (confirmed) {
    confirmedOutput = <Text> Chosen Number is : {selectedNumber}</Text>
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title} > Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text> Select a Number</Text>
                <Input style={styles.input} 
                    keyboardType="number-pad" 
                    autoCorrect={false} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}/>
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title='reset' onPress={resetInputHandler} color={colors.accent}/> 
                    </View>
                    <View style={styles.button}> 
                        <Button title='Confirm' onPress={confirmInputHandler} color={colors.primary}/> 
                    </View>
                </View>
                   
            </Card>
            {confirmedOutput} 
        </View>
        </TouchableWithoutFeedback>
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
     },
     buttonContainer:{
        flexDirection : 'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
     },
     button:{
         width: 100,
     },
     input:{
         width: 50,
         textAlign: 'center'
     }
});

export default StartGameScreen;