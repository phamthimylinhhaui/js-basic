/**
 * 1. khởi tạo đối tượng trong js
 */

// var keyPhone = 'phone';
// var address = 'Ha noi';

// var myInfor = {
//     name: 'linh pham',
//     age: 12,
//     address: address,
//     [keyPhone]: '0356895496',
//     getName: function () {
//         return this.name;
//     }
// }

// console.log(myInfor.age);
// console.log(myInfor['name']);

// var x = 'name';
// console.log(myInfor[x]);//linhpham
// console.log(myInfor[keyPhone]);
// console.log(myInfor.address);
// console.log(myInfor.getName());

// delete myInfor.age;
// console.log(myInfor);


/**
 * 2. object contructor
 * 
 */
// function user(firstName, lastName, age)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.getName = function() {
//         // return this.firstName + this.lastName;
//         return `${this.firstName} ${this.lastName} `;
//         // return "${this.firstName} ${this.lastName}";//false
//     }
// }

// var person = function (firstName, lastName, age)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// var client = new user('lan', 'pham', 18);
// client.comment = 'xin chao';
// console.log(client);
// console.log(client.getName());

// var admin = new user('linh', 'pham', 12);
// admin.role = 'all';
// console.log(admin);
// console.log(admin.constructor === user);


/**
 * 3. prototype
 * - nếu contructor được coi là khung ngôi nhà
 * - thì prototype được coi là vật liệu xây nhà
 */
function User(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function() {
        return `${this.firstName} ${this.lastName} `;
    }
}

User.className = 'f8';//false 
User.prototype.className = 'f8';// phải thêm .prototype mới được định nghĩa

var user1 = new User('lan', 'pham', 18);
console.log(user1);
console.log(user1.className);
console.log(user1.getName());


