import React from "react"
import '../css/AdminLogin.css';
import AdminService from "../service/AdminService";
export class AdminLogin extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
        admins: [],
        adminId: '',
        adminPass : '',
        adm : ''
    }
    this.changeAdminIdHandler = this.changeAdminIdHandler.bind(this);
    this.changeAdminPassHandler = this.changeAdminPassHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    // this.deleteMember = this.deleteMember.bind(this);
}

componentDidMount(){
        
  AdminService.getAllAdmins().then ((res) =>{
      console.log(res.data);
      this.setState({admins : res.data});
      this.state.adm = (res.data);
  })
}

changeAdminIdHandler(event){
  this.setState({adminId:event.target.value})
}
changeAdminPassHandler(event){
  this.setState({adminPass:event.target.value})
}
buttonClickHandler = (e) => {

  e.preventDefault();
  let find = 0;
  for (let i = 0; i < this.state.adm.length; i++) {

      if ((this.state.adminId == this.state.adm[i].adminId) && (this.state.adminPass == this.state.adm[i].adminPass)) {

          alert(" Welcome Admin");
          find = 1;
          this.props.history.push("/getalladmins/"+this.state.adminId);
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
          <div class="alert alert-warning" role="alert">
            Admin Only Log In
            </div>
            <label>Enter id</label>
            <input type="text" name="adminId" Id="" className="form-control" placeholder="Id" 
            value={this.state.adminId} onChange = {this.changeAdminIdHandler}/>
        </div>
        <div className="form-group">
          <label>Enter Password</label>
            <input type="password" name="adminPass" id="" className="form-control" placeholder="Password" 
            value={this.state.adminPass} onChange = {this.changeAdminPassHandler}/>
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