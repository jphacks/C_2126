import React, { Component, useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearProgress, Button, Icon, Card, Input, Text } from 'react-native-elements';


const Textinfo = (props) => {
    let str;
    if (props.cate === 0) {
        str = '水　'
    }
    else {
        str = '食料'
    }


    return (
        <View>
            <Text style={styles.texth1}>  {str}　 :　{round(props.date, 1)}日分</Text>
        </View>
    )


}
const Statebar = (props) => {
    const rateflex = Math.min(props.date / props.ideal, 1)
    console.log(rateflex)
    console.log(props.date / props.ideal)
    return (
        <LinearProgress value={rateflex} color="primary" variant="determinate" style={styles.bar} />
        /* <LinearProgress value={0.5} color="secondary" trackkColor="red" /> */
        // <View style={styles.bar} >
        //     <View style={{
        //         flex: props.date,
        //         backgroundColor: 'red'

        //     }}
        //     ></View>
        //     <View style={{
        //         flex: rateflex,
        //     }}
        //     ></View>


        // </View >

    )
}
const Dateinfo = (props) => {
    return (
        <View style={styles.identify}>
            <Textinfo cate={props.cate} date={props.date} />
            <Statebar date={props.date} ideal={props.ideal} />
        </View>
    )
}




const Datemess = (props) => {



    const datewater = () => {
        return (props.user.reduce((co, u) => {
            if (u.category === 0)
                return co + u.count;
            return co;


        }, 0
        ) / (props.human.count * 3))
    }

    const datefood = () => {
        return (props.user.reduce((co, u) => {
            if (u.category !== 0) {
                if (u.category === 1)
                    return co + u.count;
                return co + u.count / 2;
            } return co;
        }, 0
        ) / (props.human.count * 3))
    }


    return (

        <Card containerStyle={[props.style, styles.card]} wrapperStyle={[styles.cardContent, { justifyContent: 'center' }]}>
            {/* <View style={{ borderWidth: 1 }}> */}
            <Dateinfo cate={0} date={datewater(0)} ideal={props.human.count} />
            <Dateinfo cate={1} date={datefood(1)} ideal={props.human.count} />
            {/* </View> */}
        </Card>
    )
}
function round(n, a) {
    let ans = 1;
    for (let i = 0; i < a; i++) {
        ans = ans * 10
    }
    return (Math.round(n * ans) / ans)

}
export default Datemess;


const styles = StyleSheet.create({
    card: {
        paddingTop: 8,
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    cardContent: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,


    },
    bar: {

        // flexDirection: "row",
        height: 5,
        backgroundColor: '#c0c0c0',
        marginTop: 5

    },
    texth1: {
        fontSize: 22
    },
    identify: {
        marginVertical: 10
    }
});
