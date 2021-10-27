import React, { Component, useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, Button, Icon, Card, Input, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import StockList from './StockList';




const NameButton = (props) => {
    //コンストラクタ
    const [selectedIndex, setselectedIndex] = useState(0);


    const buttons = ['全部', '主食', 'おかず', '水']


    return (
        <View>
            <ButtonGroup
                onPress={(nextIndex) => setselectedIndex(nextIndex)}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{ height: 30 }}
                buttonStyle={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderBottomLeftRadius: 5,
                    borderTopRightRadius: 10,
                }}
            />
            <StockList user={props.user} selectedIndex={selectedIndex} />
        </View>

    )

}
// class NameButton extends Component {
//     //コンストラクタ
//     constructor() {
//         super()
//         this.state = {
//             selectedIndex: 0
//         }
//         this.updateIndex = this.updateIndex.bind(this)
//     }

//     updateIndex(selectedIndex) {
//         this.setState({ selectedIndex })
//     }


//     render() {
//         const buttons = ['全部', '主食', 'おかず', '水']
//         const { selectedIndex } = this.state

//         return (
//             <ButtonGroup
//                 onPress={this.updateIndex}
//                 selectedIndex={selectedIndex}
//                 buttons={buttons}
//                 containerStyle={{ height: 30 }}
//                 buttonStyle={{
//                     borderWidth: 1,
//                     borderColor: 'gray',
//                     borderBottomLeftRadius: 5,
//                     borderTopRightRadius: 10,
//                 }}
//             />
//         )
//     }
// }
export default NameButton;


// const styles = ({
//     container: {
//         marginTop: 30,
//         marginBottom: 30,
//         flex: 1,
//     },
//     cardContent: {
//         display: 'flex',
//         alignItems: 'stretch',
//         justifyContent: 'space-between',
//         flex: 1,
//     },
//     card: {
//         flex: 1,
//     },
//     card_back: {
//         flex: 1,

//     },
//     categoryPicker: { height: '20%' },
//     datePicker: { alignSelf: 'center', width: '40%' },
// });