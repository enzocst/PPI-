let numbers = ['8', '6', '2', '4'];
let j = 1;
while (j < numbers.length) {
    let x = numbers[j]
    let i = j - 1
    while (i >= 0 && numbers[i] > x) {
        numbers[i + 1] = numbers[i]
        i = i - 1
    }
    numbers[i + 1] = x
    j = j + 1

}
console.log(numbers);