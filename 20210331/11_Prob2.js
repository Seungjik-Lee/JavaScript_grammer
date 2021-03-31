let start = "1";
for (let i = 0; i < 20; i++) {
    console.log((i + 1) + "번째 : " + start)
    let end = ""; //누적값
    let number = start.charAt(0); //몇 개인지 구해야 하는 숫자
    let count = 0;
    for (let j = 0; j < start.length; j++) {
        if (number != start.charAt(j)) {
            end = end + number + count;
            count = 1;
            number = start.charAt(j);
        } else {
            count++;
        }
    }
    end = end + number + count; //해당 층에 최종적으로 보여져야 하는 수열 나타내기
    start = end; //그다음 개미 수열을 구하기 위함
}