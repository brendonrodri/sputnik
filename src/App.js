import React from "react";
import HeaderComponent from "./components/Header";
import { GlobalStyle } from "./services/globalStyle/globalstyle";
export default function App (){
  return(
    <>
    <GlobalStyle />
    <HeaderComponent />
    </>
  )
}