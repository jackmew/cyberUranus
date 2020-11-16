import { ReportState } from "./AppDataType";

// pass CORS - https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const endpointTest = "http://167.99.171.123:8080/api/report?dateFrom=2020-05-01&dateTo=2020-05-30";
const endpoint = "http://167.99.171.123:8080/api/report";

export const fetchReport = async (): Promise<ReportState[]> => {
    try {
        const json = await (await fetch(proxyurl + endpointTest)).json();
        // console.log(json.data)
        return json.data;
    } catch (ex) {
        console.error(ex);
    }
    return [];
}
export const fetchReportDateFromTo = async (dateFrom: string, dateTo: string): Promise<ReportState[]> => {
    try {
        const json = await (await fetch(proxyurl + endpoint + "?dateFrom=" + dateFrom + "&dateTo=" + dateTo)).json();
        // console.log(json.data)
        return json.data;
    } catch (ex) {
        console.error(ex);
    }
    return [];
}
// fetch(proxyurl + url)
//     .then((response) => response.json())
//     .then((json) => setData(json.data))
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));