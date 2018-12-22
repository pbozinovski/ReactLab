import React, {Component} from 'react';
class StudentItem extends Component {

    returnNormal = () => {
        return (
            <tr>
                <td>{this.props.student.name}</td>
                <td>{this.props.student.lastName}</td>
                <td>{this.props.student.ind}</td>
                <td>{this.props.student.studyProgram.name}</td>
                <td><button className="btn btn-primary" onClick={this.props.showEditForm.bind(this, this.props.index)}>Edit</button>
                    <button className="btn btn-danger" onClick={this.props.delete.bind(this, this.props.student.id)}>Delete</button>
                </td>

            </tr>
        );
    }

    returnEditing = () => {
            return(

                <tr>
                    <td><input ref="text1" type="text" defaultValue={this.props.student.name}/></td>
                    <td><input ref="text" type="text" defaultValue={this.props.student.lastname}/></td>
                    <td><input ref="text" type="text" defaultValue={this.props.student.index}/></td>
                    <td><input ref="text" type="text" defaultValue={this.props.student.direction}/></td>
                    <td>
                        <button className="btn btn-success" onClick={this.props.saveForm.bind(this, this.props.index)}>Save</button>
                    </td>
                </tr>
            );
    }


    render() {


        //console.log(this.props.student);
            //const edit = this.props.index;
            if(!this.props.student.editing) {

                // console.log("normal");
                // console.log(edit);
                return this.returnNormal()
            } else{
                return this.returnEditing()
                //console.log("editing");
            }




    }
}

export default StudentItem


