import React,{useState} from 'react';
import OddEvenResult from './OddEverResult';

const Counter = ({initialValue}) => { // App.js에서 보내는 프롭을 매개변수로 받아서 저장

  //변화하는 상태(State) : <h2>0</h2>

  const [count,setCount] = useState(initialValue);
  const onIncrease = () =>{
    setCount(count+1);
  }
  const onDecrease = () =>{
    setCount(count-1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}/>
    </div>
  )
};

Counter.defaultProps={
  initialValue:0,
} // initialValue라는 값을 부모컴퍼넌트에서 내려주지 않을 경우(생략,오류등) 기본 설정값

export default Counter;