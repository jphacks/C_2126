import React, { useCallback, useRef, useState, useMemo } from 'react';
// import { View, StyleSheet } from 'react-native';

import { Button, ScrollView, View, StyleSheet, SectionList } from 'react-native';
import { ListItem, Divider, Card, Text } from 'react-native-elements'
import { getCategory } from '../../parts/constant'
import moment from 'moment';



const ItemNameCateDate = (props) => {

    return (

        <View style={props.style}>
            <View style={{
                flex: 0.3,
                // borderWidth: 1,
                margin: 2
            }}>
                <Text h5 style={{ color: "#808080" }} >{getCategory(props.item.category)}</Text>
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

        <ScrollView style={{
            // borderWidth: 1,
            paddingEnd: 18,
            marginEnd: 2
            // marginBottom: 10,
            // paddingBottom: 10
        }}>

            {props.user.map((u, i) => {
                if (props.selectedIndex === 4 || props.selectedIndex === u.category)
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

});