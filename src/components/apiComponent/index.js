import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const ApiContainer = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 480px){
        flex-direction: column;
        align-items: center;
    }
`
const Img = styled.img`
    width: 30%;
    @media (max-width: 480px){
        width: 90%;
        margin-top: 1rem;
    }
`
export default function ApiComponent() {
    return (
        <ApiContainer>
            <GetImageByDate />
           <GetApiData />
        </ApiContainer>
    )
}
const GetApiData =()=>{
    const [apidata, setApidata] = useState([])
    useEffect(() => {
        getApi()
    }, [])
    const getApi = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZJ64BLB4l4yTmzDr5wRNb6E7GDAWSlO9Xw6MOdhY&count=10`).then((response) => {
            setApidata(response.data);
        })
    }
    return(
        <div>
            {apidata.map((item) => (
            <Img src={item.url} alt={item.title} />
        ))}
       </div>
    )
}
const GetImageByDate = ()=>{
    const [imgbydate, setImgByDate] = useState([])
    const [title, setTitle] = useState()
    const [date, setDate] = useState("2011-11-11")
    const getImageByDate = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZJ64BLB4l4yTmzDr5wRNb6E7GDAWSlO9Xw6MOdhY&date=${date}`).then((response) => {
            setImgByDate(response.data.url)
            setTitle(response.data.title)
            console.log(response.data)
            console.log('clicou')
        })
    }
    return(
        <div>
             <div>
                <input onChange={e=>{setDate(e.target.value)
                console.log(date)}} value={date}
                    placeholder="Ano-mês-dia" />
                <button onClick={() => {
                    getImageByDate()
                }}>buscar</button>
            </div>
            <img src={imgbydate} alt={title}/>
        </div>
    )
}