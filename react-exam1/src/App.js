import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "abc";
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>안녕리액트 {name} </h2>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;