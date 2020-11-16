type Battery = {
    battery1: number,
    battery2: number,
}
type Gps = {
    lat: string,
    long: string,
}
type Motion = {
    x: string,
    y: string,
    z: boolean,
}
export type Report = {
    id: string,
    date: string,
    date_uploaded: string,
    battery: Battery,
    gps: Gps,
    motion: Motion,
}
export type ReportState = Report;