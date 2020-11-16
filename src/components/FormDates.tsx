import React, { useEffect, useState } from 'react';
import {ActivityIndicator, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import Moment from 'moment';
import {Report} from "../AppDataType";

type Props = {
    callback: ((dateStr1: string, dateStr2: string) => void),
    isLoading: boolean,
};

const FormDates: React.FC<Props> = ({
    callback,
    isLoading,
}) => {
    const [dateStr1, setDateStr1] = useState('2020-05-01');
    const [dateStr2, setDateStr2] = useState('2020-05-30');
    const [isValidDate1, setIsValidDate1] = useState(true);
    const [isValidDate2, setIsValidDate2] = useState(true);

    const search = () => callback(dateStr1, dateStr2);

    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Date From: </Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="yyyy-mm-dd"
                    onChangeText={dateStr1 => {
                        setDateStr1(dateStr1);
                        setIsValidDate1(Moment(dateStr1, 'YYYY-MM-DD', true).isValid());
                    }}
                    defaultValue={dateStr1}
                />
            </View>
            {isValidDate1 || <Text style={styles.error}>Is Not Valid</Text>}
            <View style={styles.field}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Date To: </Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="yyyy-mm-dd"
                    onChangeText={dateStr2 => {
                        setDateStr2(dateStr2);
                        setIsValidDate2(Moment(dateStr2, 'YYYY-MM-DD', true).isValid());
                    }}
                    defaultValue={dateStr2}
                />
            </View>
            {isValidDate2 || <Text style={styles.error}>Is Not Valid</Text>}
            <TouchableOpacity
                disabled={isLoading ? isLoading : (!isValidDate1 || !isValidDate2)}
                style={(isLoading ? isLoading : (!isValidDate1 || !isValidDate2)) ? styles.buttonDisabled : styles.button}
                onPress={search}
            >
                {isLoading ? <ActivityIndicator /> : <Text>Search</Text>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    field: {
        flexDirection: "row",
    },
    label: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    labelText: {
        textAlign: 'center',
    },
    input: {
        flex: 2,
        height: 40,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#C2FFF9",
        padding: 10
    },
    buttonDisabled: {
        alignItems: "center",
        backgroundColor: "grey",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    error: {
        textAlign: 'center',
        color: "red",
        marginBottom: 5,
    }
});
export default FormDates;