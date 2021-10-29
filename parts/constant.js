import React, { useCallback, useRef, useState } from 'react';

const categories = [

    '飲料水',
    '主食',
    'おかず',
    'その他',

];


export function getCategory(num) {

    return (categories.find((category, index) => index === num))
}

