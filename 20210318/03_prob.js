const Input1 = prompt('숫자1을 입력해라')
const point1 = Input1
const Input2 = prompt('숫자2를 입력해라')
const point2 = Input2

    if(Input1 > 0 && Input2 > 0)
    {
    console.log('1')
    }
    else if(Input1 < 0 && Input2 > 0)
    {
    console.log('2')
    }
    else if(Input1 < 0 && Input2 < 0)
    {
    console.log('3')
    }
    else
    {
    console.log('4')
    }
