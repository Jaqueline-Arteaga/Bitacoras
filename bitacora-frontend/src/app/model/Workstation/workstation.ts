import { User } from "../User/user";

export class Workstation {
    id?:number;
    description?:string;
    users?:Set<User>;
}
