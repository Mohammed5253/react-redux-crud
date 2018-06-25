import React, { Component } from 'react';
import * as actions from '../_action/empActions';
import { connect } from 'react-redux';
import EditEmp from '../components/EditEmp';


class Emp extends Component {
    
    render(){
        console.log(this.props)
    return(
        
        <tr>
         <td>{this.props.emp.FirstName}</td>
         <td>{this.props.emp.LastName}</td>
         <td>{this.props.emp.Phone}</td>
         <td><button className="button btn-default" onClick={()=>this.props.editEmp(this.props.emp.id)}>Edit</button></td>
         <td><button className="button btn-default"  onClick={()=>this.props.deleteEmp(this.props.emp.id)}>Delete</button></td>
        </tr> 
    )
    }  
}
export default connect('', actions)(Emp);