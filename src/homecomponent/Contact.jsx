import React, { Component } from "react";
import '../css/Contact.css'
export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <br></br>
                <br></br>
                <table className="Table-contact" class="table table-bordered table-inverse">
                    <thead class="thead-inverse">
                        <tr className="tr-contact-1">
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Gmail</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr className="tr-contact-2">
                                <td scope="row">Shristi Clint</td>
                                <td>90087620</td>
                                <td>Clint@gmail.com</td>
                            </tr>
                            <tr className="tr-contact-2">
                                <td scope="row">Sayan Kumar Das</td>
                                <td>90070128</td>
                                <td>Sayankar565@gmail.com</td>
                            </tr>
                            <tr className="tr-contact-2">
                                <td scope="row">Mohammad Furkhan</td>
                                <td>91637889</td>
                                <td>furkhan@gmail.com</td>
                            </tr>
                        </tbody>
                </table>
                </div>
                
        )
}
}