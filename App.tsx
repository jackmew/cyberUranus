import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import Moment from 'moment';
import AppList from './AppList';
import { fetchReport } from "./Api";
import { ReportState } from "./AppDataType";

const App: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ReportState[]>([]);

    useEffect(() => {
        setLoading(true);
        async function getReport() {
            const data = await fetchReport();
            setData(data);
        }
        getReport();
        setLoading(false)
    }, []);


    Moment.locale("zh");

    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: "#f5f5f5" }}>
            {isLoading ? <ActivityIndicator/> : <AppList data={data} />}
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
