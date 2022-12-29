import React from "react";
import ApiComponent from "./components/apiComponent";
import HeaderComponent from "./components/Header";
import { GlobalStyle } from "./services/globalStyle/globalstyle";
export default function App (){
  return(
    <>
    <GlobalStyle />
    <HeaderComponent />
    <ApiComponent />
    </>
  )
}