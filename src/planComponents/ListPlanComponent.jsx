
import React, { Component } from "react";
import { Link} from "react-router-dom";
import PlanService from "../service/PlanService";

export class ListPlanComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            plans: []
        }
    }
    
    componentDidMount(){
        
        PlanService.getAllPlans().then ((res) =>{
            console.log(res.data);
            this.setState({plans : res.data});
        })
    }
    
    render(){
        return(
            <><h2 className="text-center">Plan List</h2>
            <div className="row">
                <table className="table table-striped table-inverse table-responsive fa-border" >
                    <thead className="thead-inverse">
                        <tr>
                            <th>Plan Id</th>
                            <th>Plan Name</th>
                            <th>Plan Start Date</th>
                            <th>Plan End Date</th>
                            <th>Plan Insuredamount</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.plans.map(
                                    Plan =>
                                    <tr key={Plan.planId}>
                                        <td>{Plan.planId}</td>
                                        <td>{Plan.planName}</td>
                                        <td>{Plan.planStartDate}</td>
                                        <td>{Plan.planEndDate}</td>
                                        <td>{Plan.insuredAmount}</td>
                                        <Link to={"/updateplan/" + Plan.planId} className="btn btn-success">
                                            update
                                        </Link>
                                    

                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div></>      
            )
    }

}