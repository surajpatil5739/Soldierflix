export class User{
    name! : string;
    mobile! : string;
    email! : string;
    password! : string;

    constructor(name:string, mobile:string, email:string, password:string){
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    }

}