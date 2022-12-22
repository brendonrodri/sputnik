import React from "react";
import Logo from "../../assets/logo.png";
import NavBarComponent from "../navBar";
import * as S from "./style"
export default function HeaderComponent (){
    return(
        <S.Header>
            <S.HeaderLogo src={Logo} alt="logo"/>
            <NavBarComponent />
        </S.Header>
    )
}