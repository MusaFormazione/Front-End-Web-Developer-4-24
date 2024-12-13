interface iAccessData{
    email:string
    password:string
    login(email:string, password:string):Promise<any>
}

interface iNickName{
    nickName:string
}

class Admin implements iAccessData{
    constructor(public email:string, public password:string){}
    login(email: string, password: string): Promise<any> {
        throw new Error("Method not implemented.")
    }
}

class Customer implements iAccessData, iNickName{
    constructor(public email:string, public password:string,public nickName:string){}
    login(email: string, password: string): Promise<any> {
        throw new Error("Method not implemented.")
    }

}
