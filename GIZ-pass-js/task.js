
let numbers = [5, 8, 0, 1, 9, 11, 15, 16];

console.log("Original numbers list: ", numbers)

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) // change j value from="0" to "i+1" to make the code simpler and understandable
    {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i]; //(store the larger number)
            numbers[i] = numbers[j] //(make[i] index equal the smaller number)
            numbers[j] = temp; //(make[j] index equal to the largest number we store previously in "temp")
             
        }
    }
}

console.log("Numbers list After ASC sorting: ", numbers)

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) // change j value from="0" to "i+1" to make the code simpler and understandable
    {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i]; //(store the smaller number in "temp")
            numbers[i] = numbers[j] //(make[i] index equal the larger number)
            numbers[j] = temp;  //(make[j] index equal to the smaller number we store previously in "temp")

        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)
//the original code
//let numbers = [
//    5,
//    8,
//    0,
//    1,
//    9,
//    11,
//    15,
//    16
//];

//console.log("Original numbers list: ", numbers)

//for (let i = 0; i < numbers.length; i++) {
//    for (let j = 0; j < numbers.length - 1; j++) {
//        if (numbers[i] > numbers[j + 1]) {
//            let temp = numbers[j];
//            numbers[j] = numbers[j + 1]
//            numbers[j + 1] = temp;
//        }
//    }
//}

//console.log("Numbers list After sorting: ", numbers)

//for (let i = 0; i < numbers.length; i++) {
//    for (let j = 0; j < numbers.length - 1; j++) {
//        if (numbers[i] < numbers[j + 1]) {
//            let temp = numbers[j];
//            numbers[j] = numbers[j + 1]
//            numbers[j + 1] = temp;
//        }
//    }
//}

//console.log("Numbers list After Desc sorting: ", numbers)




