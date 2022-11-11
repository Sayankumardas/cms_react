import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/GetPlanById.css';
import PlanService from '../service/PlanService.js'

export class GetPlanById extends Component{
    constructor(props){
        super(props);
        this.state = {
            plans: []
        }
    }
    
    componentDidMount(){
        
        PlanService.getPlanById(this.props.match.params.Id).then ((res) =>{
            console.log(res.data);
            this.setState({plans : res.data});
        })
    }

    render(){
        return(
            <>
            {/* <h2 className="text-center">Plan List</h2>

            // <div class="options">
            // <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-expanded="false">
            //     MENU
            // </button>
            // <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
            //     <Link class="dropdown-item" type="button">Claim History</Link>
            //     <Link to={"/addclaims/"} class="dropdown-item" type="button">Submit New Claim</Link>
            //     <Link to={"/getallplans/"} class="dropdown-item" type="button">View all Plans</Link>
            //     <Link  to={"/updatemember/" + this.state.members.memberId} class="dropdown-item" type="button">Update Details</Link>
            //     <Link  to={"/addplans/"} class="dropdown-item" type="button">Add New Plan</Link>

            // </div>
            </div> */}
            <div className="row-plan">
                <table className="table table-striped table-bordered">
                        <tr>
                            <th>Plan Id</th>
                            <td>{this.state.plans.planId}</td>
                        </tr>
                            <tr><th>Plan Name</th>
                            <td>{this.state.plans.planName}</td>
                        </tr>
                        <tr>
                            <th>Plan Start Date</th>
                            <td>{this.state.plans.planStartDate}</td>
                        </tr>
                        <tr>
                            <th>Plan End Date</th>
                            <td>{this.state.plans.planEndDate}</td>
                        </tr>
                        <tr>
                            <th>Plan Insured Amount</th>
                            <td>{this.state.plans.insuredAmount}</td>
                        </tr>                                               
                </table>
            </div></>      
            )
    }

}