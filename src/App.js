import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import StudentsList from './components/StudentsList';
import AddStudent from './components/AddStudent';

import {listStudents} from "./repository/StudentRepository";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: listStudents()
        };
    }

    render() {
        let style = {visibility: 'hidden'};

    return (
      <div className="m-3">
          <StudentsList students={this.state.students}/>
          <div>
          <AddStudent onEdit={this.onEdit}/>
          </div>
      </div>
    );
  }
    onEdit = (student) => {

        this.setState((state, props) => {
            return {
                students: [...state.students, student]
            };
        });
    };

    editItems = () => {
      console.log("test");
    };

}

export default App;
