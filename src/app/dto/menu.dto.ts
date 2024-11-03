import { Status } from "./enum/status.enum";

export interface Menu{
    id:number;
    name:string;
    url:string;
    status:Status;
    icon:string,
    parent:Menu;
    children:Menu[];
}