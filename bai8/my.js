let nums = []
n = +prompt("nhap n so")
for (let i = 0; i < n; i++) {
    num = +prompt("nhap gia tri")
    nums.push(num)
}
document.getElementById("demo").innerHTML = nums

function myFunction() {
    nums.sort(function (a, b) {
        return b - a
    })
    document.getElementById("demo").innerHTML = nums;
}
