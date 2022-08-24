import React, { useEffect } from 'react';
import axios from 'axios'


function APIData() {

    useEffect(()=>{
        axios.get("http://localhost:4111/get/offers")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
            })
    },[])


    return ( 
        <div style={{border:"2px solid red", borderRadius:"5px", margin:"4px", padding:"4px"}}>
            <h1>Get data from remote API!</h1>
        </div>
     );
}

export default APIData;