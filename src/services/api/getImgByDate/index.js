import React, {useState, useEffect} from "react";
import axios from "axios";
const GetImageByDate = ()=>{
    const [imgbydate, setImgByDate] = useState([])
    const [title, setTitle] = useState()
    const [date, setDate] = useState("2012-11-11")
    useEffect(()=>{
        getImageByDate()
    })
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
export default GetImageByDate