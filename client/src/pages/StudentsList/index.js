import React, { Component } from "react";
import API from "../../utils/Api";
import Phone from "../../components/Phone";

class StudentsList extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        API.getStudentsList()
            .then(res => {
                console.log(res.data)
                this.setState(
                    {
                        list: res.data
                    }
                )
            });
        // console.log(this.state.list);

    }

    handleDeleteButton(e) {
        console.log(e.target.id);

        console.log("deleting");
        API.removeStudent(e.target.id).then(res => console.log(res))

    }

    // test = () => {
    //     console.log(this.state.list)

    // }
    render() {
        return (
            <div>
                {/* {this.state.list[0].name} */}
                {/* {this.test()} */}
                <ul>
                    {this.state.list.map(e =>
                        <li key={e._id}>{e.name}
                            <button id={e._id} onClick={this.handleDeleteButton} >delete</button>
                            <Phone
                                phonevalue={e.phone} />
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default StudentsList;
