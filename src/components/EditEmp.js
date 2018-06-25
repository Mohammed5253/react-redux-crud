import React, { Component } from 'react';
import * as actions from '../_action/empActions';
import { connect } from 'react-redux';
import Emp from '../components/Emp.js';


class EditEmp extends Component {
   
    update = () => {
        const data = {
            firstname:this.getfirstname.value,
            lastname:this.getlastname.value,
            phone:this.getphone.value,
            id:this.props.emp.id
        }
        this.props.updateEmp(data)
    }

    render(){
        
    return(
        <tr className="editbg">
        <td><input type="text" defaultValue={this.props.emp.FirstName} ref={(input)=>this.getfirstname = input}/> </td>
        <td><input type="text" defaultValue={this.props.emp.LastName} ref={(input)=>this.getlastname = input} /></td>
        <td><input type="text" defaultValue={this.props.emp.Phone} ref = {(input)=>this.getphone = input}/></td>
        <td><button className="button btn-default" onClick={this.update}>Update</button></td>
        <td><button className="button btn-default">Cancel</button></td>
       </tr> 
    )
    }
    
    
}
export default connect('',actions)(EditEmp);