import React, { Component, useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
import Stock from '../components/Stockconponent';
import Datemess from '../components/datemessage';

const user = [
  {
    itemName: '佐藤のご飯',
    count: 5,
    expiryDate: '2023-02-08T09:30:26',
    category: 1
  },
  {
    itemName: '佐藤のご飯',
    count: 10,
    expiryDate: '2023-04-08T09:30:26',
    category: 1
  },
  {
    itemName: '佐藤のご飯',
    count: 5,
    expiryDate: '2023-08-08T09:30:26',
    category: 1
  },
  {
    itemName: '水',
    count: 10,
    expiryDate: '2022-04-01',
    category: 0
  },
  {
    itemName: 'ビスケット',
    count: 3,
    expiryDate: '2024-01-01',
    category: 3
  },
  {
    itemName: '水',
    count: 20,
    expiryDate: '2023-02-09',
    category: 0
  },
  {
    itemName: 'カレー',
    count: 5,
    expiryDate: '2022-02-09',
    category: 2
  },
]
const human = { count: 3, date: 3 }

function Info_page2(props) {





  return (
    <View style={styles.container}>
      <Datemess user={props.user} human={props.human} style={[styles.card, { flex: 0.2 }]} />


      <Stock user={props.user} style={{ flex: 0.8 }} />
      {/* <Card containerStyle={[styles.card, { flex: 0.7 }]} wrapperStyle={styles.cardContent} > */}
      {/* </Card> */}
    </View>
  );
}
const Info_page = () => {
  return (<Info_page2 user={user} human={human} />)
}
export default Info_page;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 15,
    flex: 1,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
  },
  card: {
    flex: 0.2,
    marginHorizontal: 0,
    marginTop: 5,
    marginBottom: 5,

    paddingHorizontal: 20,
    paddingVertical: 5

    // margin: 15,


  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  // listitem: {
  //   // flexDirection: "column",
  //   // height: 100,
  //   // padding: 20
  //   flex: 0.4

  // },
  // listview: {

  //   flex: 1.0
  // },
  // listitemname: {

  //   // flexDirection: "row",
  //   flex: 1

  // },
  // listitemcount: {

  //   // flexDirection: "row",
  //   flex: 0.2

  // },
  // listitemdate: {
  //   flexDirection: "row",
  //   flex: 0.8
  // },
  // categoryPicker: { height: '20%' },
  // datePicker: { alignSelf: 'center', width: '40%' },
}
);
