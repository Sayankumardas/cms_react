import axios from "axios";

class MemberService{

    getAllMembers(){
        
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getallmembers");
    }
    saveMember(member){
        return axios.post("http://localhost:8081/claim/ClaimManagementSystem/addmember",member);
    }
    deleteMember(Id){
        return axios.delete("http://localhost:8081/claim/ClaimManagementSystem/deletemember/"+Id);
    }
    updateMember(member,Id){
        return axios.put("http://localhost:8081/claim/ClaimManagementSystem/updatemember/"+Id,member);
    }
    getMemberById(Id){
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getmember/"+Id);
    }
    MemberLogin(){
        return axios.post("http://localhost:8081/claim/ClaimManagementSystem/MemberLogin");
    }
    AdminLogin(){
        return axios.post("http://localhost:8081/claim/ClaimManagementSystem/AdminLogin");
    }
    getMemberById(memberId){
        return axios.get("http://localhost:8081/claim/ClaimManagementSystem/getmember/"+memberId);

    }
    

}

export default new MemberService();