import React, {useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const ApiContainer = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const Img = styled.img`
    width: 30%;
`
export default function ApiComponent() {
    const [apidata, setApidata] = useState([])
    useEffect(()=>{
        getApi()
    },[])
    const getApi = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZJ64BLB4l4yTmzDr5wRNb6E7GDAWSlO9Xw6MOdhY&count=50`).then((response) => {
            setApidata(response.data)
        })
    }
    return (
        <ApiContainer>
            {apidata.map((item)=>(
                    <Img src={item.url} alt={item.title} />
            ))}
        </ApiContainer>
    )
}