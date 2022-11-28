import React from "react";
import '../styles/navigation.css';
import gecalogo from "../images/gecalogo.jpg";

export default function Header() {
    return (
        <>
            <div className="head-navigation">
                <div>
                    <img className="logo-image" src={gecalogo} height={200} width={250} alt="logo"></img>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}