/**
 * làm việc với mảng
 * - toString()
 * - join
 * - pop
 * - push()
 * - shift()
 * - unshift()
 * - splicing(): cắt xóa, thêm phần tử
 * - concat(): hợp nhất 2 mảng 
 * - slicing(): cắt mảng (index bắt đầu, index kết thúc)
 */

var languages = [
    'php',
    'js',
    'ruby'
];
var language2 = ['java', 'mysql'];
// languages.splice(1, 1); // vị trí bắt đầu, số phần tử cần xóa // nếu 2 tham số là xóa
// languages.splice(1, 0, 'dart'); // vị trí bắt đầu, số phần tử cần xóa, phần tử thêm // thêm phần tử vào trị trí index
// languages.splice(1, 1, 'java'); // vị trí bắt đầu, số phần tử ccần xóa, phần tử thanh thế

// console.log(languages)
// console.log(languages.concat(language2));
// console.log(languages.slice(0, 2));
// console.log(languages.slice(-2, -1));
console.log(languages.pop());


