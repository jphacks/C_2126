import React, { useCallback, useRef, useState } from 'react';
// import { View, StyleSheet } from 'react-native';

import { ScrollView, View, StyleSheet } from 'react-native';
import { ListItem, Divider, Card, Text } from 'react-native-elements'
import moment from 'moment';


const Category = {
    '0': '飲料水',
    '1': '主食',
    2: 'おかず',
    3: 'その他'
}

export function getCategory() {
    return (Category.2)


}