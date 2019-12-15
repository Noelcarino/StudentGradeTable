import React from 'react';

export default class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td scope="row">
          {this.props.name}
        </td>
        <td scope="row">
          {this.props.course}
        </td>
        <td scope="row">
          {this.props.grade}
        </td>
        <td scope="row">
          <button className="btn btn-danger" onClick={() => this.props.deleteButton(this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
