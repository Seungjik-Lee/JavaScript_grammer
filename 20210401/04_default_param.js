function Bachelor(name = '이승직', age = 26) {
    console.log('반가워요 ' + name + '님')
    console.log('당신의 나이는 ' + age + '세 입니다.')
}
Bachelor() // 기본 매개변수 값인 '이승직'을 사용
Bachelor('이나겸')
Bachelor('박명회', 30)