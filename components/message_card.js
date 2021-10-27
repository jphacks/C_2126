import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Input, Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


// function Iteminfo(props){
//     return (

//     )

// }


const styles = ({
    container: {
        marginTop: 30,
        marginBottom: 30,
        flex: 1,
    },
    cardContent: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
    },
    card: {
        flex: 1,
    },
    card_back: {
        flex: 1,

    },
    categoryPicker: { height: '20%' },
    datePicker: { alignSelf: 'center', width: '40%' },
});
