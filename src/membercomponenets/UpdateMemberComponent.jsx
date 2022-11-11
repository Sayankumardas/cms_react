import MemberService from "../service/MemberService";
import React from "react";
import '../css/UpdateMember.css';
export class UpdateMemberComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            memberId :this.props.match.params.Id,
            memberName : '',
            memberEmail : '',
            memberContact : '',
            memberAddress : '',
            memberDOB :'',
            memberPass :''
        }

        this.changeMemberNameHandler = this.changeMemberNameHandler.bind(this);
        this.changeMemberEmailHandler = this.changeMemberEmailHandler.bind(this);
        this.changeMemberContactHandler = this.changeMemberContactHandler.bind(this);
        this.changeMemberAddressHandler = this.changeMemberAddressHandler.bind(this);
        this.changeMemberDOBHandler = this.changeMemberDOBHandler.bind(this);
        this.changeMemberPassHandler = this.changeMemberPassHandler.bind(this);

        this.updateMember = this.updateMember.bind(this);
    }

    componentDidMount(){
        if(this.state.memberId ==='_add'){
            return
        }else{
            MemberService.getMemberById(this.state.memberId).then(
                (response)  =>{
                    let member = response.data;
                    this.setState({
                        memberName :member.memberName,
                        memberEmail : member.memberEmail,
                        memberContact : member.memberContact,
                        memberAddress : member.memberAddress,
                        memberDOB : member.memberAddress,
                        memberPass :member.memberPass
                    });
                }
            );
        }
    }

    updateMember = (e) =>{
        e.preventDefault();
        let member = {memberName : this.state.memberName,
                        memberEmail : this.state.memberEmail,
                        memberContact: this.state.memberContact,
                        memberAddress: this.state.memberAddress,
                        memberPass: this.state.memberPass,
                        memberDOB: this.state.memberDOB}
        console.log('member =>'+JSON.stringify(member))
        MemberService.updateMember(member,this.state.memberId).then(res =>{
            alert("member updated succesfully....")
        })
    }

    changeMemberNameHandler(event){
        this.setState({memberName:event.target.value})
    }
    changeMemberPassHandler(event){
        this.setState({memberPass:event.target.value})
    }
    changeMemberEmailHandler(event){
        this.setState({memberEmail:event.target.value})
    }
    changeMemberContactHandler(event){
        this.setState({memberContact:event.target.value})
    }
    changeMemberAddressHandler(event){
        this.setState({memberAddress:event.target.value})
    }
    changeMemberDOBHandler(event){
        this.setState({memberDOB:event.target.value})
    }
    cancel(){
        alert("Member  not added ")
    }
    render(){
        return(
            <div className="pic3">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="Main2">
                            <h2>Update Member</h2>
                        </div>
                        <div className="form">    
                            <form className="new">
                                <div className="form-group">
                                  <label>Enter Name</label>
                                  <input type="text" name="memberName" id="" className="form-control" placeholder="Name" 
                                  value={this.state.memberName} onChange = {this.changeMemberNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter E-Mail</label>
                                  <input type="text" name="memberEmail" id="" className="form-control" placeholder="E-Mail" 
                                  value={this.state.memberEmail} onChange = {this.changeMemberEmailHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Contact</label>
                                  <input type="text" name="memberContact" id="" className="form-control" placeholder="Contact" 
                                  value={this.state.memberContact} onChange = {this.changeMemberContactHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Date Of Biirth</label>
                                  <input type="text" name="memberDOB" id="" className="form-control" placeholder="date of birth" 
                                  value={this.state.memberDOB} onChange = {this.changeMemberDOBHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Address</label>
                                  <input type="text" name="memberAddress" id="" className="form-control" placeholder="Address" 
                                  value={this.state.memberAddress} onChange = {this.changeMemberAddressHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Password</label>
                                  <input type="text" name="memberPass" id="" className="form-control" placeholder="Password" 
                                  value={this.state.memberPass} onChange = {this.changeMemberPassHandler}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={this.updateMember.bind(this)}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    
                                </div>
                                <div>
                   <footer className="style">
                    © 2022 Claim Management System
                    </footer>
                    </div>
                                

                            </form>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}