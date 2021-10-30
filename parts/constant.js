import React, { useCallback, useRef, useState } from 'react';

const categories = [

    '飲料水',
    '主食',
    'おかず',
    'その他',

];

const buttons = ['入力', '在庫', '日数', '設定']



export function getCategory(num) {

    return (categories.find((category, index) => index === num))
}

