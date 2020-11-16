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
    z: string,
}
export type Report = {
    id: string,
    date: string,
    date_uploaded: string,
    battery: Battery,
    gps: Gps,
    Motion: Motion,
}
export type ReportState = Report;