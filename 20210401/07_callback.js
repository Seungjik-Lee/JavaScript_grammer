function callThreeTime(callback) {
    for (let i = 0; i < 3; i++)
        callback(i)
}

function print(i) {
    console.log(`${i} 번째 함수 호출`)
}
callThreeTime(print) // 함수 명을 넣은것

callThreeTime // 함수를 통째로 넣은 것
    (
        function (i) {
            console.log(`${i} 번째 함수 호출`)
        }
    )