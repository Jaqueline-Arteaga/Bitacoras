import { User } from "../User/user";

export class Workstation {
    idWorkstation?:number;
    description?:string;
    users?:Set<User>;
}
