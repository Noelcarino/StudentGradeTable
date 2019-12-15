import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    let studentArray = this.props.studentData;
    return (

      <table className="table-sm table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          { studentArray.map((student, index) => (
            <Grade
              key={index}
              id={student.id}
              name={student.name}
              course={student.course}
              grade={student.grade}
              deleteButton={this.props.deleteStudent}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
