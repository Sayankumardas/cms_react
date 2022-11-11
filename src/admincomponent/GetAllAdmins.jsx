import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminService from "../service/AdminService";
import "../css/GetAllAdmins.css";

export class getAllAdmins extends Component{
    constructor(props){
        super(props);
        this.state = {
            admins: []
        }
        // this.deleteMember = this.deleteMember.bind(this);
        this.memberLogout = this.memberLogout.bind(this);

    }
    
    componentDidMount(){
        
        AdminService.getAllAdmins().then ((res) =>{
            console.log(res.data);
            this.setState({admins : res.data});
        })
    }
    // deleteMember(memberId){
    //     MemberService.deleteMember(memberId).then(res => {
    //         this.setState({members:this.state.members.filter(member =>member.memberId !== memberId)});
    //     })
    // }
    memberLogout(){
        this.props.history.push("/")
        
    }

    render(){
        return(
            <><h2 className="text-center">Admin List</h2>

<div class="logout">
                <button className="btn btn-danger" onClick={this.memberLogout}>Logout</button>
            </div>


            <div class="options">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-expanded="false">
                MENU
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                <Link to={"/getallmembers"} class="dropdown-item" type="button">View All Members</Link>
                <Link to={"/getallplans"} class="dropdown-item" type="button">View All Plans</Link>
                <Link to={"/getclaimdetails"} class="dropdown-item" type="button">View all Claims</Link>
            </div>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                        <tr>
                            <th>Admin Id</th>
                            <th>Admin Password</th>
                        </tr>   
                        <tbody>
                            {
                                 this.state.admins.map(
                                    Admin =>
                            <tr key={Admin.adminId}>
                                <td>{Admin.adminId}</td>
                                <td>{Admin.adminPass}</td>
                            </tr>
                                 )  

                            }
                        </tbody>                                   
                </table>
            </div></> 
            )
    }

}