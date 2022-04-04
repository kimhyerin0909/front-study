function generateSentence(desc, arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        if(i === arr.length - 1) {
            str += arr[i];
            break;
        }
        str += arr[i] + ', ';
    }
    console.log(`제가 ${desc} ${arr.length}개는 ${str}입니다.`)
}
const fruits = ['사과', '바나나', '딸기'];
generateSentence("좋아하는 과일", fruits);

const vegetable = ['시금치', '오이'];
generateSentence("싫어하는 채소", vegetable);