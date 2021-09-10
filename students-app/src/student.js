import react from "react";

function Student(props) {
  return (
    <div>
      {props.student.name}
      {props.student.bio}
      {props.student.scores.date}
      {props.student.scores.score}
      <h3>What's Up! School's Out for Eva!</h3>
    </div>
  );
}

export default Student;
