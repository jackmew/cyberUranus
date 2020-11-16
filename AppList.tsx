import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import Moment from 'moment';
import { Report } from "./AppDataType";


type Props = {
    data: Report[]
};

const AppList: React.FC<Props> = (props) => (
    <FlatList
        data={props.data}
        keyExtractor={({ id }, index) => index.toString()+id}
        renderItem={({ item }) => (
            <View style={styles.listItem}>
                <Text>{"Id: "+item.id} {Moment(item.date_uploaded).format("YYYY-MM-DD hh:mm:ss")}</Text>
                <Text>Battery  {"One: "+item.battery.battery1} {"Two: "+item.battery.battery2}</Text>
                <Text>{"Lat: "+ item.gps.lat} {"Long: " + item.gps.long}</Text>
                <Text>{"MotionX: "+item.motion.x} {"MotionY: "+ item.motion.y} {"MotionZ: "+item.motion.z}</Text>
            </View>
        )}
    />
);

const styles = StyleSheet.create({
    listItem: {

        alignItems: 'center',
        justifyContent: 'center',

        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
export default AppList;