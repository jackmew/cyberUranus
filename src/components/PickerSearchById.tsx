import React, { useEffect, useState } from 'react';
import {ActivityIndicator, StyleSheet, Text, View, FlatList, Picker} from 'react-native';

type Props = {
    reportIds: string[],
    callback: ((reportIdSelected: string) => void),
};

const PickerSearchById: React.FC<Props> = ({
    reportIds,
    callback,
                                   }) => {
    reportIds.unshift("");
    const [reportIdSelected, setReportIdSelected] = useState("");

    const valueChanged = (itemValue: string) => {
        setReportIdSelected(itemValue);
        callback(itemValue);
    }

    return (
       <View style={styles.container}>
           <View style={styles.labelContainer}>
               <Text style={styles.label}>Search by id: </Text>
           </View>
           <Picker
               selectedValue={reportIdSelected}
               style={styles.picker}
               onValueChange={(itemValue, itemIndex) => valueChanged(itemValue)}
           >
               {reportIds.map((reportId, index) => <Picker.Item key={index+reportId} label={reportId} value={reportId} />)}
           </Picker>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    labelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {

    },
    picker: {
        flex: 1,
        height: 40,
    },
});
export default PickerSearchById;