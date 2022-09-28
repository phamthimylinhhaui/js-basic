function sum (a) {
    alert (a);
    //a là tham số
}
// sum(3);// 3 là đối số
//đối tượng argument
// các function k cần định nghĩa tham số mà khi gọi truyền vào 1 đống tham số vẫn đượ
function testArgument() {
    console.log(arguments);
}

testArgument(1, 2, 3, 4, 5);

function writeLog() {
    var myString = '';
    for (param of arguments) {// lấy từng đối tượng trong arguments gán vào biến param rồi in ra
        // console.log(param);
        // myString = myString + param + '-';
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('l1', 'l2', 'l3');

// function
/**
 * có 3 loại function
 * - Declaration function
 * - Expression function
 * - Arrow function
 * 
 * 
 * sự khác nhau giữa declartion function và expresion:
 * - khác cách khai báo, định nghĩa
 * - trong js có khái niệm hosting: thì declaration function có thể được gọi trước khi nó định nghĩa còn expresion thì k
 * 
 */

console.log(sum(3, 50));// hoàn toàn được

function sum (a, b)//declaration function
{
    return a + b;
}

console.log(sum);// false
var sum = function() {//expresion function

}

setTimeout(function() {
    // đây cũng là expresion function có thể đặt tên luôn vào để dễ hiểu 
    // settimeout(function login(){ })
});

var myObject = {// expression function
    myFunction: function() {
        //
    }
}