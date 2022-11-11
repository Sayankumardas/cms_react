import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../service/MemberService";


export class ListMemberComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            members: []
        }
        this.deleteMember = this.deleteMember.bind(this);
    }
    
    componentDidMount(){
        
        MemberService.getAllMembers().then ((res) =>{
            console.log(res.data);
            this.setState({members : res.data});
        })
    }
    deleteMember(memberId){
        MemberService.deleteMember(memberId).then(res => {
            this.setState({members:this.state.members.filter(member =>member.memberId !== memberId)});
        })
    }

    render(){
        return(
            <><h2 className="text-center">Member List</h2>
            <div className="row">
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Member Id</th>
                            <th>Member Name</th>
                            <th>Member E-Mail</th>
                            <th>Member Contact</th>
                            <th>Member Address</th>
                            <th>Member DOB</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.members.map(
                                    Member =>
                                    <tr key={Member.memberId}>
                                        <td>{Member.memberId}</td>
                                        <td>{Member.memberName}</td>
                                        <td>{Member.memberEmail}</td>
                                        <td>{Member.memberContact}</td>
                                        <td>{Member.memberAddress}</td>
                                        <td>{Member.memberDOB}</td>
                                        <td><button className="btn btn-danger" onClick={()=> this.deleteMember(Member.memberId)}>Delete</button></td>
                                        <br></br>
                                        <td><Link to={"/updatemember/" + Member.memberId} className="btn btn-success">
                                            update
                                        </Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div></>      
            )
    }

}