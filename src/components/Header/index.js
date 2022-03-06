import React from "react";
import Nav from "./Nav";

function Header ({currentPage, handlePageChange }) {

    return(
        <header className= "header">
            <h1 className="heading">Lisa Stillwell</h1>
            <Nav currentPage = {currentPage} handlePageChange={handlePageChange}/>
        </header>
      
    )
}

export default Header;