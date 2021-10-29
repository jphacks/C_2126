import React, { useCallback, useRef, useState } from 'react';
// import { View, StyleSheet } from 'react-native';

import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Divider, Card, Text } from 'react-native-elements'
import moment from 'moment';


const ItemNameCate = (props) => {
    return (<View style={{
        flexDirection: "row",
        flex: 1
    }} >


    </View >

    )
}
const ItemNameCateDate = (props) => {
    return (

        <View style={props.style}>
            <View style={{
                flex: 0.3,
                // borderWidth: 1,
                margin: 2
            }}>
                <Text h5 style={{ color: "#808080" }} >{props.item.category}</Text>
            </View>
            <View style={{
                flex: 0.4,
                margin: 2
            }}>
                <Text h4 >{props.item.itemName}</Text>
            </View>
            <View style={{
                flex: 0.3,
                // borderWidth: 1,
                margin: 2,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'baseline'

            }}>
                <Text style={styles.dateint}>
                    {moment(props.item.expiryDate).format("YYYY")}
                </Text>
                <Text style={styles.datestr}>
                    年
                </Text>
                <Text style={styles.dateint}>
                    {moment(props.item.expiryDate).format("MM")}
                </Text>
                <Text style={styles.datestr}>
                    月
                </Text>
                <Text style={styles.dateint}>
                    {moment(props.item.expiryDate).format("DD")}
                </Text>
                <Text style={styles.datestr}>
                    日

                </Text>
            </View>
        </View >
    )
}
const ItemCount = (props) => {
    return (
        <View style={{

            flexDirection: 'row',
            alignSelf: 'flex-start',
            alignItems: 'baseline'
        }}>
            < View style={{
                flex: 0.5,
            }}>
                <Text style={{
                    textAlign: 'right',
                }} h3>{props.item.count} </Text>
            </View >
            <View style={{
                flex: 0.5,
            }}>
                {/* <Text>{moment("1976-04-19 12:59").format("YYYY-MM-DD HH:mm")}</Text> */}
                <Text style={{ textAlign: 'right', fontSize: 17, color: "#4d4d4d" }} > 食分</Text>

            </View>
        </View >
    )
}

const ItemNameCateDateCo = (props) => {
    return (
        <View
            style={{
                flexDirection: "row",
                // height: 60,
                padding: 0,
                marginTop: 10,
                marginBottom: 5
                // alignSelf: "flex-start",

            }}>
            < ItemNameCateDate item={props.item} style={{ flex: 0.75 }} />
            <View style={{
                flex: 0.25,
                // alignContent: 'center',
                justifyContent: 'center',
            }}>
                <ItemCount item={props.item} />
            </View>

        </View>

    )
}
const StockList = (props) => {
    return (
        <ScrollView >
            {/* <Text>3</Text>
            <Text h2>{props.selectedIndex}</Text> */}
            {props.user.map((u, i) => {
                return (
                    <View>
                        <ItemNameCateDateCo item={u} />

                        <Divider orientation="horizontal" width={1} />
                    </View>
                );
            })}
        </ScrollView >
    )
}
export default StockList;

const styles = ({

    container: {
        marginTop: 30,
        marginBottom: 30,
        flex: 1,
    },

    datestr: {
        fontSize: 13
    },
    dateint: {
        fontSize: 17
    },
    text: {
        justifyContent: 'center',

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
    datePicker: { alignSelf: 'center', width: '40%' }
});