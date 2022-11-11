import ClaimService from "../service/ClaimService";
import React from "react";

export class UpdateClaimComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            claimId: this.props.match.params.Id,
            claimStatus: ''
        }
        this.rejectButtonHandler = this.rejectButtonHandler.bind(this);
        this.approveButtonHandler = this.approveButtonHandler.bind(this);
    }

    approveButtonHandler() {
        let claim = {
            claimStatus: "approved"
        }
        console.log('claim =>' + JSON.stringify(claim))
        ClaimService.updateClaim(claim, this.state.claimId).then(res => {
            alert("claim Approved succesfully....")
        })
    }

    rejectButtonHandler() {
        let claim = {
            claimStatus: "Rejected"
        }
        console.log('claim =>' + JSON.stringify(claim))
        ClaimService.updateClaim(claim, this.state.claimId).then(res => {
            alert("claim Rejected succesfully....")
        })
    }

    render() {
        return (

            <div>

                <br></br>
                <div className="container-claim">
                    <div className="row">
                        <div className="Main">
                            <h2>Approve/Reject</h2>
                        </div>
                        <div className="form">
                            <button className="btn btn-primary" onClick={this.approveButtonHandler.bind(this)}>Approve</button>
                            <button className="btn btn-danger" onClick={this.rejectButtonHandler.bind(this)}>Reject</button>

                        </div>
                    </div>
                </div>

            </div>


        )


    }
}