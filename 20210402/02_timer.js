setTimeout(() => {
    console.log('1초 뒤 실행할랭')
}, 1 * 1000); //1000ms (=1초) 뒤 실행

let count = 0;
let id = setInterval(() => {
    console.log('1초마다 실행함 ' + count)
    count++
}, 1 * 1000);

setTimeout(() => {
    console.log('5초 뒤 사라짐')
    clearInterval(id)
}, 5 * 1000); //5000ms (=5초) 에 꺼짐