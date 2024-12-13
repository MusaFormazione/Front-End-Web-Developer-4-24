"use strict";
class Admin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        throw new Error("Method not implemented.");
    }
}
class Customer {
    constructor(email, password, nickName) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
    }
    login(email, password) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=interface.js.map