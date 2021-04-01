function Bachelor(name, age) {
    // name = typeof (name) == undefined ? name : '이승직'
    // age = typeof (age) == undefined ? age : 26

    name = name || '이승직'
    age = age || 26

    console.log('반가워요 ' + name + '님')
    console.log('당신의 나이는 ' + age + '세 입니다.')
}

Bachelor()
Bachelor('이나겸')
Bachelor('박명회', 30)