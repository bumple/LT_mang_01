let nums = []
let n = +prompt("nhap so luong so muon test")
let max = 0
let average;
let total = 0
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}

for (let i = 1; i < nums.length; i++) {

    if (max < nums[i]) {
        max = nums[i]
    }
}
for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    average = total / nums.length
}
document.write("value: " + max + " position: " + nums.indexOf(max))
document.write("gia tri trung binh là: " + average)