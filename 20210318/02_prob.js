        //문제3
        const rawInput = prompt('cm 단위의 숫자를 입력해라')
        const cm = rawInput
        const inch = (cm / 2.54)
        console.log(`${cm}cm는 ${inch}inch입니다.`)

        //문제4
        const Input = prompt('원의 반지름을 입력해라')
        const r = Input
        const width = 3.14 * r * r
        const round = 2 * 3.14 * r
        console.log(`원의 반지름 : ${r}`)
        console.log(`원의 넓이 : ${width}`)
        console.log(`원의 둘레 : ${round}`)

        //문제 5
        const Inputdollar = prompt('달러 단위의 금액을 입력해라')
        const dollar = Inputdollar
        const won = dollar * 1207
        console.log(`달러 : ${dollar}`)
        console.log(`원화 : ${won}`)