let nums = []
n = +prompt("nhap n so")
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}
let V = 3
for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(V) !== -1) {
        for (let j = nums.indexOf(V); j < nums.length; j++) {
            nums[j]=nums[j+1]
        }
    }break;

}
nums.pop()
nums.push(0)
document.write(nums)


