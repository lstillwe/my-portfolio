import React from "react";
import Nav from "./Nav";
import my_photo from "../../assets/images/Stillwell_Lisa_Photo.jpeg"

function Header ({currentPage, handlePageChange }) {

    return(
        <header className= "header">
            <img src={my_photo} alt="" />
            <h1 className="heading">Lisa Stillwell</h1>
            <Nav currentPage = {currentPage} handlePageChange={handlePageChange}/>
        </header>
      
    )
}

export default Header;