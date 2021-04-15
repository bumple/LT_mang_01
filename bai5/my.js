let nums = []
n = +prompt("nhap n so")
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}
let negativeNums;
for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] < 0) {
        negativeNums = nums[i]
    }
}
document.write(negativeNums)