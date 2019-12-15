import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    // HEADER CONTAINER

      <div className="container-fluid  mx-auto row">

        <div className="container col-md-7 m-auto text-xl-left text-center font-weight-bold">
          <h1>
                Student Grade Table
          </h1>
        </div>

        <div className="container col-md-4 m-auto  text-xl-right text-center">
          <div style={{ 'fontSize': '100%' }} className="badge bg-warning m-auto">
              Average Grade: {this.props.averageGrade()}
          </div>
        </div>

      </div>
    );
  }
}
