import React, {useState} from 'react';
import {StyleSheet, View, Picker} from 'react-native';

type Props = {
    columns: string[],
    callback: ((column: string, order: Order) => void),
};

export enum Order {
    ASCEND = "ascend",
    DESCEND = "descend",
}

const PickerSortByColumn: React.FC<Props> = ({
    columns,
    callback,
                                             }) => {
    const [order, setOrder] = useState(Order.ASCEND);
    const [column, setColumn] = useState(columns[0]);

    const columnChanged = (itemValue: string) => {
        setColumn(itemValue);
        callback(itemValue, order);
    }
    const orderChanged = (itemValue: Order) => {
        setOrder(itemValue);
        callback(column, itemValue);
    }

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={order}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => orderChanged(itemValue)}
            >
                <Picker.Item key={Order.ASCEND} label={Order.ASCEND} value={Order.ASCEND} />
                <Picker.Item key={Order.DESCEND} label={Order.DESCEND} value={Order.DESCEND} />
            </Picker>
            <Picker
                selectedValue={column}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => columnChanged(itemValue)}
            >
                {columns.map((column, index) => <Picker.Item key={index+column} label={column} value={column} />)}
            </Picker>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    picker: {
        flex: 1,
        height: 40,
    },
});
export default PickerSortByColumn;