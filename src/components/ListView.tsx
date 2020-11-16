import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import Moment from 'moment';
import { Report } from "../AppDataType";


type Props = {
    reports: Report[]
};

const ListView: React.FC<Props> = (props) => (
    <FlatList
        data={props.reports}
        keyExtractor={({ id }, index) => index.toString()+id}
        renderItem={({ item }: { item: Report }) => (
            <View style={styles.listItem}>
                <Text>{"Id: "+item.id}</Text>
                <Text>{"Date: "+ Moment(item.date).format("YYYY-MM-DD hh:mm:ss")}</Text>
                <Text>{"Date Uploaded: "+ Moment(item.date_uploaded).format("YYYY-MM-DD hh:mm:ss")}</Text>
                <Text>Battery  {"One: "+item.battery.battery1} {"Two: "+item.battery.battery2}</Text>
                <Text>{"Lat: "+ item.gps.lat} {"Long: " + item.gps.long}</Text>
                <Text>{"Motion x: "+item.motion.x} {"y: "+ item.motion.y} {"z: "+item.motion.z}</Text>
            </View>
        )}
    />
);

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 40,

        height: 130,
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
export default ListView;