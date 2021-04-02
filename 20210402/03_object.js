let product = {
    제품명: '망고',
    유형: '밍고',
    원산지: '필리핀'
}
console.log(product)
console.log(product.제품명)
console.log(product.유형)
console.log(product.원산지)

let student_idj = {
    name : '이승직',
    hakbeon : 5610674,
    '집에 가고싶은 사람' : '하잇',
    eat : function(food) {
        console.log(food + '를 촵촵 먹습니다.')
    },
    numbers : [1,2,3,4,5],
    introduce : function() {console.log('내 이름은 ' + this.name + ' 입네다.')}
}
console.log(student_idj)
console.log(student_idj.name)
console.log(student_idj.hakbeon)
console.log(student_idj['집에 가고싶은 사람'])
student_idj.eat('고기')
console.log(student_idj.numbers)
student_idj.introduce()

student_idj.newFunc = () => {console.log('배열처럼 뒤늦게 추가해도 됨')}
student_idj.newFunc()

student_idj.직업 = '각세'
console.log(student_idj.직업)

//키(속성) 지우기 가능
delete student_idj.hakbeon

console.log(student_idj)