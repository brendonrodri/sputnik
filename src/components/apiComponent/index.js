import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
const ApiContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    width: 70%;
    margin: 0 auto;
`

export default function ApiComponent (){
const [img, setImg] = useState()
    const getApi = ()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZJ64BLB4l4yTmzDr5wRNb6E7GDAWSlO9Xw6MOdhY`).then((response)=>{
            console.log(response.data.hdurl)
            setImg(response.data.hdurl)
        })
    }
    return(
        <ApiContainer>
            <button onClick={()=>{getApi()}}>Buscar</button>
            <Img src={img} alt="asasassasa" />
        </ApiContainer>
    )
}