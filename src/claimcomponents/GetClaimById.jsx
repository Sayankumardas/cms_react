import React, { Component } from "react";
import ClaimService from "../service/ClaimService";


export class GetClaimById extends Component{
    constructor(props){
        super(props);
        this.state = {
            claims: []
        }
    }
    
    componentDidMount(){
        
        ClaimService.getClaimById(this.props.match.params.Id).then ((res) =>{
            console.log(res.data);
            this.setState({claims : res.data});
        })
    }
   
    render(){
        return(
            <><h2 className="text-center">Claim List</h2>
                        <div className="row-plan">
                <table className="table table-striped table-bordered">
                        <tr>
                            <th>Claim Id</th>
                            <td>{this.state.claims.claimId}</td>
                        </tr>
                        <tr>
                            <th>Claim Date</th>
                            <td>{this.state.claims.claimDate}</td>
                        </tr>
                        <tr>
                        <th>Claim Total Amount</th>
                        <td>{this.state.claims.claimTotalAmount}</td>
                        </tr>
                        <tr>
                        <th>Amount To Claim</th>
                        <td>{this.state.claims.amountToClaim}</td>
                        </tr>
                        <tr>
                        <th>Claim Status</th>
                        <td>{this.state.claims.claimStatus}</td>
                        </tr>
                        <tr>
                        <th>Bill details</th>
                        <td>{this.state.claims.billDetails}</td>
                        </tr>
                        <tr>
                        <th>Claim Documents</th>
                        <td>{this.state.claims.claimDocuments}</td>
                        </tr>
                        <tr>
                        <th>Claim Type</th>
                        <td>{this.state.claims.claimType}</td>
                        </tr>
                        <tr>
                        <th>Remaining Amount</th>
                        <td>{this.state.claims.remaining_amount}</td>
                        </tr>
                                                                       
                </table>
            </div>
            </>      
            )
    }

}
                            
                            
