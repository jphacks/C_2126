import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ButtonGroup, ListItem, Card, Text } from 'react-native-elements';
// import StockList from '../components/StockList';
// import NameButton from '../components/NameButton';
import Stock from '../components/Stockconponent';

const user = [
  {
    itemName: 'カップラーメン',
    count: 3,
    expiryDate: '2013-02-08T09:30:26',
    category: 0
  },
  {
    itemName: 'カップラーメン',
    count: 1,
    // expiryDate: '2013-02-08T09:30:26',
    expiryDate: '2014-04-01',
    category: 1
  },
  {
    itemName: 'カップラーメン',
    count: 3,
    expiryDate: '2021-01-01',
    category: 2
  },
  {
    itemName: 'カップラーメン',
    count: 19,
    expiryDate: '2021-02-09',
    category: 3
  },
  {
    itemName: 'a',
    count: 4,
    expiryDate: '2021-02-09',
    category: 1
  },
]
const human = { count: 3 }
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
