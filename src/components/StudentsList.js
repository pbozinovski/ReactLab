import React, {Component} from 'react';
import StudentItem from './StudentItem';

class StudentsList extends Component {

    render() {
            const students = this.getStudents();
            return (
                <div>
                    <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Index</th>
                        <th>Program</th>

                    </tr>

                    {students}
                    </tbody>
                </table>

                </div>
            );


        }
    getStudents = () => {
        return this.props.students.map((student, index) => {
            return <StudentItem student={student} key={index} index={index}/>
        })
    };
    };
// const StudentsList = (props) => {
//
//     return (
//         <div> <h1>Hello, </h1></div>
//     );
// };


export default StudentsList;