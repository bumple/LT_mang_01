
let nums = []
let n = +prompt("nhap so luong so muon test")
let max = 0

for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}

for (let i = 1; i < nums.length; i++) {
    if (max < nums[i]) {
    max = nums[i]
    }
}
document.write("value: " + max + " position: "+ nums.indexOf(max))