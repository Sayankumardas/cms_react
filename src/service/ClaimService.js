import axios from "axios";

class ClaimService{

    getAllClaims(){
        
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getclaimdetails");
    }
    saveClaim(claims){
        
        return axios.post("http://localhost:8081/claim/ClaimManagementSystem/addclaims",claims);
    }
    getClaimById(claimId){
        
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getclaimdetailsbyid/"+claimId);
    }
    updateClaim(claims,Id){
        
        return axios.put("http://localhost:8081/claim/ClaimManagementSystem/updateclaimdetails/"+Id,claims);
    }
    getClaimByType(type){
        
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getclaimdetailsbyclaimtype/"+type);
    }
    
    // deleteClaim(Id){
        
    //     return axios.delete("http://localhost:8080/claim/ClaimManagementSystem/deleteclaimdetails/"+Id);
    // }

}

export default new ClaimService();

