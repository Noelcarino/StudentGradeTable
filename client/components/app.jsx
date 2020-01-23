import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeArray: []
    };
    this.getGrades = this.getGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }
  componentDidMount() {
    this.getGrades();
  }
  deleteGrade(studentIdToDelete) {
    fetch(`/api/grades/${studentIdToDelete}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(() => {
        let updatedGradeArray = this.state.gradeArray.filter(student => student.id !== studentIdToDelete);
        this.setState({
          gradeArray: updatedGradeArray
        });
      });
  }
  addNewGrade(newStudent) {
    newStudent.grade = parseInt(newStudent.grade);
    fetch('/api/grades', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newStudent) })
      .then(res => res.json())
      .then(newStudentData => {
        this.setState({
          gradeArray: this.state.gradeArray.concat(newStudentData)
        });
      });
  }
  getAverageGrade() {
    let total = 0;
    this.state.gradeArray.map((sum, index) => {
      total += sum.grade;
    });
    let averageGrade = (total / this.state.gradeArray.length).toFixed(2);
    return averageGrade;
  }
  getGrades() {
    fetch('/api/grades', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then(result => result.json())
      .then(data => {
        this.setState({ gradeArray: data });
      });
  }
  render() {
    if (this.state.gradeArray.length !== 0) {
      return (
        <div style={{ 'minHeight': '90vh', 'maxHeight': '90vh', 'minWidth': '90vw', 'maxWidth': '90vw' }}className="container-fluid m-auto p-0 row">
          <div className="container-fluid col-12 mx-auto p-0">
            <div className="container-fluid row m-auto p-3">
              <Header averageGrade={this.getAverageGrade}/>
            </div>
            <div className="container-fluid row m-auto py-3 p-0">
              <div className="container-fluid col-md-4 col-lg-3  mx-auto mb-3 p-0">
                <GradeForm addNewGrade={this.addNewGrade} />
              </div>
              <div className="container-fluid col-md-7 col-lg-8  mx-auto mb-3 p-0">
                <GradeTable studentData={this.state.gradeArray} deleteStudent={this.deleteGrade} />
              </div>
            </div>
          </div>
          <div className="container-fluid col mx-auto p-0 text-center text-muted">
            © Noel Angelo Carino
          </div>
        </div>
      );
    } else {
      return (
        <div>
          No Grades Available :(
        </div>
      );
    }
  }
}
export default App;
