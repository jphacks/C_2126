import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';
// import StockList from '../components/StockList';
// import NameButton from '../components/NameButton';
import Stock from '../components/Stockconponent';


const ListPageScreen = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('noddle');
  const currentDate = new Date();
  const [expiryDate, setExpiryDate] = useState(currentDate);
  // const [errors, setErrors] = useState(
  //   {
  //     itemName: '',
  //     expiryDate: '',
  //     category: '',
  //   },
  //   {
  //     itemName: '',
  //     expiryDate: '',
  //     category: '',
  //   },
  // );


  const handleCategoryChange = useCallback(
    (itemValue, itemIndex) => setCategory(itemValue),
    []
  );
  const PreservedFoodDate = 3;

  const handleExpiryDateChange = useCallback(
    (e, date) => setExpiryDate(date),
    []
  );

  const handelAddItem = useCallback(() => {
    if (!itemName) {
      setErrors((prevState) => ({
        ...prevState,
        itemName: '名前を入力してください',
      }));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text >メインページ
      </Text>
      <Card containerStyle={{ flex: 1 }} wrapperStyle={styles.cardContent}>
        <Card.Title>a
          <Text>アイテム詳細</Text>
        </Card.Title>
        <Stock user={user} />


      </Card>
    </View >
  );
};

export default ListPageScreen;

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
