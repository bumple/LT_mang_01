let nums = []
let nums1 = []
n = +prompt("nhap n so")
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}
console.log(nums)

for (let i = nums.length-1; i >= 0; i--) {
    nums1.push(nums[i])
}
document.write(nums1)


