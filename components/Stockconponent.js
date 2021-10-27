import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
// import StockList from './StockListParts/StockList';
import NameButton from './StockListParts/NameButton';


const Stock = (props) => {

    return (
        <View style={styles.container}>

            <NameButton user={props.user} />
            {/* <StockList user={props.user} /> */}

        </View >
    );
};

export default Stock;

const styles = StyleSheet.create({
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
        flex: 0.3,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    listitem: {
        // flexDirection: "column",
        // height: 100,
        // padding: 20
        flex: 0.4

    },
    listview: {

        flex: 1.0
    },
    listitemname: {

        // flexDirection: "row",
        flex: 1

    },
    listitemcount: {

        // flexDirection: "row",
        flex: 0.2

    },
    listitemdate: {
        flexDirection: "row",
        flex: 0.8
    },
    categoryPicker: { height: '20%' },
    datePicker: { alignSelf: 'center', width: '40%' },
});
