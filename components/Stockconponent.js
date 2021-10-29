import React, { useCallback, useState, useMemo } from 'react';
import { ScrollView, Button, View, StyleSheet } from 'react-native';
import { ButtonGroup, ListItem, Card, Text } from 'react-native-elements';
// import StockList from './StockListParts/StockList';
import StockList from './StockListParts/StockList';


const Stock = (props) => {
    const [selectedIndex, setselectedIndex] = useState(0);


    const buttons = ['全部', '飲料水', '主食', 'おかず', 'その他']



    const [userlist, setUser] = useState(props.user);
    // console.log(props.user)
    // setUser()
    // props.user.sort();
    const { sortedItems, toggleSort } = useSort(props.user);
    console.log(useSort(userlist))

    const [toggle, setToggle] = useState(false);
    const onPress = (nextIndex) => {
        if (selectedIndex === nextIndex) {
            toggleSort()
        }
        else {
            setselectedIndex(nextIndex)
        }
    }
    function buttontoitemindex(n) {
        if (n === 0) {
            return 4
        }
        return n - 1
    }

    return (
        <View style={[{ marginTop: 10, padding: 0 }, props.style]}>
            <Button
                title="test"
                onPress={() => {
                    toggleSort();
                }} />
            <Text>{ }</Text>
            <ButtonGroup
                onPress={(selectedIndex) => onPress(selectedIndex)}
                selectedIndex={selectedIndex}
                // buttonContainerStyle={{
                //     borderWidth: 1,
                //     padding: 0,
                //     margin: 0
                // }}
                buttons={buttons}
                containerStyle={{ height: 30 }}
                buttonStyle={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderBottomLeftRadius: 5,
                    borderTopRightRadius: 10,
                    marginHorizontal: 1
                }}
            />
            <Card containerStyle={styles.card} wrapperStyle={styles.cardContent}>

                <StockList user={sortedItems} selectedIndex={buttontoitemindex(selectedIndex)} />
            </Card>
        </View>

    )

};


//並び替えするカスタムフック
const useSort = (items, isDate) => {
    const [isDesc, setIsDesc] = useState(false);
    const sortedItems = useMemo(() => {
        //良い例
        const goodExampleItems = isDesc
            ? [...items].sort(_sortAsc_c)
            : [...items].sort(_sortAsc_d);
        return goodExampleItems;
    }, [items, isDesc]);

    // DESC/ASCの切り替え
    const toggleSort = useCallback(() => {
        setIsDesc((prevState) => {
            return !prevState;
        });
    }, [setIsDesc]);
    return { sortedItems, toggleSort };
};

function _sortAsc_c(a, b) {
    if (a.count > b.count) { return -1; } if (a > b) {
        return 1;
    }
    return 0;
}
function _sortAsc_d(a, b) {
    if ((a.expiryDate) < (b.expiryDate)) { return -1; } if (a > b) {
        return 1;
    }
    return 0;
}

function _sortDesc(a, b) {
    if (a.count < b.count) { return 1; } if (a > b) {
        return -1;
    }
    return 0;
}


export default Stock;

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
        marginHorizontal: 0,
        marginTop: 0,
        marginBottom: 0,

        paddingStart: 20,
        paddingEnd: 0,
        paddingTop: 10,
        paddingBottom: 10,
    }
});
