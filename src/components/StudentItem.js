import React, {Component} from 'react';

class StudentItem extends Component {

    render() {

        return(
                        <tr>
                            <td>{this.props.student.name}</td>
                            <td>{this.props.student.lastname}</td>
                            <td>{this.props.student.index}</td>
                            <td>{this.props.student.direction}</td>
                        </tr>
        );
}
}

export default StudentItem


