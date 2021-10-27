import React, { useCallback, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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
const MainpageScreen = () => {
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
      <Card containerStyle={{ flex: 0.2 }} wrapperStyle={styles.cardContent}>
        <Card.Title>
          <Text h6>メッセージ</Text>
        </Card.Title>
        <Text h3>{PreservedFoodDate}日間</Text>
        <Text h4>保存食があります。</Text>
      </Card>
      {/* <View containerStyle={styles.card} wrapperStyle={styles.cardContent}> */}
      {/* <View style={styles.container} > */}
      <Card containerStyle={{ flex: 0.8 }} wrapperStyle={styles.cardContent}>
        <Card.Title>a
          <Text>アイテム詳細</Text>
        </Card.Title>
        <ScrollView>
          {user.map((u, i) => {
            return (
              <ListItem key={i} bottomDivider>
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    height: 100,
                    padding: 10,
                  }}
                >
                  <View style={{
                    flex: 0.4,
                    flexDirection: "row"
                  }}>
                    <View style={{ flex: 0.55 }}>
                      <Text h4 >{u.itemName}</Text>
                    </View>
                    <View style={{ flex: 0.2 }}>
                      <Text h4 >{u.category}</Text>
                    </View>
                    <View style={{ flex: 0.25 }}>
                      <Text h3>{u.count}</Text>
                    </View>

                  </View>
                  <View style={{ flex: 0.2 }}>
                    <Text style={{ flex: 1 }}>{u.expiryDate}</Text>
                  </View>
                </View>

              </ListItem>
            );
          })
          }
        </ScrollView>
      </Card>
    </View >
  );
};

export default MainpageScreen;

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
