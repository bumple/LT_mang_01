let num = [5, 4, 10, 11, 14, 15, 12, 14, 42, 1, 22]
let count = 0
for (let i = 0; i < num.length; i++) {
    if (num[i] >= 10) { count++
    }
}
document.write(count)