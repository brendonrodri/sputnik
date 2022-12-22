import React from "react";
import * as S from "./style";
const NavBarComponent = ()=>{
    return(
        <S.NavBar>
            <S.MenuList>
                <S.MenuItem>Início</S.MenuItem>
                <S.MenuItem>Galeria</S.MenuItem>
                <S.MenuItem>História</S.MenuItem>
                <S.MenuItem>Sputnik</S.MenuItem>
            </S.MenuList>
        </S.NavBar>
    )
}
export default NavBarComponent;