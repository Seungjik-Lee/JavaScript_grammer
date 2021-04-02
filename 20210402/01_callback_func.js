//배열에 대해서 제공되는 함수 3가지
/*
forEach, map, filter
*/
//모두 callback 함수 이용

let numbers = [273, 52, 103, 32, 57]

//forEach : 배열의 각각의 요소
numbers.forEach(function (value, index, array) { //보통 'array'는 생략
    console.log(`${index} 번째 요소 : ${value}`)
})

// //1번
// numbers = numbers.map(function (value, index, array) {
//     return value * 2
// })
// //2번
// const power = function(value, index, array)
// {
//     return value * value
// }
//3번
function power(value, index, array) {
    return value * value
}

numbers = numbers.map(power)
console.log(numbers)

numbers.forEach(console.log)

//filter : map과 비슷하지만 특정 조건을 만족하는 것을 추려내서 새로운 배열 만듦
const numbers2 = [0, 1, 2, 3, 4, 5]
const eventNumbers = numbers.filter(function (value) {
    return value % 2 === 0
})
console.log("원본 : " + numbers2)
console.log("원본 : " + eventNumbers)

//화살표 함수
const arrowFunc= (value) => value % 2 === 0
const eventNumbers2 = numbers2.filter(arrowFunc)
console.log("원본 : " + numbers2)
console.log("원본 : " + eventNumbers)

//연속적으로 사용가능
let numbersEx = [0, 2, 3, 4, 5, 6, 7, 8, 9]
numbersEx.filter((value) => value % 2 === 0).forEach((value) =>{console.log(value)})