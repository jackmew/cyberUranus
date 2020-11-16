import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Moment from 'moment';
import ListView from './src/components/ListView';
import FormDates from "./src/components/FormDates";
import PickerSearchById from "./src/components/PickerSearchById";
import {fetchReportDateFromTo} from "./src/Api";
import {ReportState} from "./src/AppDataType";
import PickerSortByColumn, {Order} from "./src/components/PickerSortByColumn";

Moment.locale("zh");



const App: React.FC = () => {
    const [isLoading, setLoading] = useState(false);
    const [reports, setReports] = useState<ReportState[]>([]);
    const [filteredReports, setFilteredReports] = useState<ReportState[]>([]);

    const search = async (dateFrom: string, dateTo: string) => {
        // console.log(dateFrom + " " + dateTo);
        setFilteredReports([]);
        setReports([]);
        setLoading(true);
        const reports = await fetchReportDateFromTo(dateFrom, dateTo);
        setReports(reports);
        setLoading(false)
    }

    const searchById = (reportIdSelected: string) => {
        if (reportIdSelected !== "") {
            const reportsSearchById = reports.filter(report => report.id === reportIdSelected);
            setFilteredReports(reportsSearchById);
        } else {
            setFilteredReports(reports);
        }
    }
    const renderPickerId = () => {
        if (reports.length !== 0) {
            const reportIds = reports.map(report => report.id);
            return <PickerSearchById callback={searchById} reportIds={Array.from(new Set(reportIds))} />
        }
    }
    const sort = (column: string, order: Order) => {
        if (column === "date_uploaded") {
            if (order === Order.DESCEND) {
                const sorted = [...filteredReports].sort((a, b) => Moment(b.date_uploaded).valueOf() - Moment(a.date_uploaded).valueOf());
                setFilteredReports(sorted);
            } else {
                const sorted = [...filteredReports].sort((a, b) => Moment(a.date_uploaded).valueOf() - Moment(b.date_uploaded).valueOf());
                setFilteredReports(sorted);
            }
        } else if (column === "date") {
            if (order === Order.DESCEND) {
                const sorted = [...filteredReports].sort((a, b) => Moment(b.date).valueOf() - Moment(a.date).valueOf());
                setFilteredReports(sorted);
            } else {
                const sorted = [...filteredReports].sort((a, b) => Moment(a.date).valueOf() - Moment(b.date).valueOf());
                setFilteredReports(sorted);
            }
        }
    }
    const renderPickerSortByColumn = () => {
        if (reports.length !== 0) {
            return <PickerSortByColumn callback={sort} columns={["date", "date_uploaded"]} />
        }
    }
    // useEffect(() => {
    //     setLoading(true);
    //     async function getReport() {
    //         const data = await fetchReport();
    //         setData(data);
    //     }
    //     getReport();
    //     setLoading(false)
    // }, []);

    return (
        <View style={{ flex: 1, padding: 24, backgroundColor: "#f5f5f5" }}>
            <FormDates callback={search} isLoading={isLoading} />
            {renderPickerId()}
            {renderPickerSortByColumn()}
            <ListView reports={filteredReports.length === 0 ? reports : filteredReports} />
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
