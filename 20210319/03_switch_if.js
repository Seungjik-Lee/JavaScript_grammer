const date = new Date()
const hour = date.getHours()

switch(true){
    case hour < 11:
        console.log('아침 먹을 시간')
        break
    case hour < 15:
        console.log('점심 먹을 시간')
        break
    default:
        console.log('저녁 먹을 시간')
        break
}