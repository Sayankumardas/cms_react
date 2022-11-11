import React from "react"
import '../css/MemberLogin.css';
import MemberService from "../service/MemberService";
import '../css/Footer.css'
export class MemberLogin extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
        Member : [],
        memberId : '',
        memberPass :'',
        cus :''
    }

    this.changeMemberIdHandler = this.changeMemberIdHandler.bind(this);
    this.changeMemberPassHandler = this.changeMemberPassHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
}

changeMemberIdHandler(event){
  this.setState({memberId:event.target.value})
}
changeMemberPassHandler(event){
  this.setState({memberPass:event.target.value})
}
componentDidMount(){
  
  MemberService.getAllMembers().then ((res) =>{
      console.log(res.data);
      this.setState({Members : res.data});
      this.state.cus = (res.data);
  })
}


buttonClickHandler = (e) => {

  e.preventDefault();
  let find = 0;
  for (let i = 0; i < this.state.cus.length; i++) {

      if ((this.state.memberId == this.state.cus[i].memberId) && (this.state.memberPass == this.state.cus[i].memberPass)) {

          alert(" welcome " + " " + this.state.cus[i].memberName);
          find = 1;
          this.props.history.push("/getmember/"+this.state.memberId);
      }
  }
  if (find === 0) {
      alert("Inavlid Username or Password");
  }
}
    render(){
        return(
        
      <div className="Member">

      <form className="Auth-form">
        <div className="Auth-form-content">
          <div class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group">
          <div class="alert alert-info" role="alert">
            Enter Id and Password to Login
            </div>
            <label className="lb">Enter id</label>
            <input type="text" name="memberId" Id="" className="form-control" placeholder="Id" 
            value={this.state.memberId} onChange = {this.changeMemberIdHandler}/>
        </div>

          <div className="form-group">
          <label className="lb">Enter Password</label>
            <input type="password" name="memberPass" id="" className="form-control" placeholder="Password" 
            value={this.state.memberPass} onChange = {this.changeMemberPassHandler}/>
          </div>

          <div>                                            
              <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
       <div>
                   <footer className="style">
                    © 2022 Claim Management System
                    </footer>
                    </div>          
      </div>
            
  )
}
}