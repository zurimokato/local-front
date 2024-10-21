import { Status } from "./enum/status.enum";

export interface Store{
    id:number,
    name:string,
    address:string,
    phone:string,
    status:Status
}