import React, { Component } from "react";
import API from "../../utils/Api";

class AddStudent extends Component {
    state = {
        name: "",
        age: "",
        email: "",
        phone: "",
        course: "",
        status: ""
    };

    handleInputChange = e => {
        // console.log("working");
        // console.log(e.target);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })


    }

    handleFormSubmit = e => {
        e.preventDefault();

        const newStudent = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
            course: this.state.course,
            status: this.state.status
        }
        console.log(newStudent);
        // axios

        API.createStudent(newStudent);

        this.setState(
            {
                name: "", age: "", email: "", phone: "", course: "",
                status: "",
            }
        )
    }

    // When the component mounts, load the next dog to be displayed

    render() {
        return (
            <div>
                <form>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="name" />
                    <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="age" />
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="email" />
                    <input
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="phone" />
                    <input
                        name="course"
                        type="text"
                        value={this.state.course}
                        onChange={this.handleInputChange}
                        placeholder="course" />
                    <input
                        name="status"
                        type="text"
                        value={this.state.status}
                        onChange={this.handleInputChange}
                        placeholder="status" />

                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddStudent;
