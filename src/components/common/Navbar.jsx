import React from "react";
import NavbarWithAuth from "./NavbarWithAuth";
import NavbarWithoutAuth from "./NavbarWithoutAuth";



const Navbar = ({ token }) => {


    return (
        <>
            {token !== null && (<NavbarWithAuth />)}
            {token === null && (<NavbarWithoutAuth />)}
        </>

    );

}

export default Navbar;