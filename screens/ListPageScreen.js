import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ButtonGroup, ListItem, Card, Text } from 'react-native-elements';
// import StockList from '../components/StockList';
// import NameButton from '../components/NameButton';
import Stock from '../components/Stockconponent';

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
const ListPageScreen = () => {

  const [selectedIndex, setselectedIndex] = useState(0);


  const buttons = ['入力', '在庫', '日数', '設定']


  const onPress = (nextIndex) => {
    setselectedIndex(nextIndex)
    if (selectedIndex === nextIndex) {
    }
    else {
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 5, marginHorizontal: 15 }}>
        <Text h5>在庫管理</Text>
      </View>
      {/* <Stock user={props.user} style={{ flex: 0.8 }} /> */}
      <Stock user={user} style={{ flex: 1 }} />
      {/* <ButtonGroup
        onPress={(selectedIndex) => onPress(selectedIndex)}
        selectedIndex={selectedIndex}

        buttons={buttons}
        containerStyle={{ height: 30 }}
        buttonStyle={{
          borderWidth: 1,
          borderColor: 'gray',
          borderBottomLeftRadius: 5,
          borderTopRightRadius: 10,
          marginHorizontal: 1
        }}
      /> */}

    </View >
  );
};

export default ListPageScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 10,
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

});
