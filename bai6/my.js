let nums = []
n = +prompt("nhap n so")
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}

let V = 5
let flag = false
for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(V) !== -1) {
        flag = true;
        break;
    } else {
        flag = false
    }
}

if (flag === true) {
    document.write("V is in the array")
} else {
    document.write("V is not in the array")
}