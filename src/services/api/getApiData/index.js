import React, {useState, useEffect} from "react";
import axios from "axios";
import * as S from "./style"
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
            <S.Img src={item.url} alt={item.title} />
        ))}
       </div>
    )
}
export default GetApiData