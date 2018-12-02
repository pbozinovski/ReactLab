import React from 'react';

const AddStudent = (props) => {

    const onFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();


            props.onAdd(
                {

                    name: formSubmitEvent.target.name.value,
                    lastname: formSubmitEvent.target.lastname.value,
                    index: formSubmitEvent.target.index.value,
                    direction: formSubmitEvent.target.direction.value,
                    editing: false
                }
            );

    }

    return (
        <form onSubmit={onFormSubmit}>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Firstname</label>
                    <input name="name"
                           placeholder={"Enter the name of the student..."} type={"text"}
                           className="form-control"/>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Lastname</label>
                    <input name="lastname" placeholder={"Enter the lastname of the student..."} type={"text"}
                           className="form-control"/>

                </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Index</label>
                    <input name="index" placeholder={"Enter the index..."} type={"text"}
                           className="form-control"/>

                </div>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Program</label>
                    <input name="direction" placeholder={"Enter the program..."} type={"text"}
                           className="form-control"/>

                </div>

                <div className="form-group">
                    <button type="submit"
                            className="btn btn-outline-success">
                        Add Student
                    </button>

                </div>

        </form>
    );

};
export default AddStudent;

