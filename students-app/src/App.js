// import react, {Component} from 'react';
import { useState } from 'react';
import react from 'react';
import Student from './student';
import './App.css';



function App(props) {
  const [students] = useState({
      students: [
        {
          name: 'Cait Yomorta',
          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus'
          scores: [
            {
             date: '2018-02-08',
             score: 77
            },
            {
             date: '2018-04-22',
             score: 92
            },
            {
            date: '2018-09-15',
            score: 68
            }
           ]
      ]
           },
           {
  return (
    <div className="App">
      {students.map((student, index) =>(
     <Student student = {student} key = {index}/>))
    </div>
  );
}

export default App;
