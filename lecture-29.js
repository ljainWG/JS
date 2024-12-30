// classes and inheritance
// # is used to make a class member private so that it can't be accessed from outside the class

class User {
    constructor(uuid, username, realname, password, email, dob, address, role) {
        this.uuid = uuid;
        this.username = username;
        this.realname = realname;
        this.password = password;
        this.email = email;
        this.dob = dob;
        this.address = address;
        this.role = role;
    }
    getUsername() {
        return this.username;
    }
}
User.prototype.getRealname = function () {
    return this.realname;
};

class Employee extends User {
    constructor(uuid, username, realname, password, email, dob, address, role, department) {
        super(uuid, username, realname, password, email, dob, address, role);
        this.department = department;
    }
}
class Patient extends User {
    constructor(uuid, username, realname, password, email, dob, address, role) {
        super(uuid, username, realname, password, email, dob, address, role);
    }
}

const lakshay = new User(123, "ljxx", "Lxxxxxx xxxx", "xxxxxxxx", "xxxx@gmail.com", "9999-12-31", "abcd", "xyz");
console.log(lakshay.getUsername());
console.log(lakshay.getRealname());