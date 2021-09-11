import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';



      function triviaFetch(){
        fetch("http://jservice.io/api/random")
.then((response) => response.json())
.then((data) => {
        console.log("Success:", data);
      });
      }


function App() {

 console.log(info)

 console.log(info.question)
  
  return (
    <div className="App">
      <button onClick={ ()=> triviaFetch()}>Random Trivia Question</button>
   {info&& <div>question: {info.question}</div>}
    </div>
  );
}

export default App;
