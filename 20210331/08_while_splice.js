const itemEx = ['사과', '바나나', '귤', '바나나', '신용원']
console.log(itemEx)
//바나나를 전부 다 지우려면
while (itemEx.indexOf('바나나') != -1) {
    itemEx.splice(itemEx.indexOf('바나나'), 1)
}
console.log(itemEx)