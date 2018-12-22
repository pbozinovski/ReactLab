import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import StudentsList from './components/StudentsList';
import AddStudent from './components/AddStudent';

import {listStudents} from "./repository/StudentRepository";
import {addStudent, deleteStudent, getStudentsFromApi} from "./repository/studentAPI";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: []
        };
    }

    render() {


    return (
      <div className="m-3">
          <StudentsList students={this.state.students} delete={this.delete} showEditForm={this.showEditForm} saveForm={this.saveForm}/>
          <div>
          <AddStudent onAdd={this.onAdd}/>

          </div>
      </div>
    );
  }

  componentDidMount(){
        this.loadData();
  }

  loadData = () =>{
      getStudentsFromApi()
          .then(response => response.json())
          .then((data) => {
              console.log('data: ', data)
              this.setState({
                  students: data
              })
          });

  };

    onAdd = (student) => {

        // this.setState((state, props) => {
        //     return {
        //         students: [...state.students, student]
        //     };
        // });
        addStudent(student).then((response) =>{
            this.loadData();
        });
    };

    delete = (index) => {
        // const students = Object.assign([], this.state.students);
        // students.splice(index, 1);
        // //console.log(index);
        // this.setState({students: students});
        deleteStudent(index).then((response) => {
            this.loadData()
        });
    };

    showEditForm = (ind) => {
        //const test = this.state.students.editing;
        const students = Object.assign([], this.state.students);
        students[ind].editing = true;
        this.setState({students: students});
        //console.log(ind);
    };

    saveForm = (ind) => {
        //let val = this.refs.text1.value;
        const students = Object.assign([], this.state.students);
        students[ind].editing = false;
        this.setState({students: students});
       //console.log(this.refs.text1);
    }


}

export default App;
