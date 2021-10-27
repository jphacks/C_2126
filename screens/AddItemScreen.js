import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Card, Text } from 'react-native-elements';


const user = [
  {
    itemName: 'カップラーメン',
    count: '20個',
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'カップラーメン',
    count: '20個',
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'カップラーメン',
    count: '20個',
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'カップラーメン',
    count: '20個',
    expiryDate: '2021年',
    category: '麺'
  },
  {
    itemName: 'a',
    expiryDate: '',
    category: ''
  },
]
const AddItemScreen = () => {
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
      <Card containerStyle={styles.card} wrapperStyle={styles.cardContent}>
        <Card.Title>
          <Text h6>メッセージ</Text>
        </Card.Title>
        <Text h4>あなたの保存食は</Text>
        <Text h3>６日間</Text>
        <Text h4>持ちます</Text>
      </Card>
      {/* <View containerStyle={styles.card} wrapperStyle={styles.cardContent}> */}
      <View style={styles.container} >
        <Card.Title>
          <Text h6>アイテム詳細</Text>
        </Card.Title>
        {user.map((u, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  height: 80,
                  padding: 10,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 0.8 }}>
                  <View style={{ flex: 0.7 }}>
                    <Text h4 >{u.itemName}</Text>
                  </View>
                  <View style={{ flex: 0.3 }}>
                    <Text >{u.expiryDate}</Text>
                  </View>

                </View>
                <View style={{ flex: 0.2 }}>
                  <Text style={styles.card}>{u.count}</Text>
                </View>
              </View>

            </ListItem>
          );
        })
        }
      </View>
    </View >
  );
};

export default AddItemScreen;

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
