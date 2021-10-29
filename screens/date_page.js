import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
import Stock from '../components/Stockconponent';


const user = [
  {
    itemName: 'カップラーメン',
    count: 3,
    expiryDate: '2021年',
    category: 0
  },
  {
    itemName: 'カップラーメン',
    count: 1,
    expiryDate: '2021年',
    category: 1
  },
  {
    itemName: 'カップラーメン',
    count: 3,
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'カップラーメン',
    count: 19,
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'a',
    count: 4,
    expiryDate: '',
    category: ''
  },
]
const human = { count: 3 }

function Info_page2(props) {

  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('noddle');
  const currentDate = new Date();
  const [expiryDate, setExpiryDate] = useState(currentDate);
  const [datewa, setDatewa] = useState(0);
  // props.human

  // props.stock
  // const sumfortype=props.user.reduce())

  // x^y
  // const pow = (x, y) => {
  //   let ans = 0;
  //   for (let i = 0; i < y; i++) {
  //     console.log(i)
  //     ans = ans * x
  //   }
  //   return ans;
  // };

  const datewater = props.user.reduce((co, u) => {
    if (u.category === 0) {
      return co + u.count;
    }
    return co;
  }, 0
  ) / props.human.count;

  const datefood = props.user.reduce((co, u) => {
    if (u.category !== 0) {
      return co + u.count;
    }
    return co;
  }, 0
  ) / props.human.count;



  // const round = (n, a) => {
  //   return (round(n * pow(10, a)) / pow(10, a))
  // }


  // const datefood = props.user.reduce((co, u) => {
  // })


  return (
    <View style={styles.container}>
      <Text>メインページ
      </Text>
      <Card containerStyle={{ flex: 0.2 }} wrapperStyle={styles.cardContent}>
        <Card.Title>
          <Text h6>メッセージ</Text>
        </Card.Title>
        {/* <Text h3>{PreservedFoodDate}日間</Text> */}
        <Text h3>水　 : {datewater}日分</Text>
        <Text h3>食料 : {datefood}日分</Text>
      </Card>
      {/* <View containerStyle={styles.card} wrapperStyle={styles.cardContent}> */}
      {/* <View style={styles.container} > */}
      <Card containerStyle={{ flex: 0.8 }} wrapperStyle={styles.cardContent}>
        <Card.Title>a
          <Text>アイテム詳細</Text>
        </Card.Title>
        <Stock user={props.user} />
      </Card>
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
