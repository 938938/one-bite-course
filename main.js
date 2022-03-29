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

const getName = (person) =>{
  // return person.name;
  if(!person){
    return "객체가 아닙니다";
  }
  return person.name;
};
// let person = { name:"abc" };
let person = null;
const name = getName(person);
