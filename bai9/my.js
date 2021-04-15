let arr1 = [];
let arr2 = [];
let arr3 = [];
let n = +prompt('nhap so phan tu trong mang a');
let number = 0;
for (let i = 0; i < n; i++) {
    number = +prompt('nhap phan tu cua mang a');
    arr1.push(number);
}
document.write('mang a la:' + arr1 + '<br>');
let n1 = +prompt('nhap so phan tu trong mang b');
for (let i = 0; i < n1; i++) {
    number = +prompt('nhap phan tu cua mang b');
    arr2.push(number);
}

arr3 = arr1
arr3.splice(arr3.length, 0, arr2);


document.write('mang b la:' + arr2 + '<br>');
document.write('mang c la:' + arr3 + '<br>');