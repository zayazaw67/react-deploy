import axios from "axios";

export default {
    createStudent: function (studentData) {
        console.log(studentData);

        return axios.post("/api/students", studentData);
    },
    getStudentsList: function () {
        console.log("getting");
        return axios.get("/api/students");
    },
    removeStudent: function (id) {
        console.log("deleted");
        return axios.delete("/api/students/" + id)

    }
};
