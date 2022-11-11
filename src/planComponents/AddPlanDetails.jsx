import PlanService from "../service/PlanService";
import React from "react";
import '../css/AddPlanDetails.css';
export class AddplanComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            planId :'',
            planName : '',
            planStartDate : '',
            planEndDate : '',
            insuredAmount : ''
        }

        this.changeplanNameHandler = this.changeplanNameHandler.bind(this);
        this.changeplanStartDateHandler = this.changeplanStartDateHandler.bind(this);
        this.changeplanEndDateHandler = this.changeplanEndDateHandler.bind(this);
        this.changeplanIdHandler = this.changeplanIdHandler.bind(this);
        this.changeplaninsuredAmountHandler = this.changeplaninsuredAmountHandler.bind(this);

        this.savePlan = this.savePlan.bind(this);
    }
    savePlan = (e) =>{
        e.preventDefault();
        let plan = {planId : this.state.planId,
                        planName : this.state.planName,
                        planStartDate : this.state.planStartDate,
                        planEndDate: this.state.planEndDate,
                        insuredAmount: this.state.insuredAmount}
        console.log('plan =>'+JSON.stringify(plan))
        PlanService.savePlan(plan).then(res =>{
            alert("plan added succesfully....")
        })
    }

    changeplaninsuredAmountHandler(event){
        this.setState({insuredAmount:event.target.value})
    }
    changeplanNameHandler(event){
        this.setState({planName:event.target.value})
    }
    changeplanStartDateHandler(event){
        this.setState({planStartDate:event.target.value})
    }
    changeplanEndDateHandler(event){
        this.setState({planEndDate:event.target.value})
    }
    changeplanIdHandler(event){
        this.setState({planId:event.target.value})
    }
    
    cancel(){
        alert("plan  not added ")
    }
    render(){
        return(
            <div className="pic5">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div>
                            <h2 className="name">Add plan</h2>
                        </div>
                        <div className="form">    
                            <form>
                                <div className="form-group">
                                <label>Enter Id</label>
                                  <input type="text" name="planId" id="" className="form-control" placeholder="Plan Id" 
                                  value={this.state.planId} onChange = {this.changeplanIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <select value={this.state.planName} onChange={this.changeplanNameHandler}> 
                                        <option>Select plan Name</option>
                                        <option value="Mediclaim insurance">Mediclaim insurance</option>
                                        <option value="Individual health policy">Individual health policy</option>
                                        <option value="Family floater plans">Family floater plans</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                <label>Enter plan Start Date</label>
                                  <input type="text" name="planStartDate" id="" className="form-control" placeholder="Start Date" 
                                  value={this.state.planStartDate} onChange = {this.changeplanStartDateHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter End Date</label>
                                  <input type="text" name="planEndDate" id="" className="form-control" placeholder="End Date" 
                                  value={this.state.planEndDate} onChange = {this.changeplanEndDateHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Insure Amount</label>
                                  <input type="text" name="insuredAmount" id="" className="form-control" placeholder="Total Amount" 
                                  value={this.state.insuredAmount} onChange = {this.changeplaninsuredAmountHandler}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={this.savePlan.bind(this)}>Add</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    
                                </div>

                            </form>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}