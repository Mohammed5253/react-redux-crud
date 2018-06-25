import React, { Component } from 'react';
import * as actions from '../_action/empActions';
import { connect } from 'react-redux';


class EmpForm extends Component {
   
    insert = () => {
        const data = {
            FirstName:this.getfirstname.value,
            LastName:this.getlastname.value,
            Phone:this.getphone.value,
        }
        this.props.addEmp(data);
        this.reset();
    }
    reset = () => {
        this.getfirstname.value =  this.getlastname.value = this.getphone.value = '';
    }

    render(){
        
    return(
        <tr>
            <td><input required type="text" placeholder="Enter your First Name" ref={(input)=>this.getfirstname = input}/> </td>
            <td><input required type="text" placeholder="Enter your Last Name" ref={(input)=>this.getlastname = input} /></td>
            <td><input required type="text" placeholder="Enter Phone No" ref = {(input)=>this.getphone = input}/></td>
            <td><button className="button btn-default" onClick={this.insert}>Add Emp</button></td>
            <td><button className="button btn-default" onClick={this.reset}>Reset</button></td>
       </tr> 
    )
    }
    
    
}
export default connect('',actions)(EmpForm);