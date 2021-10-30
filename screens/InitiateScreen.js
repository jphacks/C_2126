import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text, Slider } from 'react-native-elements';
import LoginScreen from '../components/LoginScreen';


export default function InitiateScreen() {
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleNumberOfDaysChange = useCallback((value) => {
    setNumberOfDays(parseInt(value));
  }, []);

  const handleNumberOfPeopleChange = useCallback((value) => {
    setNumberOfPeople(parseInt(value));
  }, []);

  const handleSubmit = () => {
    const data = { numberOfDays, numberOfPeople };
  };

  return (
    <View style={styles.container}>
      <Card wrapperStyle={styles.cardContent} containerStyle={styles.subCard}>
        <Card.Title>
          <Text h3 style={{ textAlign: 'left' }}>
            ようこそ
          </Text>
        </Card.Title>
        <View>
          <Text h4 style={styles.content}>
            まず初めに、
          </Text>
          <Text h4 style={styles.content}>
            希望備蓄日数と人数を入力
          </Text>
        </View>
        <Text h4 style={styles.content}>
          備蓄量を提案します
        </Text>
      </Card>
      <Card containerStyle={styles.mainCard} wrapperStyle={styles.cardContent}>
        <Text h2>備蓄日数</Text>
        <Slider
          value={numberOfDays}
          onValueChange={handleNumberOfDaysChange}
          minimumValue={1}
          maximumValue={30}
          step={1}
          thumbStyle={styles.thumbStyle}
          minimumTrackTintColor='#4dabf5'
        ></Slider>

        <Text h3 style={styles.content}>{`${numberOfDays}日`}</Text>
        <Text h2>人数</Text>
        <Slider
          value={numberOfPeople}
          onValueChange={handleNumberOfPeopleChange}
          minimumValue={1}
          maximumValue={15}
          step={1}
          thumbStyle={styles.thumbStyle}
          minimumTrackTintColor='#4dabf5'
        ></Slider>
        <Text h3 style={styles.content}>{`${numberOfPeople}人`}</Text>
        <Button type='solid' title='確定' onPress={handleSubmit} />
      </Card>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignContent: 'center',
    textAlign: 'center',
    borderWidth: 0

  },
  subCard: {
    flex: 1,
    marginHorizontal: 15,

    marginVertical: 0
  },
  mainCard: {
    flex: 2,

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 20,
  },
  thumbStyle: {
    color: '#2196f3',
    backgroundColor: '#2196f3',
    height: 30,
    width: 30,
  },
});
