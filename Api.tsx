import { ReportState } from "./AppDataType";

// pass CORS - https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const endpoint = "http://167.99.171.123:8080/api/report?dateFrom=2020-05-01&dateTo=2020-05-30";

export const fetchReport = async (): Promise<ReportState[]> => {
    try {
        const json = await (await fetch(proxyurl + endpoint)).json();
        console.log(json.data)
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