import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Input, Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const categories = [
  {
    label: '麺類',
    value: 'noddle',
  },
  { label: '米', value: 'rice' },
];

const AddItemScreen = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('noddle');
  const currentDate = new Date();
  const [expiryDate, setExpiryDate] = useState(currentDate);
  const [errors, setErrors] = useState({
    itemName: '',
    expiryDate: '',
    category: '',
  });

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
      <Card containerStyle={styles.card} wrapperStyle={styles.cardContent}>
        <Card.Title>
          <Text h1>アイテム詳細</Text>
        </Card.Title>
        <Text h3>名前</Text>
        <Input
          autoCompleteType='off'
          onChangeText={setItemName}
          value={itemName}
          placeholder='カップ麺'
          errorMessage={errors.itemName}
        ></Input>
        <Text h3>賞味期限</Text>
        <DateTimePicker
          minimumDate={currentDate}
          value={expiryDate}
          style={styles.datePicker}
          onChange={handleExpiryDateChange}
        ></DateTimePicker>
        <Text h3>カテゴリ</Text>
        <Picker selectedValue={category} onValueChange={handleCategoryChange}>
          {categories.map((category) => (
            <Picker.Item
              key={category.label}
              label={category.label}
              value={category.value}
            />
          ))}
        </Picker>
        <Button onPress={handelAddItem} type='solid' title='追加する' />
      </Card>
    </View>
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
    flex: 1,
  },
  categoryPicker: { height: '20%' },
  datePicker: { alignSelf: 'center', width: '40%' },
});
