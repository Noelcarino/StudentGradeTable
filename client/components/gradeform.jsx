import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    if (!this.state.name) {
      alert('Please enter Student Name');
      event.preventDefault();
    } else if (!this.state.course) {
      alert('Please Enter Student Course');
      event.preventDefault();
    } else if (!this.state.grade) {
      alert('Please Enter Student Grade');
      event.preventDefault();
    } else {
      this.props.addNewGrade(this.state);
      this.resetState();
      event.preventDefault();
    }
    event.preventDefault();
  }
  resetState() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }
  render() {
    return (
      <div className="container-fluid mx-auto border d-flex flex-column bg-light text-center px-1">
        <h3>
             Add Student
        </h3>
        <form className="d-flex flex-column m-auto" onSubmit={this.handleSubmit} onReset={this.resetState} >
          <div className="form-group m-1 d-flex justify-content-end">
            <span className="p-2 input-group-text"><i className="fas fa-user"></i></span>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group m-1 d-flex justify-content-end">
            <span className="p-2 input-group-text"><i className="fas fa-book"></i></span>
            <input type="text" name="course" placeholder="Course" value={this.state.course} onChange={this.handleChange} />
          </div>
          <div className="form-group m-1 d-flex justify-content-end">
            <span className="p-1 input-group-text"><i className="fa fa-graduation-cap"></i></span>
            <input type="number" name="grade" placeholder="Grade" value={this.state.grade} onChange={this.handleChange} />
          </div>
          <div className="m-1 d-flex justify-content-beginning p-2">
            <button type="submit" className="btn btn-success mr-1 px-3">Add</button>
            <button type="reset" className="btn btn-secondary px-3">Cancel</button>
          </div>
        </form>
      </div>

    );
  }
}
