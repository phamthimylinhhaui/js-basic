/**
 * 1. for
 */
// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

/**
 * 2. for in
 * return về index của mảng
 */
// var languages = {
//     name: 'php',
//     price: 2500,
// }

// var arr = ['anh', 'chị', 'em'];

// var strings = 'javascript';

// for(var key in languages) {
//     console.log(key);
// }

// for(var key in arr) {
//     console.log(arr[key]);
// }

// for(var key in strings) {
//     console.log(strings[key]);
// }

/**
 * 3. for... of // chỉ dc truyền trực tiếp với mảng chuỗi còn object cần xl mới dùng dc
 * return về value của mảng
 * 
 * 
 */


// var languages = [
//     'php', 'js', 'ruby'
// ]

// var str = 'javascript';

// for( var value of languages) {
//     console.log(value);
// }

// for( var value of str) {
//     console.log(value);
// }

// xử lý đối với obj
// var myInfor = {
//     name: 'linh',
//     age: 12
// };

// console.log(Object.keys(myInfor));
// var valueI4 = Object.values(myInfor);

// for( var value of valueI4) {
//     console.log(value);
// }

/**
 * 4. vòng lặp while
 */
//  var languages = [
//         'php', 'js', 'ruby',
//     ]
// var i = -1;
// var length = languages.length;

// while(i < length) {
//     i++;//start =1
//     console.log(languages[i]);
//     //i++ cung dc start 0
// }

/**
 * 5. vòng lặp do while
 */

var i = 0;
do{
    i++;
    console.log(i);
}while(i<10);//dung thi lap

