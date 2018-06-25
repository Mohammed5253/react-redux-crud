import React, { Component } from 'react';
import * as actions from '../_action/empActions';
import { connect } from 'react-redux';
import EditEmp from '../components/EditEmp';
import Emp from '../components/Emp.js';
import EmpForm from '../containers/EmpForm';
class AllEmp extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentWillMount() {
        this.props.getEmp();
    }
    render() {
       
        return (
            
            <div className="container">
                <table className="table">
                    
                    <thead>
                        <h3><i>Add New Employee</i></h3>
                    <EmpForm />
                    <h3><i>List of Employees</i></h3>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Phone</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                       
                        {this.props.empList.map((d) => {
                            return d.editing?<EditEmp emp={d} key={d.id}/>:<Emp emp={d} key={d.id}/>
                                    
                        })}

                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (empList) => {

    console.log(empList)
    return {
        empList: empList
    }
}
export default connect(mapStateToProps, actions)(AllEmp);