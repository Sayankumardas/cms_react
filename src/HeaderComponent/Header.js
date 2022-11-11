import React, { Component } from "react";
import Navbarcomponent from "../NavBarComponent/NavBar";


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <Navbarcomponent/>
                </header>
            </div>
        )
    }
}