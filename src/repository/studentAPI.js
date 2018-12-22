export const getStudentsFromApi = () => {
    return fetch('http://localhost:9000/rest/students/all');
};

export const addStudent = (student) => {
    return fetch('http://localhost:9000/rest/students/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: student.name,
            lastName: student.lastname,
            ind: student.index,
            studyProgram:{
                "id": student.studyId,
                "name": student.studyProgramName
            }
        })
    });
};

export const deleteStudent = (id) => {
    return fetch('http://localhost:9000/rest/students/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    });
};
