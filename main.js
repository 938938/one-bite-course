let object = {
  key1: "value", // 프로퍼티(객체 프로퍼티),
  key2: "value2", // key는 반드시 문자열로(따음표x). 키 이름이 중복될 경우 오류 발생x but 뒤에 값만 인식. value에는 어떤 자료도 넣을 수 있음(함수까지도).
  fnc: function(){
    console.log(`Hello ${this["key1"]}`);
  }
}; // 객체 리터럴 방식.
console.log(object.key1); // value - 점 표기법
console.log(object["key2"]); // value2; - 괄호 표기법

console.log(getPropertyValue("key1")); // value

function getPropertyValue (key){
  return object[key]; // 동적인 파라미터를 전달받는 상황에서는 괄효 표기법을 주로 사용함.
}

object.key3 = "value3";
object["key4"] = "value4"; // 프로퍼티 추가
object.key3 = "value3-1"; // 프로퍼티 수정
// delete object["key3"];
delete object.key4; // 프로퍼티 삭제 - but 객체에서 삭제될 뿐 메모리는 계속 사용됨
object.key3 = null; // 메모리가 사용되지 않기 때문에 delete보다 더 추천됨.
console.log(object);

object["fnc"]();
object.fnc(); // 프로퍼티 함수 실행

console.log(`what : ${"what" in object}`); // object에 what이라는 객체가 있는지 없는지 확인

//삼항연산자
let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");
// 조건식 ? 참일 때 수행 : 거짓일 때 수행;
let b = [];
const arrayStatus = b.length===0 ? "내용 없음" : "내용 있음"; // 참, 거짓 부분은 함수를 호출할 수도 있고 대입연산자로 결과를 값으로 받아볼 수 있음
console.log(arrayStatus);

let c =[];
const result = a ? true : false; // true

// 학점 계산 프로그램
// 90점 이상 A+ , 50점 이상 B+ , 둘 다 아니면 F

let score = 100;
score >= 90 
  ? console.log("A+")
  : score >= 50 
  ? console.log("B+") 
  : console.log("F");
// 삼항연상자는 연달아 쓸 수 있음 (중첩삼항연산자)
// But. 가독성이 떨어지기 때문에 If 조건문을 사용하는게 더 좋음

const getName = (person) => {
  // if(!person){
  //   return "객체가 아닙니다.";
  // }
  // return person.name;
  const name = person && person.name;
  return name || "객체가 아닙니다";
};

// let person;
let person = { name : "abc" };
const name = getName(person);
console.log(name);

// 조건문 업그레이드
function isKoreanFood(food){
  // if(food ==="불고기" || food === "비빔밥" || food === "떡볶이"){
  //   return true;
  // }
  if(["불고기", "떡볶이", "비빔밥"].includes(food)){
    return true;
  }
  return false;
}
const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1); // true
console.log(food2); // false

const getMeal = (mealType) =>{
  if(mealType === "한식")return "불고기";
  if(mealType === "양식")return "파스타";
  if(mealType === "중식")return "멘보샤";
  if(mealType === "일식")return "초밥";
  return "없음";
}

const meal = {
  한식 : "불고기",
  중식 : "멘보샤",
  양식 : "파스타",
  일식 : "초밥",
  인도식 : "카레"
};
const getMeal2 = (mealType) => {
  return meal[mealType] || "없음";
};
console.log(getMeal2("한식"));

// 비구조화 할당
let arr = ["one","two","three"];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 위와 아래는 같음
let [one1, two1, three1] = arr; // 배열의 기본변수 비 구조화 할당.
let [one2, two2, three2, four2 = 'default'] = ["one","two","three"]; // 이 경우 arr을 따로 지정할 필요x // 배열의 선언 분리 비 구조화 할당 // four2 의 경우 undefined이 뜸, 기본값을 지정할 수 있음(default)

// 스왑
let first = 10;
let second = 20;
[first, second] = [second, first];
console.log(first, second); // 20, 10 . (변수 바뀜)

// 객체의 비구조화 할당
let object1 = { one:"one", two: "two", three:"three", keyname : "abc"};

// let one = object.one;
// let two = obejct.two;
// let three = object.three;
let {one, two, three, keyname:key_name, nothing = 'nothing' } = object; // 순서가 아니라 키 값을 기준으로 할당. :을 사용해서 다른 변수이름을 할당할 수 있음. 배열과 마찬가지로 디폴트값 설정 가능.


// Spread 연산자 : 중복된 프로퍼티를 계속 작성해야 하는 경우 사용.
const cookie = {
  base : "cookie",
  madeIn : "korea"
};
const cookie1 = {
  base : "cookie",
  madeIn : "korea",
  toping : "chocochip"
};
const cookie2 = {
  ...cookie, // 위의 base, madeIn을 쓴 것과 같은 효과. 스프레드 연산자. 
  toping : "blueberry"
};
// 배열에도 사용 가능
const noToping = ["촉촉한쿠키","안촉촉한쿠키"];
const topingCookie = ["바나나쿠키","초코칩쿠키","말차쿠키","딸기쿠키"];
const allCookies = [...noToping, ...topingCookie, "한정쿠키"];

//동기&비동기

//동기적 방식
function taskA(){
  console.log("A 작업 끝");
}
taskA();
console.log("코드 끝");

//비동기 방식
function taskB(){
  setTimeout(() => {
    console.log("B 작업 끝")
  }, 2000);
}
taskB();
console.log("코드 끝"); // 코드 끝이 먼저 나온 후 B작업 끝
//콜백함수 활용
function taskC(a, b, cb){
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
function taskD(a,cb){
  setTimeout(() => {
    const res = a*2;
    cb(res);
  }, 1000);
}
taskC(3,4,(res)=>{
  console.log("C 작업 결과 :", res);
});
taskD(7, (res)=>{
  console.log("D 작업 결과 :", res);
}); // D작업(1초), B작업(2초), C작업(3초) 순서로 작업 완료

console.clear();


// Promise
function isPositive(number,resolve,reject){
  setTimeout(() => {
    if(typeof number === 'number'){
      //성공 resolve
      resolve(number >= 0 ? "양수":"음수")
    } else {
      // 실패 reject
      reject("주어진 값이 숫자가 아닙니다");
    }
  }, 2000);
}

function isPositiveP(number){ // isPositiveP의 반환 값 : Promise. 이 함수는 비동기 작업을 함.
  const executor = (resolve, reject) =>{ // executor : 실행자
    setTimeout(() => {
      if(typeof number === 'number'){
        //성공 resolve
        resolve(number >= 0 ? "양수":"음수")
      } else {
        // 실패 reject
        reject("주어진 값이 숫자가 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor); // Promise객체에 비동기작업의 실질적 실행자 함수를 넘겨줌. → 전달하는 순간 자동으로 바로 executor 함수 실행.
  return asyncTask;
}
const res = isPositiveP([]);

res
  .then((res)=>{  // resolve -> then
    console.log("성공", res)
  })
  .catch((err)=>{ // reject -> catch
    console.log("실패", err)
  });

// isPositive("얍",(res)=>{
//     console.log(`성공 ${res}`)
//   },(err)=>{
//     console.log(`실패 ${err}`)
//   }
// )

// callback Hell → Promise
function task1(a, b){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}
function task2(a){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  })
}
function task3(a){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  })
}
//콜백지옥
// task1(3, 4, (a_res)=>{
//   console.log(a_res);
//   task2(a_res, (b_res)=>{
//     console.log(b_res);
//     task3(b_res, (c_res)=>{
//       console.log(c_res);
//     });
//   });
// });
const bPromiseResult = task1(5,1).then((a_res)=>{
  console.log(a_res);
  return task2(a_res);
  // task2(a_res).then((b_res)=>{
  //   console.log(b_res);
  //   task3(b_res).then((c_res)=>{
  //     console.log(c_res);
  //   })
  // })
  }
);
console.log("프로미스는 이렇게 중간에 끊어서 다른거 수행할 수도 있음!");
bPromiseResult.then((b_res)=>{
    console.log(b_res);
    return task3(b_res);
  }).then((c_res)=>{
    console.log(c_res);
  }
); // then 메서드를 계속해서 이어붙이는 것 : then chaining

// async
function delay (ms) {
  return new Promise((resolve)=>{
    setTimeout(resolve, ms);
  })
}
async function helloAsync(){
  await delay(3000); // await 키워드를 비동기 함수 앞에 호출하게 되면, 동기적인 함수철머 작동. async가 붙은 함수 내에서만 사용 가능.
  return 'hello async';
  // return delay(3000).then(()=>{
  //   return 'hello async';
  // });
} // 함수에 async를 붙이면 자동적으로 프로미스를 리턴하는 비동기처리함수가 됨
async function main(){
  const res = await helloAsync()
  console.log(res);
}
main();