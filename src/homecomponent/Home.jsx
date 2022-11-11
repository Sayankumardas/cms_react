import React, { Component } from "react";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import new1 from '../images/new1.jpeg';
import new2 from '../images/new2.jpeg';
import new3 from '../images/new3.jpeg'; 
import '../css/Footer.css'
import '../css/Home.css'
import { Link } from "react-router-dom";
import Contact from "./Contact";
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
//   } from "./FooterStyles";


export default class HomeComponent extends Component {
    render() {
        return (
            <>
            {/* <img src={login2} class="d-block w-100" alt="login link" width="800" height="800"/> */}
                {/* <div className="jumbotron jumbotron-fluid newstyle">
        <div className="container">
            <h1 className="display-3">Online Shopping</h1>
            <p className="lead">one stop solution for all daily needs</p>
            <hr className="my-2" />
        </div>
    </div> */}
               <div className="img">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={new3} class="d-block w-100" alt="Log In" height="650"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>Move to Next Slide If You Are New</h1>
                                </div>
                                <Link to={"/MemberLogin"} className="btn btn-primary btn-lg btn-block"> 
                                   Log In                                          
                                </Link>
                        </div>
                        <div class="carousel-item">
                            <img src={new1} class="d-block w-100" alt="New User Registration" height="650"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1>REGISTER BELOW</h1>
                                </div>

                                <Link to={"/addmember"} className="btn btn-outline-success btn-lg btn-block">                         
                                            New User Registration
                                </Link>
                        </div>
                    </div> 

                    
                     <div class="spinner-grow" role="status">
                                  <span class="sr-only">Loading...</span>
                                </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                    </div>
                    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" href="Contact">Contact</a>
      </li>
    </ul>
  </div>
                
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={image1} alt="life quote" />
                            <div className="card-body">
                                <h4>Mediclaim insurance</h4>
                                <p>Fun is Like a Life Insurance the older you get the more its costs</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={image2} alt="life quote" />
                            <div className="card-body">
                                <h4>Individual health policy</h4>
                                <p>Everything in life is somewhere else, and you get there in a car</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={image3} alt="life quote" />
                            <div className="card-body">
                                <h4>Family floater plans</h4>
                                <p>Health feels pretty good when your expenses are covered</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <br></br>
                {/* <footer className="style">

                    © 2022 Claim Management System


                </footer> */}
                <div class="card text-center">

  <div class="card-body-footer">
    <h5 class="card-title">© 2022 Claim Management System</h5>
    <p class="card-text">We Care About Your Plans While You Can Plan Your Future</p>
    {/* <a href="www.linkedin.com/in/sayan-kumar-das-212413192" class="btn btn-primary">Linkedin</a> */}
  </div>
</div>              
      
            </>
        )
    }
}