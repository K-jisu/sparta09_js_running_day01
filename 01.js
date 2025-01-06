// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.


1. 
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
 // 선언되었지만 값이 할당 되어지지 않았다.


// 2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 재할당 불가

3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// lotto의 index 3번째 값

4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
// or 연산자 처음 false를 반환

console.log(!!mySchedule); // < false >
// falsy 값을 boolean 값으로 변환